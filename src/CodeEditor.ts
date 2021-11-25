import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { ProgrammingLanguage } from "./ProgrammingLanguage";
import { python } from "@codemirror/lang-python";
import { LanguageSupport } from "@codemirror/language";
import { autocompletion } from "@codemirror/autocomplete";
import { KeyBinding } from "@codemirror/view";

function getRunCodeKeyBinding(runCode: () => boolean): KeyBinding {
    return {
        key: "Ctrl-Alt-r",
        run: runCode,
        preventDefault: true
    };
}

function getLanguageSupport(language: ProgrammingLanguage): LanguageSupport {
    switch (language) {
        case ProgrammingLanguage.Python: {
            return python();
        }
        case ProgrammingLanguage.JavaScript: {
            return javascript();
        }
        default: {
            throw new Error(`${language} is not yet supported.`);
        }
    }
}

function getEditorView(parentElement: HTMLElement,
    language: ProgrammingLanguage,
    runCode: () => boolean, initialCode?: string): EditorView {
    return new EditorView({
        state: EditorState.create({
            doc: initialCode || "",
            extensions: [
                getLanguageSupport(language),
                basicSetup,
                keymap.of([indentWithTab, getRunCodeKeyBinding(runCode)])
            ]
        }),
        parent: parentElement
    });
}

export class CodeEditor {
    element: HTMLElement;
    editorView: EditorView | undefined;
    runCode: () => boolean;
    minLines: number;

    constructor(element: HTMLElement,
        language: ProgrammingLanguage, runCode: () => boolean,
        initialCode?: string, minLines = 10) {
        this.element = element;
        this.minLines = minLines;
        this.runCode = runCode;
        this.setLanguage(language, initialCode);
    }

    setLanguage(language: ProgrammingLanguage, code?: string): void {
        const initialCode = code || new Array(this.minLines).fill("").join("\n");
        this.editorView = getEditorView(this.element, language, this.runCode, initialCode);
        this.element.replaceChildren(this.editorView.dom);
    }

    getCode(): string {
        if (this.editorView) {
            return this.editorView.state.doc.toString();
        } else {
            return "";
        }
    }
}
