import { INPUT_RELATIVE_URL } from "./Constants";
import { isUrgent, PapyrosEvent } from "./PapyrosEvent";
import { LogType, papyrosLog } from "./util/Logging";

function getInputCallback(inputTextArray?: Uint8Array, inputMetaData?: Int32Array): () => string {
    if (inputTextArray && inputMetaData) {
        const textDecoder = new TextDecoder();
        return () => {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                if (Atomics.wait(inputMetaData, 0, 0, 100) === "timed-out") {
                    // papyrosLog.log("waiting on input");
                    // if (interruptBuffer[0] === 2) {
                    //  return null;
                    // }
                } else {
                    break;
                }
            }
            Atomics.store(inputMetaData, 0, 0);
            const size = Atomics.exchange(inputMetaData, 1, 0);
            const bytes = inputTextArray.slice(0, size);
            return textDecoder.decode(bytes);
        };
    } else {
        return () => {
            const request = new XMLHttpRequest();
            do {
                // `false` makes the request synchronous
                request.open("GET", INPUT_RELATIVE_URL, false);
                request.send(null);
            } while (request.status >= 400); // todo better error handling
            return request.responseText;
        };
    }
}

const START_BUFFERING_THRESHOLD = 1000;
const QUEUE_FLUSH_SIZE = 1000;
export abstract class Backend {
    eventCounter: number;
    eventQueue: Array<PapyrosEvent>;
    onEvent: (e: PapyrosEvent) => void;
    runId: string;

    constructor() {
        this.eventCounter = 0;
        this.eventQueue = [];
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.onEvent = () => { };
        this.runId = "";
    }

    /**
     * Initialize the backend, setting up any globals required
     * @param {function(PapyrosEvent):void} onEvent Callback for when events occur
     * @param {Uint8Array} inputTextArray Optional shared buffer for input
     * @param {Int32Array} inputMetaData Optional shared buffer for metadata about input
     * @return {Promise<void>} Promise of launching
     */
    launch(onEvent: (e: PapyrosEvent | Array<PapyrosEvent>) => void,
        inputTextArray?: Uint8Array, inputMetaData?: Int32Array): Promise<void> {
        const inputCallback = getInputCallback(inputTextArray, inputMetaData);
        this.onEvent = (e: PapyrosEvent) => {
            e.runId = this.runId;
            this.eventCounter += 1;
            if (this.eventCounter >= START_BUFFERING_THRESHOLD) {
                this.eventQueue.push(e);
            }
            // urgent messages or buffer is filled up enough
            if (isUrgent(e) || this.eventQueue.length >= QUEUE_FLUSH_SIZE) {
                if (this.eventQueue.length > 0) {
                    onEvent(this.eventQueue);
                    this.eventQueue = [];
                } else {
                    onEvent(e);
                }
            } else {
                onEvent(e);
            }
            if (e.type === "input") {
                return inputCallback();
            }
        };
        return Promise.resolve();
    }

    abstract _runCodeInternal(code: string): Promise<any>;

    /**
     * Validate and run arbitrary code
     * @param {string} code The code to run
     * @param {string} runId The uuid for this execution
     * @return {Promise<void>} Promise of execution
     */
    async runCode(code: string, runId: string): Promise<void> {
        this.eventCounter = 0;
        this.eventQueue = [];
        this.runId = runId;
        papyrosLog(LogType.Debug, "Running code in worker: ", code);
        try {
            const data = await this._runCodeInternal(code);
            papyrosLog(LogType.Important, "ran code: " + code + " and received: ", data);
            return this.onEvent({ type: "success", data: data, runId: runId });
        } catch (error: any) {
            const errorString = "toString" in error ? error.toString() : JSON.stringify(error);
            papyrosLog(LogType.Error, "Error during execution: ", error, errorString);
            return this.onEvent({ type: "error", data: errorString, runId: runId });
        }
    }
}
