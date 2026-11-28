import type {ThemeCreatorState} from './types';

// Survives the GitHub sign-in round trip of the submit dialog: the Themer
// keeps its theme only in memory, so the whole editor state is parked in
// sessionStorage before leaving and the dialog reopens on return
// (`/themes?submitTheme=1`), or after a reload if sign-in was interrupted.
// The saved revision is retained until another theme is explicitly loaded.
// It keeps its unsaved-changes flag, so the restored editor stays guarded.
// The exported theme JSON is not enough: custom
// fonts keep their titles and links in `typography`, outside the theme.

const STATE_KEY = 'gravity-landing:theme-submit:state';
const PULL_REQUEST_KEY = 'gravity-landing:theme-submit:pull-request';
const REOPEN_KEY = 'gravity-landing:theme-submit:reopen';
const SIGN_IN_FAILED_KEY = 'gravity-landing:theme-submit:sign-in-failed';

export {SUBMIT_RETURN_PARAM, SIGN_IN_FAILED_PARAM} from '../../../api/themes/types';

function storage() {
    try {
        return typeof window === 'undefined' ? null : window.sessionStorage;
    } catch {
        return null;
    }
}

export function saveSubmitReturn(state: ThemeCreatorState): boolean {
    try {
        const store = storage();
        if (!store) {
            return false;
        }
        const json = JSON.stringify(state);
        store.setItem(STATE_KEY, json);
        return store.getItem(STATE_KEY) === json;
    } catch {
        return false;
    }
}

export function clearSubmitReturn() {
    const store = storage();
    store?.removeItem(STATE_KEY);
    store?.removeItem(PULL_REQUEST_KEY);
}

const isPullRequestUrl = (url: string) =>
    /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/pull\/[1-9]\d*$/.test(url);

export function saveSubmittedPullRequest(state: ThemeCreatorState, url: string, theme: string) {
    try {
        if (isPullRequestUrl(url) && saveSubmitReturn(state)) {
            storage()?.setItem(PULL_REQUEST_KEY, JSON.stringify({url, theme}));
        }
    } catch {
        // The current editor can still show the result when storage is unavailable.
    }
}

export function loadSubmittedPullRequest(theme: string): string | null {
    try {
        const value = storage()?.getItem(PULL_REQUEST_KEY);
        const result: unknown = value ? JSON.parse(value) : null;
        return isRecord(result) &&
            result.theme === theme &&
            typeof result.url === 'string' &&
            isPullRequestUrl(result.url)
            ? result.url
            : null;
    } catch {
        return null;
    }
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
    Boolean(value) && typeof value === 'object' && !Array.isArray(value);

// Checks the parts of a parked state the Themer reads without guards. Every
// font of the theme must have its settings, or the font picker breaks.
function parseParkedState(json: string): ThemeCreatorState | null {
    try {
        const value = JSON.parse(json) as Partial<ThemeCreatorState>;
        const theme = value.gravityTheme;
        if (
            !isRecord(value) ||
            !isRecord(theme) ||
            !isRecord(theme.baseColors) ||
            !isRecord(theme.privateColors) ||
            !isRecord(theme.utilityColors) ||
            !isRecord(theme.borders) ||
            !isRecord(theme.typography) ||
            !isRecord(theme.typography.fontFamilies) ||
            !isRecord(value.paletteTokens) ||
            !isRecord(value.borders) ||
            !isRecord(value.typography) ||
            !isRecord(value.typography.fontFamilies)
        ) {
            return null;
        }
        const fontSettings = value.typography.fontFamilies;
        const fontsComplete = Object.keys(theme.typography.fontFamilies).every((key) =>
            isRecord(fontSettings[key]),
        );
        return fontsComplete ? (value as ThemeCreatorState) : null;
    } catch {
        return null;
    }
}

// Retains the saved revision so repeated reloads can restore it safely.
// Only an OAuth return reopens the submit dialog.
// `signInFailed` marks a return where GitHub let the user in but the server
// could not finish the sign-in: the reopened dialog reports it.
export function restoreSubmitReturn({
    signInFailed,
    reopen,
}: {
    signInFailed: boolean;
    reopen: boolean;
}): ThemeCreatorState | null {
    const store = storage();
    if (!store) {
        return null;
    }
    const stateJson = store.getItem(STATE_KEY);
    if (reopen) {
        store.setItem(REOPEN_KEY, '1');
    }
    if (reopen && signInFailed) {
        store.setItem(SIGN_IN_FAILED_KEY, '1');
    }
    return stateJson ? parseParkedState(stateJson) : null;
}

const DRAFT_KEY = 'gravity-landing:theme-submit:draft';

export interface StoredSubmitDraft {
    name: string;
    descriptionEn: string;
    descriptionRu: string;
    tags: string[];
}

function localStore() {
    try {
        return typeof window === 'undefined' ? null : window.localStorage;
    } catch {
        return null;
    }
}

// The form text survives closing the dialog, reloads and coming back later;
// it is dropped once the pull request is opened.
export function loadSubmitDraft(): StoredSubmitDraft | null {
    try {
        const raw = localStore()?.getItem(DRAFT_KEY);
        if (!raw) {
            return null;
        }
        const value = JSON.parse(raw) as Partial<StoredSubmitDraft>;
        const text = (field: unknown) => (typeof field === 'string' ? field : '');
        return {
            name: text(value.name),
            descriptionEn: text(value.descriptionEn),
            descriptionRu: text(value.descriptionRu),
            tags: Array.isArray(value.tags)
                ? value.tags.filter((tag): tag is string => typeof tag === 'string')
                : [],
        };
    } catch {
        return null;
    }
}

export function saveSubmitDraft(draft: StoredSubmitDraft) {
    try {
        localStore()?.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
        // Storage full or disabled: the form just is not restored.
    }
}

export function clearSubmitDraft() {
    try {
        localStore()?.removeItem(DRAFT_KEY);
    } catch {
        // Nothing to clear.
    }
}

// Whether the last GitHub sign-in failed on the server; the flag is consumed.
export function takeSignInFailed() {
    const store = storage();
    if (!store || store.getItem(SIGN_IN_FAILED_KEY) !== '1') {
        return false;
    }
    store.removeItem(SIGN_IN_FAILED_KEY);
    return true;
}

// Whether the submit dialog should reopen; the flag is consumed.
export function takeSubmitReopen() {
    const store = storage();
    if (!store || store.getItem(REOPEN_KEY) !== '1') {
        return false;
    }
    store.removeItem(REOPEN_KEY);
    return true;
}
