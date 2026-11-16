import type {NextApiRequest, NextApiResponse} from 'next';

import {isThemeSubmissionConfigured} from './config';
import {getRequestOrigin, readSession} from './session';

const getHost = (url: string) => {
    try {
        return new URL(url).host;
    } catch {
        return null;
    }
};

export function readSubmissionSession(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Cache-Control', 'no-store');
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return null;
    }
    if (!isThemeSubmissionConfigured()) {
        res.status(503).json({error: 'not-configured'});
        return null;
    }
    // JSON bodies and the same origin rule out cross-site form posts.
    const origin = req.headers.origin;
    if (
        !req.headers['content-type']?.startsWith('application/json') ||
        (origin && getHost(origin) !== getHost(getRequestOrigin(req)))
    ) {
        res.status(403).json({error: 'forbidden'});
        return null;
    }
    const session = readSession(req);
    if (!session) {
        res.status(401).json({error: 'unauthorized'});
        return null;
    }
    return session;
}
