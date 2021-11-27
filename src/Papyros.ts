/* eslint-disable max-len */
import { proxy, Remote } from "comlink";
import I18n from "i18n-js";
import { Backend } from "./Backend";
import { getBackend, stopBackend } from "./BackendManager";
import { CodeEditor } from "./CodeEditor";
import {
<<<<<<< HEAD
    APPLICATION_STATE_TEXT_ID, EDITOR_WRAPPER_ID, DEFAULT_LOCALE, DEFAULT_PROGRAMMING_LANGUAGE, INPUT_RELATIVE_URL,
=======
    APPLICATION_STATE_TEXT_ID, CODE_TA_ID, DEFAULT_LOCALE, DEFAULT_PROGRAMMING_LANGUAGE, INPUT_RELATIVE_URL,
>>>>>>> Add support for rendering from a given element with I18n
    INPUT_TA_ID, LANGUAGE_SELECT_ID, OUTPUT_TA_ID,
    RUN_BTN_ID, STATE_SPINNER_ID, TERMINATE_BTN_ID
} from "./Constants";
import { PapyrosEvent } from "./PapyrosEvent";
import { plFromString, ProgrammingLanguage, PROGRAMMING_LANGUAGES } from "./ProgrammingLanguage";
import { TRANSLATIONS } from "./Translations";
import { LogType, papyrosLog } from "./util/Logging";

function loadTranslations(): void {
    for (const [language, translations] of Object.entries(TRANSLATIONS)) {
<<<<<<< HEAD
        // Add keys to already existing translations if they exist
        I18n.translations[language] = Object.assign((I18n.translations[language] || {}), translations);
    }
}

const t = I18n.t;

function renderPapyros(parent: HTMLElement, programmingLanguage: ProgrammingLanguage): void {
    const options = PROGRAMMING_LANGUAGES.map(pl => {
        const selected = programmingLanguage === pl ? "selected" : "";
        return `<option ${selected}} value="${pl}">${t(`Papyros.${pl}`)}</option>`;
    }).join("\n");
    parent.innerHTML =
        `
    <div id="papyros" class="max-h-screen h-full overflow-y-hidden">
    <div class="bg-blue-500 text-white text-lg p-4">
      ${t("Papyros.Papyros")}
    </div>
    <div class="m-10">
      <!-- Header -->
      <div class="flex flex-row items-center">
        <label for="language-select">${t("Papyros.programming_language")}</label>
        <select id="language-select" class="m-2 border-2">
          ${options}
        </select>
        <button id="run-code-btn" type="button"
          class="text-white bg-blue-500 border-2 m-3 px-4 inset-y-2 rounded-lg
                 disabled:opacity-50 disabled:cursor-wait">
            ${t("Papyros.run")}
        </button>
        <button id="terminate-btn" type="button" 
            class="text-white bg-red-500 border-2 m-3 px-4 inset-y-2 rounded-lg
            disabled:opacity-50 disabled:cursor-wait" hidden>
            ${t("Papyros.terminate")}
        </button>
        <div class="flex flex-row items-center">
          <svg id="state-spinner" class="animate-spin mr-3 h-5 w-5 text-white"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" display="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="red" stroke-width="4"></circle>
          <path class="opacity-75" fill="red"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          <div id="application-state-text">${t("Papyros.loading")}</div>
        </div>
      </div>

      <!--Body of the application-->
      <div class="grid grid-cols-2 gap-4 box-border max-h-full">
        <!--Left code section-->
        <div class="col-span-1">
          <h1>${t("Papyros.enter_code")}:</h1>
          <div id="code-area" class="overflow-auto max-h-full min-h-1/4 border-solid border-gray-200 border-2"></div>
        </div>
        <!--Right user input and output section-->
        <div class="col-span-1">
          <h1>${t("Papyros.enter_input")}:</h1>
          <textarea id="code-input-area" class="border-2 h-auto w-full max-h-1/4 overflow-auto" rows="5"></textarea>
          <h1>${t("Papyros.code_output")}:</h1>
          <textarea id="code-output-area" readonly class="border-2 w-full min-h-1/5 max-h-3/5 overflow-auto"></textarea>
        </div>
      </div>
    </div>
  </div>
    `;
}


