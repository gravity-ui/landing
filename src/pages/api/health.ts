import type {NextApiRequest, NextApiResponse} from 'next';

import {Api} from '../../api';

let cachePromise: Promise<unknown> | null = null;

export const handler = async (
    _: NextApiRequest,
    res: NextApiResponse<{
        status: string;
        timestamp: string;
    }>,
) => {
    if (!cachePromise) {
        cachePromise = Promise.all([
            Api.instance.fetchAllContributorsWithCache(),
            Api.instance.fetchAllLibs(),
        ]).catch(() => {
            cachePromise = null;
        });
    }

    await cachePromise;

    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
};

export default handler;
