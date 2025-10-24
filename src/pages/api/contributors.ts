import type {NextApiRequest, NextApiResponse} from 'next';
import {Api} from 'src/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    const contributors = await Api.instance.fetchAllContributorsWithCache();

    res.status(200).json({contributors});
}
