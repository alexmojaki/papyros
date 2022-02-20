import escapeHTML from "escape-html";
import { PapyrosEvent } from "./PapyrosEvent";
import { inCircle } from "./util/HTMLShapes";
import { RenderOptions, renderWithOptions, t } from "./util/Util";

export interface FriendlyError {
    name: string;
    traceback?: string;
    info?: string;
    why?: string;
    what?: string;
    where?: string;
}

export class OutputManager {
    outputAreaId = "";

    get outputArea(): HTMLElement {
        return document.getElementById(this.outputAreaId) as HTMLElement;
    }

    renderNextElement(html: string): void {
        this.outputArea.insertAdjacentHTML("beforeend", html);
    }

    spanify(text: string, ignoreEmpty = false): string {
        let spanText = text;
        if (spanText.includes("\n") && spanText !== "\n") {
            spanText = spanText.split("\n")
                .filter(line => !ignoreEmpty || line.trim().length > 0)
                .join("\n");
        }
        return `<span>${escapeHTML(spanText)}</span>`;
    }

    showOutput(output: PapyrosEvent): void {
        if (output.content === "img") {
            this.renderNextElement(`<img src="data:image/png;base64, ${output.data}"></img>`);
        } else {
            this.renderNextElement(this.spanify(output.data, false));
        }
    }

    showError(error: FriendlyError | string): void {
        let errorHTML = "";
        let errorObject = {} as FriendlyError;
        if (typeof (error) === "string") {
            try {
                errorObject = JSON.parse(error) as FriendlyError;
            } catch (_) {
                errorHTML = this.spanify(error);
            }
        }
        if (Object.keys(errorObject).length > 0) {
            let shortTraceback = (errorObject.where || errorObject.traceback || "").trim();
            // Prepend a bit of indentation, so every part has indentation
            shortTraceback = this.spanify("  " + shortTraceback, true);
            errorHTML += "<div class=\"text-red-500 text-bold\">";
            errorHTML += `${inCircle("?", errorObject.info)}${errorObject.name} traceback:\n`;
            errorHTML += shortTraceback + "</div>\n";
            if (errorObject.what) {
                errorHTML += this.spanify(errorObject.what.trim(), true) + "\n";
            }
            if (errorObject.why) {
                errorHTML += this.spanify(errorObject.why.trim(), true) + "\n";
            }
        }

        this.renderNextElement(errorHTML);
    }

    render(options: RenderOptions): HTMLElement {
        this.outputAreaId = options.parentElementId;
        options.attributes = new Map([
            ["title", t("Papyros.output_placeholder")],
            ...(options.attributes || [])
        ]);
        // eslint-disable-next-line max-len
        options.classNames = `border-2 w-full min-h-1/4 max-h-3/5 overflow-auto px-1 whitespace-pre ${options.classNames}`;
        return renderWithOptions(options, "");
    }

    reset(): void {
        this.outputArea.textContent = "";
    }

    onRunStart(): void {
        this.reset();
    }

    onRunEnd(): void {
        // currently empty
    }
}
