import {Octokit} from '@octokit/rest';

import {DEFAULT_RETURN_PATH, OAUTH_SCOPE} from './config';

const USER_AGENT = 'gravity-ui-landing-themes';

// Only the Themes page (optionally locale-prefixed) may be a post-login target.
const RETURN_PATH_RE = /^\/(?:[a-z]{2}\/)?themes(?:[/?#]|$)/;

export function sanitizeReturnPath(value: unknown) {
    if (typeof value !== 'string' || !RETURN_PATH_RE.test(value) || /[\\\s]/.test(value)) {
        return DEFAULT_RETURN_PATH;
    }
    return value;
}

export function getCallbackUrl(origin: string) {
    return `${origin}/api/themes/auth/callback`;
}

export function buildAuthorizeUrl({origin, state}: {origin: string; state: string}) {
    const url = new URL('https://github.com/login/oauth/authorize');
    url.searchParams.set('client_id', process.env.GITHUB_OAUTH_CLIENT_ID ?? '');
    url.searchParams.set('redirect_uri', getCallbackUrl(origin));
    url.searchParams.set('scope', OAUTH_SCOPE);
    url.searchParams.set('state', state);
    url.searchParams.set('allow_signup', 'true');
    return url.toString();
}

export async function exchangeCodeForToken({origin, code}: {origin: string; code: string}) {
    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': USER_AGENT,
        },
        body: JSON.stringify({
            client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
            client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
            code,
            redirect_uri: getCallbackUrl(origin),
        }),
    });
    if (!response.ok) {
        throw new Error(`GitHub token exchange failed with HTTP ${response.status}`);
    }
    const data = (await response.json()) as {access_token?: unknown; error?: unknown};
    if (typeof data.access_token !== 'string' || !data.access_token) {
        throw new Error(`GitHub token exchange failed: ${String(data.error ?? 'no token')}`);
    }
    return data.access_token;
}

// Revokes this one token (not the whole authorization); best effort.
export async function revokeToken(token: string) {
    const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
    const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
        return;
    }
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    await fetch(`https://api.github.com/applications/${clientId}/token`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/json',
            'User-Agent': USER_AGENT,
        },
        body: JSON.stringify({access_token: token}),
    }).catch(() => undefined);
}

export function createUserOctokit(token: string) {
    return new Octokit({auth: token, userAgent: USER_AGENT});
}

export interface GithubProfile {
    login: string;
    name: string | null;
    avatarUrl: string;
}

export async function fetchGithubProfile(octokit: Octokit): Promise<GithubProfile> {
    const {data} = await octokit.users.getAuthenticated();
    return {login: data.login, name: data.name || null, avatarUrl: data.avatar_url};
}

export function getErrorStatus(error: unknown): number | undefined {
    if (error && typeof error === 'object' && 'status' in error) {
        const status = (error as {status: unknown}).status;
        return typeof status === 'number' ? status : undefined;
    }
    return undefined;
}
