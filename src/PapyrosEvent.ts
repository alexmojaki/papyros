export interface PapyrosEvent {
    type: "input" | "output" | "script" | "success" | "error";
    data: string;
    runId: string;
}

export function isUrgent(e: PapyrosEvent): boolean {
    return e.type !== "output";
}
