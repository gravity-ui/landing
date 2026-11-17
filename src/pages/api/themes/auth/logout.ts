import type {NextApiRequest, NextApiResponse} from 'next';

import {revokeToken} from '../../../../api/themes/oauth';
import {clearSession, readSession} from '../../../../api/themes/session';

// Signs out of theme submission and revokes the GitHub token.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    const session = process.env.THEMES_SESSION_SECRET ? readSession(req) : null;
    clearSession(res);
    if (session) {
        await revokeToken(session.token);
    }
    res.status(204).end();
}
