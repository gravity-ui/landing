const WINDOW_MS = 24 * 60 * 60 * 1000;
const attempts = new Map<number, number[]>();

// Deliberately process-local. Restarts and other instances have independent budgets.
export function reserveDispatch(userId: number, now = Date.now()) {
    if (!Number.isSafeInteger(userId) || userId <= 0) throw new Error('invalid-user');
    for (const [id, timestamps] of attempts) {
        const recent = timestamps.filter((time) => time > now - WINDOW_MS);
        if (recent.length) attempts.set(id, recent);
        else attempts.delete(id);
    }
    const recent = attempts.get(userId) || [];
    if (recent.length >= 3) throw new Error('rate-limit');
    // Synchronous reservation before the external write, including ambiguous failures.
    attempts.set(userId, [...recent, now]);
}
