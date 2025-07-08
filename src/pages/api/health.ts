import type {NextApiRequest, NextApiResponse} from 'next';

import {Api} from '../../api';

export const handler = async (
    _: NextApiRequest,
    res: NextApiResponse<{
        status: string;
        timestamp: string;
    }>,
) => {
    await Promise.all([Api.instance.fetchAllContributorsWithCache(), Api.instance.fetchAllLibs()]);

    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
};
