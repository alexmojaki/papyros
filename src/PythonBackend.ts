import { Backend } from "./Backend";
import { INITIALIZATION_CODE } from "./backend.py";
import { PapyrosEvent } from "./PapyrosEvent";

interface LoadPyodideArgs {
    indexURL: string;
    fullStdLib: boolean;
}
interface Pyodide {
    runPythonAsync: (code: string) => Promise<any>;
    loadPackagesFromImports: (code: string) => Promise<any>;
}
declare global {
    interface Window { loadPyodide: (args: LoadPyodideArgs) => Promise<Pyodide> }
}

window.loadPyodide = window.loadPyodide || {};
const WORKER_PATH = "./PyodideWebWorker.js";
export class PythonBackend implements Backend {
    pyodideWorker: Worker;
    //pyodide: Pyodide;

    constructor(){
        this.pyodideWorker = new Worker(WORKER_PATH);
        //this.pyodide = {} as Pyodide;
    }

    async launch(){
        /*this.pyodide = await window.loadPyodide({
            indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
            fullStdLib: true // default
          });
          */
        await this.runCode(INITIALIZATION_CODE, "", (e) => {});
        return this;
    }

    translate(code: string): string {
      const inputRegex = /(:?^|\s+)input\(/g;
      const outputRegex = "$1await input(";
      if(code){
        code = code.replace(inputRegex, outputRegex );
      }
      return code;
    }

    async runCode(code: string, input: string, onMessage: (e: any) => void){
        return new Promise((onSuccess, onError) => {
          this.pyodideWorker.onerror = onError;
          this.pyodideWorker.onmessage = (e) => {
              const event = e.data;
              console.log("Received message in runCode", event);
              if(event.type === "success"){
                onSuccess(event.data)
              } else {
                onMessage(event);
              }
            };
          this.pyodideWorker.postMessage({
            type: "script",
            python: this.translate(code),
          });
        });
        /*return this.pyodide.loadPackagesFromImports(code)
            .then(() => this.pyodide.runPythonAsync(code));*/
    }

    async shutdown(){
        return Promise.resolve();
    }

    async terminateExecution(){
        this.pyodideWorker.terminate();
        this.pyodideWorker = new Worker(WORKER_PATH);
        await this.launch();
    }

    send(data: PapyrosEvent){
      console.log("Posting data in send: ", data);
      this.pyodideWorker.postMessage(data);
    }
}