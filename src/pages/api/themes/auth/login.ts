import {randomBytes} from 'crypto';

import type {NextApiRequest, NextApiResponse} from 'next';

import {isThemeSubmissionConfigured} from '../../../../api/themes/config';
import {buildAuthorizeUrl, sanitizeReturnPath} from '../../../../api/themes/oauth';
import {getRequestOrigin, writeOAuthState} from '../../../../api/themes/session';

// Starts GitHub sign-in for theme submission: redirects to the OAuth consent screen.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }
    if (!isThemeSubmissionConfigured()) {
        res.status(503).end('Theme submission is not configured');
        return;
    }

    const state = randomBytes(16).toString('base64url');
    writeOAuthState(res, {state, returnTo: sanitizeReturnPath(req.query.returnTo)});
    res.setHeader('Cache-Control', 'no-store');
    res.redirect(302, buildAuthorizeUrl({origin: getRequestOrigin(req), state}));
}