enum PapyrosState {
    Loading = "loading",
    Running = "running",
    AwaitingInput = "awaiting_input",
    Terminating = "terminating",
    Ready = "ready"
}

class PapyrosStateManager {
    state: PapyrosState;
    stateSpinner: HTMLElement;
    stateText: HTMLElement;
    runButton: HTMLButtonElement;
    terminateButton: HTMLButtonElement;

    constructor() {
        this.stateSpinner = document.getElementById(STATE_SPINNER_ID) as HTMLElement;
        this.stateText = document.getElementById(APPLICATION_STATE_TEXT_ID) as HTMLElement;
        this.runButton = document.getElementById(RUN_BTN_ID) as HTMLButtonElement;
        this.terminateButton = document.getElementById(TERMINATE_BTN_ID) as HTMLButtonElement;
        this.state = PapyrosState.Ready;
    }

    setState(state: PapyrosState, message?: string): void {
        if (state !== this.state) {
            this.state = state;
            if (state === PapyrosState.Ready) {
                this.stateSpinner.style.display = "none";
                this.runButton.disabled = false;
                this.terminateButton.hidden = true;
            } else {
                this.stateSpinner.style.display = "";
                this.runButton.disabled = true;
                this.terminateButton.hidden = false;
            }
            this.stateText.innerText = message || t(`Papyros.${state}`);
        }
    }
}

interface PapyrosCodeState {
    programmingLanguage: ProgrammingLanguage;
    editor: CodeEditor;
    backend: Remote<Backend>;
    languageSelect: HTMLSelectElement;
    runId: number;
    outputArea: HTMLInputElement;
}

interface PapyrosInputState {
    lineNr: number;
    textEncoder: TextEncoder;
    inputArea: HTMLInputElement;
    inputTextArray?: Uint8Array;
    inputMetaData?: Int32Array;
}

export class Papyros {
    stateManager: PapyrosStateManager;
    codeState: PapyrosCodeState;
    inputState: PapyrosInputState;

    constructor(programmingLanguage: ProgrammingLanguage,
        inputTextArray?: Uint8Array, inputMetaData?: Int32Array) {
        this.stateManager = new PapyrosStateManager();
        this.codeState = {
            programmingLanguage: programmingLanguage,
            editor: new CodeEditor(
                document.getElementById(EDITOR_WRAPPER_ID) as HTMLInputElement, programmingLanguage),
            backend: {} as Remote<Backend>,
            languageSelect: document.getElementById(LANGUAGE_SELECT_ID) as HTMLSelectElement,
            outputArea: document.getElementById(OUTPUT_TA_ID) as HTMLInputElement,
            runId: 0
        };

        this.inputState = {
            lineNr: 0,
            textEncoder: new TextEncoder(),
            inputArea: document.getElementById(INPUT_TA_ID) as HTMLInputElement,
            inputTextArray: inputTextArray,
            inputMetaData: inputMetaData
        };
    }

    async launch(): Promise<Papyros> {
        this.codeState.languageSelect.addEventListener("change",
            async () => {
                return this.setProgrammingLanguage(plFromString(this.codeState.languageSelect.value));
            }
        );
        this.stateManager.runButton.addEventListener("click", () => this.runCode());
        this.stateManager.terminateButton.addEventListener("click", () => this.terminate());

=======
        I18n.translations[language] = translations;
    }
}

const t = I18n.t;

