import type {NextApiRequest, NextApiResponse} from 'next';

const ICON_SEARCH_SERVICE_URL = process.env.ICON_SEARCH_SERVICE_URL || 'http://127.0.0.1:8080';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb',
        },
    },
};

type IconSearchResult = {
    name: string;
    componentName: string;
    style: string;
    score: number;
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
        const response = await fetch(`${ICON_SEARCH_SERVICE_URL}/search`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({image, top_k: topK ?? 12}),
        });

        if (!response.ok) {
            const text = await response.text();
            return res.status(response.status).json({error: text});
        }

        const data: {results: IconSearchResult[]} = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Icon search error:', error);
        return res.status(500).json({
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}
