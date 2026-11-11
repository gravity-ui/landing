// Survives the GitHub sign-in round trip of the submit dialog: the Themer
// keeps its theme only in memory, so the theme JSON is parked in
// sessionStorage before leaving and the dialog reopens on return
// (`/themes?submitTheme=1`).

const THEME_KEY = 'gravity-landing:theme-submit:theme';
const REOPEN_KEY = 'gravity-landing:theme-submit:reopen';
const SIGN_IN_FAILED_KEY = 'gravity-landing:theme-submit:sign-in-failed';

export const SUBMIT_RETURN_PARAM = 'submitTheme';
export {SIGN_IN_FAILED_PARAM} from '../../../../api/themes/config';

function storage() {
    try {
        return typeof window === 'undefined' ? null : window.sessionStorage;
    } catch {
        return null;
    }
}

export function saveSubmitReturn(themeJson: string) {
    try {
        storage()?.setItem(THEME_KEY, themeJson);
    } catch {
        // Storage full or disabled: the dialog still reopens, with the default theme.
    }
}

// Takes the parked theme JSON (if any) and marks the dialog to reopen.
// `signInFailed` marks a return where GitHub let the user in but the server
// could not finish the sign-in: the reopened dialog reports it.
export function restoreSubmitReturn({signInFailed}: {signInFailed: boolean}): string | null {
    const store = storage();
    if (!store) {
        return null;
    }
    const themeJson = store.getItem(THEME_KEY);
    store.removeItem(THEME_KEY);
    store.setItem(REOPEN_KEY, '1');
    if (signInFailed) {
        store.setItem(SIGN_IN_FAILED_KEY, '1');
    }
    return themeJson;
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
