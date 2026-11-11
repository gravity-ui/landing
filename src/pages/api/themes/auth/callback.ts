import {timingSafeEqual} from 'crypto';

import type {NextApiRequest, NextApiResponse} from 'next';

import {
    DEFAULT_RETURN_PATH,
    SIGN_IN_FAILED_PARAM,
    isThemeSubmissionConfigured,
} from '../../../../api/themes/config';
import {
    createUserOctokit,
    exchangeCodeForToken,
    fetchGithubProfile,
} from '../../../../api/themes/oauth';
import {getRequestOrigin, takeOAuthState, writeSession} from '../../../../api/themes/session';

const sameString = (a: string, b: string) => {
    const left = new TextEncoder().encode(a);
    const right = new TextEncoder().encode(b);
    return left.length === right.length && timingSafeEqual(left, right);
};

// GitHub OAuth redirect target: stores the token in the session cookie and returns to the Themer.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }
    res.setHeader('Cache-Control', 'no-store');
    if (!isThemeSubmissionConfigured()) {
        res.status(503).end('Theme submission is not configured');
        return;
    }

    const saved = takeOAuthState(req, res);
    const returnTo = saved?.returnTo ?? DEFAULT_RETURN_PATH;
    const {code, state} = req.query;

    // A denied consent or a stale/forged state just lands back on the form,
    // which then shows the sign-in step again.
    if (!saved || typeof code !== 'string' || typeof state !== 'string') {
        res.redirect(302, returnTo);
        return;
    }
    if (!sameString(state, saved.state)) {
        res.redirect(302, returnTo);
        return;
    }

    try {
        const token = await exchangeCodeForToken({origin: getRequestOrigin(req), code});
        const profile = await fetchGithubProfile(createUserOctokit(token));
        writeSession(res, {token, login: profile.login});
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('GitHub sign-in for theme submission failed:', error);
        // The dialog shows a sign-in error instead of silently asking to sign in again.
        const separator = returnTo.includes('?') ? '&' : '?';
        res.redirect(302, `${returnTo}${separator}${SIGN_IN_FAILED_PARAM}=1`);
        return;
    }
    res.redirect(302, returnTo);
}
