import type {ThemePayload} from '../../components/Themes/gallery/schema';

// Hands a submitted theme from the submit API route to the hidden render page
// (`/themes/_internal/theme-submission/[token]`) inside the same server
// process. Next.js bundles API routes and pages separately, so the map lives
// on `globalThis` rather than in module scope.

const STORE_KEY = Symbol.for('gravity-landing.themeSubmissionPreviews');
const ENTRY_TTL_MS = 2 * 60 * 1000;

interface StoreEntry {
    payload: ThemePayload;
    expiresAt: number;
}

type Store = Map<string, StoreEntry>;

function getStore(): Store {
    const holder = globalThis as typeof globalThis & {[STORE_KEY]?: Store};
    if (!holder[STORE_KEY]) {
        holder[STORE_KEY] = new Map();
    }
    return holder[STORE_KEY];
}

function dropExpired(store: Store) {
    const now = Date.now();
    store.forEach((entry, token) => {
        if (entry.expiresAt < now) {
            store.delete(token);
        }
    });
}

export function putSubmissionPreview(token: string, payload: ThemePayload) {
    const store = getStore();
    dropExpired(store);
    store.set(token, {payload, expiresAt: Date.now() + ENTRY_TTL_MS});
}

export function getSubmissionPreview(token: string): ThemePayload | null {
    const store = getStore();
    dropExpired(store);
    return store.get(token)?.payload ?? null;
}

export function deleteSubmissionPreview(token: string) {
    getStore().delete(token);
}
