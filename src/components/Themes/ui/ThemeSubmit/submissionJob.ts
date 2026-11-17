import {SUBMISSION_STEP} from '../../../../api/themes/types';
import type {SubmissionEvent, ThemeInput} from '../../../../api/themes/types';

export const API_BASE = '/api/themes';
export const ACTIVE_JOB_KEY = 'themes.activeSubmissionReceipt';

export interface StoredSubmission {
    receipt: string;
    input: ThemeInput;
    expiresAt: number;
    dispatchAttempted: boolean;
    userId: number;
    requestFingerprint: string;
    // Workflow run reported by the server; sent back so it does not search for the run again.
    runId?: number;
}

export function loadSubmission(key: string): StoredSubmission | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export function saveSubmission(key: string, job: StoredSubmission) {
    localStorage.setItem(key, JSON.stringify(job));
}

export function clearSubmission(key: string) {
    localStorage.removeItem(key);
}

async function requestJob(path: string, body: unknown, signal: AbortSignal) {
    const response = await fetch(`${API_BASE}/${path}`, {
        method: 'POST',
        credentials: 'same-origin',
        signal,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    if (response.status === 401) {
        return {type: 'error', code: 'session-expired'} as const;
    }
    return (await response.json()) as SubmissionEvent;
}

async function dispatchJob(job: StoredSubmission, key: string, signal: AbortSignal) {
    if (job.dispatchAttempted || loadSubmission(key)?.dispatchAttempted) {
        return null;
    }
    // Persist before the write: a lost response must only be reconciled by polling.
    saveSubmission(key, {...job, dispatchAttempted: true});
    let response: Response;
    try {
        response = await fetch(`${API_BASE}/dispatch`, {
            method: 'POST',
            credentials: 'same-origin',
            signal,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({receipt: job.receipt, input: job.input}),
        });
    } catch {
        return null;
    }
    if (response.ok) {
        return null;
    }
    // An explicit rejection is not an ambiguous write. Retry can dispatch this receipt.
    saveSubmission(key, {...job, dispatchAttempted: false});
    if (response.status === 401) {
        return {type: 'error', code: 'session-expired'} as const;
    }
    return (await response.json()) as SubmissionEvent;
}

// Storage is fresher than the job object the polling loop started with.
function storedRunId(job: StoredSubmission, key: string) {
    const stored = loadSubmission(key);
    return stored?.receipt === job.receipt ? stored.runId : undefined;
}

function saveRunId(job: StoredSubmission, key: string, runId: number | undefined) {
    const stored = loadSubmission(key);
    if (stored?.receipt !== job.receipt || stored.runId === runId) {
        return;
    }
    saveSubmission(key, {...stored, runId});
}

export async function advanceSubmission(
    job: StoredSubmission,
    key: string,
    signal: AbortSignal,
    onFinalizing: (count: number) => void,
): Promise<SubmissionEvent> {
    const rejection = await dispatchJob(job, key, signal);
    if (rejection) {
        return rejection;
    }
    const runId = storedRunId(job, key);
    const event = await requestJob('status', {receipt: job.receipt, runId}, signal);
    if (event.type === 'error' && event.code === 'run-invalid') {
        saveRunId(job, key, undefined);
        return event;
    }
    if (event.type !== 'step') {
        return event;
    }
    saveRunId(job, key, event.runId);
    if (event.index === SUBMISSION_STEP.pullRequest && !signal.aborted) {
        onFinalizing(event.count);
        const finalized = await requestJob(
            'finalize',
            {receipt: job.receipt, runId: event.runId},
            signal,
        );
        if (finalized.type === 'error' && finalized.code === 'run-invalid') {
            saveRunId(job, key, undefined);
        }
        return finalized;
    }
    return event;
}
