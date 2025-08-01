import {GetServerSideProps} from 'next';
import {getServerSideSitemapLegacy} from 'next-sitemap';

import {libs as componentsLibs} from '../content/components';
import {sections} from '../content/design';
import {libs} from '../libs';

import {availablePlaygrounds} from './libraries/[libId]/playground';

const BASE_URL = 'https://gravity-ui.com';

const generatePaths = () => {
    const paths: {path: string; notLocalized?: boolean}[] = [
        {path: ''},
        {path: '/themer'},
        {path: '/icons'},
    ];

    paths.push({path: `/libraries`});

    libs.forEach((lib) => {
        paths.push({path: `/libraries/${lib.id}`});

        if (availablePlaygrounds.includes(lib.id)) {
            paths.push({path: `/libraries/${lib.id}/playground`});
        }
    });

    paths.push({path: `/components`});

    componentsLibs.forEach((lib) => {
        paths.push({path: `/components/${lib.id}`});

        lib.components.forEach((component) => {
            if (component.isComingSoon) {
                return;
            }

            paths.push({path: `/components/${lib.id}/${component.id}`});
        });
    });

    paths.push({path: '/design'});

    sections.forEach((section) => {
        paths.push({path: `/design/${section.id}`});

        section.articles.forEach((article) => {
            paths.push({path: `/design/${section.id}/${article.id}`});
        });
    });

    const localizedPaths: string[] = [];
    const supportedLocales = ['', 'ru', 'es', 'zh'];

    paths.forEach((item) => {
        supportedLocales.forEach((locale) => {
            if (!locale) {
                localizedPaths.push(item.path);
            } else if (locale && !item.notLocalized) {
                localizedPaths.push(`/${locale}${item.path}`);
            }
        });
    });

    return localizedPaths;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const paths = generatePaths();

    const fields = paths.map((path) => {
        return {
            loc: `${BASE_URL}${path}`,
            changefreq: 'daily' as const,
            priority: 0.7,
            alternateRefs: [
                {
                    href: `${BASE_URL}${path}`,
                    hreflang: 'en',
                },
                {
                    href: `${BASE_URL}/ru${path}`,
                    hreflang: 'ru',
                },
                {
                    href: `${BASE_URL}/zh${path}`,
                    hreflang: 'zh',
                },
                {
                    href: `${BASE_URL}/es${path}`,
                    hreflang: 'es',
                },
            ],
        };
    });

    return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {
    return null;
}
