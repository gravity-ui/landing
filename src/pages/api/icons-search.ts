import type {IncomingMessage} from 'http';

import type {NextApiRequest, NextApiResponse} from 'next';

import {search} from '../../api/icon-search-model';

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB
const ALLOWED_TYPES = new Set(['image/png', 'image/jpeg']);

export const config = {
    api: {
        bodyParser: false,
    },
};

function readBody(req: IncomingMessage, limit: number): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = [];
        let size = 0;

        req.on('data', (chunk: Buffer) => {
            size += chunk.length;
            if (size > limit) {
                req.destroy();
                reject(new Error('File too large'));
                return;
            }
            chunks.push(chunk);
        });

        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
    });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const contentType = req.headers['content-type']?.split(';')[0]?.trim();
    if (!contentType || !ALLOWED_TYPES.has(contentType)) {
        return res.status(400).json({error: 'Unsupported file type. Use image/png or image/jpeg'});
    }

    let buffer: Buffer;
    try {
        buffer = await readBody(req, MAX_FILE_SIZE);
    } catch {
        return res.status(413).json({error: 'File too large (max 4MB)'});
    }

    if (buffer.length === 0) {
        return res.status(400).json({error: 'Empty file'});
    }

    try {
        const results = await search(buffer);
        return res.status(200).json({results});
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Icon search error:', error);
        return res.status(500).json({error: 'Internal search error'});
    }
}