function renderPapyros(parent: HTMLElement, programmingLanguage: ProgrammingLanguage): void {
    const options = PROGRAMMING_LANGUAGES.map(pl => {
        const selected = programmingLanguage === pl ? "selected" : "";
        return `<option ${selected}} value="${pl}">${t(pl)}</option>`;
    }).join("\n");
    parent.innerHTML =
        `
    <div id="papyros" class="max-h-screen h-full overflow-y-hidden">
    <div class="bg-blue-500 text-white text-lg p-4">
      ${t("Papyros")}
    </div>
    <div class="m-10">
      <!-- Header -->
      <div class="flex flex-row items-center">
        <label for="language-select">Programming language</label>
        <select id="language-select" class="m-2 border-2">
          ${options}
        </select>
        <button id="run-code-btn" type="button"
          class="text-white bg-blue-500 border-2 m-3 px-4 inset-y-2 rounded-lg justify-items-center">
            ${t("run")}
        </button>
        <button id="terminate-btn" type="button" class="mr-1 btn btn-danger" hidden>
            ${t("terminate")}
        </button>
        <div class="flex flex-row items-center">
          <svg id="state-spinner" class="animate-spin mr-3 h-5 w-5 text-white"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" display="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="red" stroke-width="4"></circle>
          <path class="opacity-75" fill="red"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          <div id="application-state-text">${t("loading")}</div>
        </div>
      </div>

      <!--Body of the application-->
      <div class="grid grid-cols-2 gap-4 box-border max-h-full">
        <!--Left code section-->
        <div class="col-span-1">
          <h1>${t("enter code")}:</h1>
          <div id="code-area" class="overflow-auto max-h-full"></div>
        </div>
        <!--Right user input and output section-->
        <div class="col-span-1">
          <h1>${t("enter input")}:</h1>
          <textarea id="code-input-area" class="border-2 h-auto w-full max-h-1/4 overflow-auto" rows="5"></textarea>
          <h1>${t("code output")}:</h1>
          <textarea id="code-output-area" readonly class="border-2 w-full min-h-1/5 max-h-3/5 overflow-auto"></textarea>
        </div>
      </div>
    </div>
  </div>
    `;
}


enum PapyrosState {
    Loading = "loading",
    Running = "running",
    AwaitingInput = "awaiting input",
    Terminating = "terminating",
    Ready = "ready"
}

class PapyrosStateManager {
    state: PapyrosState;
    stateSpinner: HTMLElement;
    stateText: HTMLElement;

    constructor(state: PapyrosState) {
        this.stateSpinner = document.getElementById(STATE_SPINNER_ID) as HTMLElement;
        this.stateText = document.getElementById(APPLICATION_STATE_TEXT_ID) as HTMLElement;
        this.state = state;
    }

    setState(state: PapyrosState): void {
        if (state !== this.state) {
            this.state = state;
            if (state === PapyrosState.Ready) {
                this.stateSpinner.style.display = "none";
                this.stateText.innerText = "";
            } else {
                this.stateSpinner.style.display = "";
                this.stateText.innerText = t(state);
            }
        }
    }
}

interface PapyrosCodeState {
    programmingLanguage: ProgrammingLanguage;
    editor: CodeEditor;
    backend: Remote<Backend>;
    languageSelect: HTMLSelectElement;
    codeElement: HTMLInputElement;
    runId: number;
    runButton: HTMLButtonElement;
    terminateButton: HTMLButtonElement;
    outputArea: HTMLInputElement;
}

interface PapyrosInputState {
    lineNr: number;
    textEncoder: TextEncoder;
    inputArea: HTMLInputElement;
    inputTextArray?: Uint8Array;
    inputMetaData?: Int32Array;
}

export class Papyros {
    stateManager: PapyrosStateManager;
    codeState: PapyrosCodeState;
    inputState: PapyrosInputState;

    constructor(parent: HTMLElement, locale: string, programmingLanguage: ProgrammingLanguage,
        inputTextArray?: Uint8Array, inputMetaData?: Int32Array) {
        this.stateManager = new PapyrosStateManager(PapyrosState.Loading);
        this.codeState = {
            programmingLanguage: programmingLanguage,
            editor: new CodeEditor(
                document.getElementById(CODE_TA_ID) as HTMLInputElement, programmingLanguage),
            backend: {} as Remote<Backend>,
            languageSelect: document.getElementById(LANGUAGE_SELECT_ID) as HTMLSelectElement,
            codeElement: document.getElementById(CODE_TA_ID) as HTMLInputElement,
            outputArea: document.getElementById(OUTPUT_TA_ID) as HTMLInputElement,
            runId: 0,
            runButton: document.getElementById(RUN_BTN_ID) as HTMLButtonElement,
            terminateButton: document.getElementById(TERMINATE_BTN_ID) as HTMLButtonElement,
        };

        this.inputState = {
            lineNr: 0,
            textEncoder: new TextEncoder(),
            inputArea: document.getElementById(INPUT_TA_ID) as HTMLInputElement,
            inputTextArray: inputTextArray,
            inputMetaData: inputMetaData
        };
    }

