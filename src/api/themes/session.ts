import {createCipheriv, createDecipheriv, hkdfSync, randomBytes} from 'crypto';
import type {IncomingMessage, ServerResponse} from 'http';

import type {NextApiRequest} from 'next';

import {
    OAUTH_STATE_COOKIE,
    OAUTH_STATE_COOKIE_PATH,
    OAUTH_STATE_TTL_SECONDS,
    SESSION_COOKIE,
    SESSION_COOKIE_PATH,
    SESSION_TTL_SECONDS,
} from './config';

// Stateless sessions: the GitHub token lives in an AES-256-GCM sealed cookie,
// so any of the load-balanced instances can read it without shared storage.

type SealPurpose = 'session' | 'oauth-state';

const IV_LENGTH = 12;
const TAG_LENGTH = 16;

// Node's `Buffer` typings do not match TypeScript's generic `Uint8Array`, so
// crypto inputs are passed as plain byte views.
const toBytes = (buffer: Buffer) => new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.length);

function deriveKey(purpose: SealPurpose) {
    const secret = process.env.THEMES_SESSION_SECRET;
    if (!secret) {
        throw new Error('THEMES_SESSION_SECRET is not set');
    }
    return new Uint8Array(
        hkdfSync('sha256', secret, 'gravity-landing-themes', `${purpose}-v1`, 32),
    );
}

// `iv.tag.ciphertext`, each part base64url.
function seal(purpose: SealPurpose, payload: object, ttlSeconds: number) {
    const iv = randomBytes(IV_LENGTH);
    const cipher = createCipheriv('aes-256-gcm', deriveKey(purpose), toBytes(iv));
    const plain = JSON.stringify({...payload, exp: Date.now() + ttlSeconds * 1000});
    const encrypted = cipher.update(plain, 'utf8', 'hex') + cipher.final('hex');
    return [iv, cipher.getAuthTag(), Buffer.from(encrypted, 'hex')]
        .map((part) => part.toString('base64url'))
        .join('.');
}

function unseal<T extends object>(purpose: SealPurpose, value: string | undefined): T | null {
    const [iv, tag, encrypted, ...rest] = value?.split('.') ?? [];
    if (!iv || !tag || !encrypted || rest.length) {
        return null;
    }
    try {
        const ivBytes = Buffer.from(iv, 'base64url');
        const tagBytes = Buffer.from(tag, 'base64url');
        if (ivBytes.length !== IV_LENGTH || tagBytes.length !== TAG_LENGTH) {
            return null;
        }
        const decipher = createDecipheriv('aes-256-gcm', deriveKey(purpose), toBytes(ivBytes));
        decipher.setAuthTag(toBytes(tagBytes));
        const plain =
            decipher.update(Buffer.from(encrypted, 'base64url').toString('hex'), 'hex', 'utf8') +
            decipher.final('utf8');
        const parsed = JSON.parse(plain) as T & {exp?: number};
        if (typeof parsed.exp !== 'number' || parsed.exp < Date.now()) {
            return null;
        }
        return parsed;
    } catch {
        return null;
    }
}

function serializeCookie(name: string, value: string, path: string, maxAgeSeconds: number) {
    return [
        `${name}=${value}`,
        `Path=${path}`,
        `Max-Age=${maxAgeSeconds}`,
        'HttpOnly',
        'Secure',
        'SameSite=Lax',
    ].join('; ');
}

function appendSetCookie(res: ServerResponse, cookie: string) {
    const current = res.getHeader('Set-Cookie');
    let list: string[] = [];
    if (Array.isArray(current)) {
        list = current;
    } else if (current !== undefined) {
        list = [String(current)];
    }
    res.setHeader('Set-Cookie', [...list, cookie]);
}

export interface ThemesSession {
    token: string;
    login: string;
}

export function readSession(req: NextApiRequest): ThemesSession | null {
    const data = unseal<{t?: unknown; l?: unknown}>('session', req.cookies[SESSION_COOKIE]);
    if (!data || typeof data.t !== 'string' || typeof data.l !== 'string') {
        return null;
    }
    return {token: data.t, login: data.l};
}

export function writeSession(res: ServerResponse, session: ThemesSession) {
    const value = seal('session', {t: session.token, l: session.login}, SESSION_TTL_SECONDS);
    appendSetCookie(
        res,
        serializeCookie(SESSION_COOKIE, value, SESSION_COOKIE_PATH, SESSION_TTL_SECONDS),
    );
}

export function clearSession(res: ServerResponse) {
    appendSetCookie(res, serializeCookie(SESSION_COOKIE, '', SESSION_COOKIE_PATH, 0));
}

export interface OAuthState {
    state: string;
    returnTo: string;
}

export function writeOAuthState(res: ServerResponse, value: OAuthState) {
    const sealed = seal(
        'oauth-state',
        {s: value.state, r: value.returnTo},
        OAUTH_STATE_TTL_SECONDS,
    );
    appendSetCookie(
        res,
        serializeCookie(
            OAUTH_STATE_COOKIE,
            sealed,
            OAUTH_STATE_COOKIE_PATH,
            OAUTH_STATE_TTL_SECONDS,
        ),
    );
}

export function takeOAuthState(req: NextApiRequest, res: ServerResponse): OAuthState | null {
    appendSetCookie(res, serializeCookie(OAUTH_STATE_COOKIE, '', OAUTH_STATE_COOKIE_PATH, 0));
    const data = unseal<{s?: unknown; r?: unknown}>('oauth-state', req.cookies[OAUTH_STATE_COOKIE]);
    if (!data || typeof data.s !== 'string' || typeof data.r !== 'string') {
        return null;
    }
    return {state: data.s, returnTo: data.r};
}

const LOOPBACK_HOST = /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/;

// Public origin of the request as seen by the browser. The app runs behind
// proxies that terminate TLS and do not always pass `x-forwarded-proto`, so
// every public host is served over https; plain http is kept for local runs.
export function getRequestOrigin(req: IncomingMessage) {
    const header = (name: string) => {
        const value = req.headers[name];
        return (Array.isArray(value) ? value[0] : value)?.split(',')[0]?.trim();
    };
    const host = header('x-forwarded-host') || header('host') || '';
    if (!LOOPBACK_HOST.test(host)) {
        return `https://${host}`;
    }
    const encrypted = (req.socket as {encrypted?: boolean}).encrypted;
    const proto = header('x-forwarded-proto') || (encrypted ? 'https' : 'http');
    return `${proto}://${host}`;
}
