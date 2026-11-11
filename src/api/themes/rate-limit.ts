import {RATE_LIMIT_WINDOW_MS, SUBMISSIONS_PER_DAY} from './config';

// Per-instance, in-memory limit of submissions per GitHub login. A slot is
// reserved for the duration of a submission and kept only when a pull request
// was actually opened, so failed attempts do not eat the quota while parallel
// attempts still cannot exceed it.

const submissions = new Map<string, number[]>();

function activeSlots(login: string) {
    const since = Date.now() - RATE_LIMIT_WINDOW_MS;
    const slots = (submissions.get(login) ?? []).filter((time) => time > since);
    submissions.set(login, slots);
    return slots;
}

export interface RateLimitSlot {
    release: () => void;
}

// Reserves a submission slot for the login, or returns `null` when the limit is reached.
export function reserveSubmissionSlot(login: string): RateLimitSlot | null {
    const key = login.toLowerCase();
    const slots = activeSlots(key);
    if (slots.length >= SUBMISSIONS_PER_DAY) {
        return null;
    }
    const time = Date.now();
    slots.push(time);
    return {
        release: () => {
            const current = submissions.get(key) ?? [];
            const index = current.indexOf(time);
            if (index !== -1) {
                current.splice(index, 1);
            }
        },
    };
}
