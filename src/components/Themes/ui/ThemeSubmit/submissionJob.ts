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
    const event = await requestJob('status', {receipt: job.receipt}, signal);
    if (event.type === 'step' && event.index === SUBMISSION_STEP.pullRequest && !signal.aborted) {
        onFinalizing(event.count);
        return requestJob('finalize', {receipt: job.receipt}, signal);
    }
    return event;
}
