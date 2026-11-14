// Shared constants of the "submit a theme to the gallery" flow.

export const UPSTREAM_OWNER = 'gravity-ui';
export const UPSTREAM_REPO = 'landing';
export const UPSTREAM_BRANCH = 'main';

export const GALLERY_DIR = 'src/components/Themes/gallery';
export const GALLERY_INDEX_PATH = `${GALLERY_DIR}/index.ts`;
export const PREVIEWS_DIR = 'public/themes/previews';
export const PREVIEWS_MANIFEST_PATH = `${PREVIEWS_DIR}/previews.manifest.json`;

// Files whose sha256 `scripts/update-theme-previews.mjs` mixes into every
// `themeHash`. Keys and their order must match the script.
export const PREVIEW_SOURCE_PATHS = {
    captureRoute: 'src/pages/themes/_internal/card-preview/[id].tsx',
    previewLayout: 'src/components/UISamples/PreviewLayout/PreviewLayout.tsx',
    tablePreview: 'src/components/UISamples/TablePreview/TablePreview.tsx',
} as const;

export type PreviewSourceKey = keyof typeof PREVIEW_SOURCE_PATHS;

export const PREVIEW_MODES = ['light', 'dark'] as const;

// Successful submissions allowed per GitHub login within `RATE_LIMIT_WINDOW_MS`.
export const SUBMISSIONS_PER_DAY = 3;
export const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;

export const MAX_THEME_NAME_LENGTH = 40;
export const MAX_DESCRIPTION_LENGTH = 200;
export const MAX_TAGS = 3;

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
