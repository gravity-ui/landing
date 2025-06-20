import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import _ from 'lodash';

import type {LibConfig} from '../../libs';

type LibReadmeInfo = {
    en: string;
    ru: string;
    es: string;
    zh: string;
};

export const fetchLibReadmeInfo = async ({readmeUrl, id}: LibConfig): Promise<LibReadmeInfo> => {
    const headers: Record<string, string> = {'User-Agent': 'request'};
    if (process.env.GITHUB_TOKEN) {
        headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const fetchReadmeContent = async (url: string) => {
        try {
            const response = await fetch(url, {
                headers,
            });
            if (response.ok) {
                return await response.text();
            }
        } catch (err) {
            console.error(err);
        }

        return '';
    };

    const getLocalDocsReadPromise = (locale: string) =>
        fs.promises.readFile(
            path.join(
                path.dirname(fileURLToPath(import.meta.url)),
                `../../../src/content/local-docs/libs/${id}/README-${locale}.md`,
            ),
            'utf8',
        );

    const [en, ru, es, zh] = await Promise.all([
        fetchReadmeContent(readmeUrl.en),
        fetchReadmeContent(readmeUrl.ru),
        getLocalDocsReadPromise('es'),
        getLocalDocsReadPromise('zh'),
    ]);

    return {
        en,
        ru,
        es,
        zh,
    };
};
