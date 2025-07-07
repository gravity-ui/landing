import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(
    _: NextApiRequest,
    res: NextApiResponse<{
        status: string;
        timestamp: string;
        version: string;
        environment: string;
    }>,
) {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: process.env.VERSION || 'development',
        environment: process.env.NODE_ENV || 'development',
    });
}
