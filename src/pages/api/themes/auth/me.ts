import type {NextApiRequest, NextApiResponse} from 'next';

import {createUserOctokit, fetchGithubProfile, getErrorStatus} from '../../../../api/themes/oauth';
import {clearSession, readSession} from '../../../../api/themes/session';

// The signed-in GitHub user of theme submission, or 401.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }
    res.setHeader('Cache-Control', 'no-store');

    const session = process.env.THEMES_SESSION_SECRET ? readSession(req) : null;
    if (!session) {
        res.status(401).json({error: 'unauthorized'});
        return;
    }

    try {
        const profile = await fetchGithubProfile(createUserOctokit(session.token));
        res.status(200).json({
            login: profile.login,
            name: profile.name || profile.login,
            avatarUrl: profile.avatarUrl,
        });
    } catch (error) {
        if (getErrorStatus(error) === 401) {
            // The token was revoked on GitHub.
            clearSession(res);
            res.status(401).json({error: 'unauthorized'});
            return;
        }
        res.status(502).json({error: 'github'});
    }
}
