import type {NextApiRequest, NextApiResponse} from 'next';

import {search} from '../../api/icon-search-model';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb',
        },
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const {image, topK} = req.body;

    if (!image || typeof image !== 'string') {
        return res.status(400).json({error: 'image (base64) is required'});
    }

    try {
        const results = await search(image, topK ?? 12);
        return res.status(200).json({results});
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Icon search error:', error);
        return res.status(500).json({
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}