    async launch(): Promise<Papyros> {
        this.codeState.languageSelect.addEventListener("change",
            async () => {
                const {
                    languageSelect, editor, backend
                } = this.codeState;
                const language = plFromString(languageSelect.value);
                stopBackend(backend);
                editor.setLanguage(language, editor.getCode());
                await this.startBackend();
            }
        );
        this.codeState.runButton.addEventListener("click", () => this.runCode());
        this.codeState.terminateButton.addEventListener("click", () => this.terminate());

>>>>>>> Add support for rendering from a given element with I18n
        this.inputState.inputArea.onkeydown = e => {
            papyrosLog(LogType.Debug, "Key down in inputArea", e);
            if (this.stateManager.state === PapyrosState.AwaitingInput &&
                e.key.toLowerCase() === "enter") {
                papyrosLog(LogType.Debug, "Pressed enter! Sending input to user");
                this.sendInput();
            }
        };
<<<<<<< HEAD
        await this.startBackend();
        return this;
    }

    async setProgrammingLanguage(programmingLanguage: ProgrammingLanguage): Promise<void> {
        if (this.codeState.programmingLanguage !== programmingLanguage) {
            stopBackend(this.codeState.backend);
            this.codeState.programmingLanguage = programmingLanguage;
            this.codeState.editor.setLanguage(programmingLanguage);
            await this.startBackend();
        }
    }

