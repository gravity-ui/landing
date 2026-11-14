import type {NextApiRequest, NextApiResponse} from 'next';

import {isThemeSubmissionConfigured} from '../../../api/themes/config';
import {getRequestOrigin, readSession} from '../../../api/themes/session';
import {type SubmissionEvent, submitTheme} from '../../../api/themes/submit';

export const config = {
    api: {
        bodyParser: {sizeLimit: '1mb'},
        // Progress is streamed as NDJSON.
        responseLimit: false,
    },
};

const getHost = (url: string) => {
    try {
        return new URL(url).host;
    } catch {
        return null;
    }
};

// Where the server reaches itself to load the hidden render page.
function getRenderBaseUrl(req: NextApiRequest) {
    if (process.env.THEMES_RENDER_BASE_URL) {
        return process.env.THEMES_RENDER_BASE_URL.replace(/\/+$/, '');
    }
    return `http://127.0.0.1:${req.socket.localPort}`;
}

// Submits a theme from the Themer to the gallery: renders the card previews and
// opens a pull request from the user's fork. Responds with NDJSON events
// (`step`, then `done` or `error`).
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }
    if (!isThemeSubmissionConfigured()) {
        res.status(503).json({error: 'not-configured'});
        return;
    }
    // JSON bodies and the same origin rule out cross-site form posts.
    const origin = req.headers.origin;
    if (
        !req.headers['content-type']?.startsWith('application/json') ||
        (origin && getHost(origin) !== getHost(getRequestOrigin(req)))
    ) {
        res.status(403).json({error: 'forbidden'});
        return;
    }
    const session = readSession(req);
    if (!session) {
        res.status(401).json({error: 'unauthorized'});
        return;
    }

    res.status(200);
    res.setHeader('Content-Type', 'application/x-ndjson; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Accel-Buffering', 'no');
    res.flushHeaders();

    const emit = (event: SubmissionEvent) => {
        if (!res.writableEnded) {
            res.write(`${JSON.stringify(event)}\n`);
        }
    };

    // The submission runs to completion even if the browser goes away.
    await submitTheme({
        token: session.token,
        login: session.login,
        body: req.body,
        renderBaseUrl: getRenderBaseUrl(req),
        emit,
    });
    res.end();
}
