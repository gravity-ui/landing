import type {NextApiRequest, NextApiResponse} from 'next';
import {i18n} from 'next-i18next.config';
import {ServerApi} from 'src/api/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    const locale = typeof req.query.locale === 'string' ? req.query.locale : 'en';

    if (!i18n.locales.includes(locale)) {
        res.status(400).json({message: `Unsupported locale: ${locale}`});
        return;
    }

    try {
        const response = await ServerApi.instance.getBlogPosts(locale);
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({posts: [], count: 0, totalCount: 0, pinnedPost: null});
    }
}