    async startBackend(): Promise<void> {
        const {
            programmingLanguage
=======

        return this;
    }

    setProgrammingLanguage(programmingLanguage: ProgrammingLanguage): void {
        if (this.codeState.programmingLanguage !== programmingLanguage) {
            stopBackend(this.codeState.backend);
            this.codeState.programmingLanguage = programmingLanguage;
            this.codeState.editor.setLanguage(programmingLanguage);
        }
    }

    async startBackend(): Promise<void> {
        const {
            runButton, programmingLanguage
>>>>>>> Add support for rendering from a given element with I18n
        } = this.codeState;
        const {
            inputTextArray, inputMetaData
        } = this.inputState;
        this.stateManager.setState(PapyrosState.Loading);
<<<<<<< HEAD
        const backend = getBackend(programmingLanguage);
        await backend.launch(proxy(e => this.onMessage(e)), inputTextArray, inputMetaData);
        this.codeState.backend = backend;
        this.stateManager.setState(PapyrosState.Ready);
=======
        runButton.disabled = true;
        const backend = getBackend(programmingLanguage);
        await backend.launch(proxy(e => this.onMessage(e)), inputTextArray, inputMetaData);
        runButton.disabled = false;
        this.stateManager.setState(PapyrosState.Ready);
        return Promise.resolve();
>>>>>>> Add support for rendering from a given element with I18n
    }

    static fromElement(parent: HTMLElement, locale = DEFAULT_LOCALE, programmingLanguage = DEFAULT_PROGRAMMING_LANGUAGE,
        inputTextArray?: Uint8Array, inputMetaData?: Int32Array): Promise<Papyros> {
        loadTranslations();
<<<<<<< HEAD
        I18n.locale = locale;
        I18n.defaultLocale = DEFAULT_LOCALE;
        renderPapyros(parent, programmingLanguage);
        return new Papyros(programmingLanguage, inputTextArray, inputMetaData).launch();
=======
        renderPapyros(parent, programmingLanguage);
        return new Papyros(parent, locale, programmingLanguage, inputTextArray, inputMetaData).launch();
>>>>>>> Add support for rendering from a given element with I18n
    }


    onError(e: PapyrosEvent): void {
        papyrosLog(LogType.Debug, "Got error in Papyros: ", e);
        // todo prettify errors
        this.codeState.outputArea.value += e.data;
    }

    async sendInput(): Promise<boolean> {
        papyrosLog(LogType.Debug, "Handling send Input in Papyros");
        const {
            inputArea, lineNr, inputMetaData, inputTextArray, textEncoder
        } = this.inputState;
        const lines = inputArea.value.split("\n");
        if (lines.length > lineNr && lines[lineNr]) {
            papyrosLog(LogType.Debug, "Sending input to user: " + lines[lineNr]);
            const line = lines[lineNr];
            if (!inputMetaData || !inputTextArray) {
                await fetch(INPUT_RELATIVE_URL,
                    {
                        method: "POST",
                        body: JSON.stringify({ "input": line })
                    });
            } else {
                const encoded = textEncoder.encode(lines[lineNr]);
                inputTextArray.set(encoded);
                Atomics.store(inputMetaData, 1, encoded.length);
                Atomics.store(inputMetaData, 0, 1);
            }
            this.inputState.lineNr += 1;
            this.stateManager.setState(PapyrosState.Running);
            return true;
        } else {
            papyrosLog(LogType.Debug, "Had no input to send, still waiting!");
            return false;
        }
    }

    async onInput(e: PapyrosEvent): Promise<void> {
        papyrosLog(LogType.Debug, "Received onInput event in Papyros: ", e);
        if (!await this.sendInput()) {
            this.stateManager.setState(PapyrosState.AwaitingInput);
            // stateText.innerText = "Awaiting input for: " + e.data;
            papyrosLog(LogType.Debug, "User needs to enter input before code can continue");
        } else {
            this.stateManager.setState(PapyrosState.Running);
        }
    }

    onMessage(e: PapyrosEvent): void {
        papyrosLog(LogType.Debug, "received event in onMessage", e);
        if (e.runId === this.codeState.runId) {
            if (e.type === "output") {
                this.codeState.outputArea.value += e.data;
            } else if (e.type === "input") {
                this.onInput(e);
            } else if (e.type === "error") {
                this.onError(e);
            }
        } else {
            papyrosLog(LogType.Debug, "Received event with outdated runId: ", e);
        }
    }

    async runCode(): Promise<void> {
        this.codeState.runId += 1;
        this.stateManager.setState(PapyrosState.Running);
<<<<<<< HEAD
        this.codeState.outputArea.value = "";
=======
        this.codeState.runButton.disabled = true;
        this.inputState.lineNr = 0;
        this.codeState.outputArea.value = "";
        this.codeState.terminateButton.hidden = false;
>>>>>>> Add support for rendering from a given element with I18n
        papyrosLog(LogType.Debug, "Running code in Papyros, sending to backend");
        // const start = new Date().getTime();
        try {
            await this.codeState.backend.runCode(
<<<<<<< HEAD
                this.codeState.editor.getCode(), this.codeState.runId);
        } catch (error: any) {
            this.onError(error);
        } finally {
            const end = new Date().getTime();
            this.stateManager.setState(PapyrosState.Ready, t("Papyros.finished", { time: end - start }));
            this.inputState.inputArea.value = "";
            this.inputState.lineNr = 0;
=======
                this.codeState.codeElement.value, this.codeState.runId);
        } catch (error: any) {
            this.onError(error);
        } finally {
            // const end = new Date().getTime();
            this.stateManager.setState(PapyrosState.Ready);
            // stateText.innerText = `Code executed in ${end - start} ms`;
            // terminateButton.hidden = true;
            // runButton.disabled = false;
>>>>>>> Add support for rendering from a given element with I18n
        }
    }

    terminate(): Promise<void> {
        papyrosLog(LogType.Debug, "Called terminate, stopping backend!");
        this.codeState.runId += 1; // ignore messages coming from last run
        this.stateManager.setState(PapyrosState.Terminating);
<<<<<<< HEAD
=======
        // terminateButton.hidden = true;
>>>>>>> Add support for rendering from a given element with I18n
        stopBackend(this.codeState.backend);
        return this.startBackend();
    }
}
