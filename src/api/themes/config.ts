// Shared constants of the "submit a theme to the gallery" flow.

// No default repository: it must be created and explicitly configured by the owner.
export const UPSTREAM_OWNER = process.env.THEMES_REPOSITORY?.split('/')[0] ?? '';
export const UPSTREAM_REPO = process.env.THEMES_REPOSITORY?.split('/')[1] ?? '';
export const UPSTREAM_BRANCH = 'main';
export const GALLERY_DIR = 'themes';
export const PREVIEWS_DIR = 'previews';

export const OAUTH_SCOPE = 'public_repo';
export const SESSION_COOKIE = 'themes_session';
export const SESSION_COOKIE_PATH = '/api/themes';
export const SESSION_TTL_SECONDS = 7 * 24 * 60 * 60;
export const OAUTH_STATE_COOKIE = 'themes_oauth_state';
export const OAUTH_STATE_COOKIE_PATH = '/api/themes/auth';
export const OAUTH_STATE_TTL_SECONDS = 10 * 60;

export const DEFAULT_RETURN_PATH = '/themes?submitTheme=1';
// Added to the return path when GitHub let the user in but the token exchange failed.
export const SIGN_IN_FAILED_PARAM = 'signInFailed';

export function isThemeSubmissionConfigured() {
    return Boolean(
        process.env.GITHUB_OAUTH_CLIENT_ID &&
            process.env.GITHUB_OAUTH_CLIENT_SECRET &&
            process.env.THEMES_SESSION_SECRET,
    );
}

export const DISPATCH_WINDOW_MS = 2 * 60 * 1000;
export const DISPATCH_RECONCILIATION_MS = 10 * 60 * 1000;
