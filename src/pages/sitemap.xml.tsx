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

    return paths;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const basePaths = generatePaths();
    const supportedLocales = ['', 'ru', 'es', 'zh'];

    const fields = basePaths.map((pathItem) => {
        const {path, notLocalized} = pathItem;

        // Generate alternate refs for this path
        const alternateRefs = supportedLocales
            .filter((locale) => !locale || !notLocalized) // Include default locale always, other locales only if path is localizable
            .map((locale) => ({
                href: locale ? `${BASE_URL}/${locale}${path}` : `${BASE_URL}${path}`,
                hreflang: locale || 'en',
            }));

        return {
            loc: `${BASE_URL}${path}`, // Always use the canonical (English) URL as the main loc
            changefreq: 'daily' as const,
            priority: 0.7,
            alternateRefs,
        };
    });

    return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {
    return null;
}
