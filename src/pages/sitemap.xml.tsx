import {GetServerSideProps} from 'next';
import {getServerSideSitemapLegacy} from 'next-sitemap';

import i18nextConfig from '../../next-i18next.config';
import {libs as componentsLibs} from '../content/components';
import {sections} from '../content/design';
import {libs} from '../libs';

import {availablePlaygrounds} from './libraries/[libId]/playground';

const BASE_URL = 'https://gravity-ui.com';

const generatePaths = () => {
    const paths: {path: string; notLocalized?: boolean}[] = [
        {path: ''},
        {path: '/themes'},
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

// Derived from the i18n config rather than hardcoded: a separate list had drifted and was
// missing `pt` and `ja`, so those locales were never submitted despite being fully translated
// and advertised in every page's <head> hreflang set.
const {locales, defaultLocale} = i18nextConfig.i18n;

const localeUrl = (locale: string, path: string) =>
    locale === defaultLocale ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const basePaths = generatePaths();

    const fields = basePaths.flatMap((pathItem) => {
        const {path, notLocalized} = pathItem;

        const pathLocales = notLocalized ? [defaultLocale] : locales;

        const alternateRefs = [
            ...pathLocales.map((locale) => ({
                href: localeUrl(locale, path),
                hreflang: locale,
            })),
            // Tells Google which version to serve for unmatched languages.
            {href: localeUrl(defaultLocale, path), hreflang: 'x-default'},
        ];

        // One <url> entry per locale, each self-referencing plus the full alternate set.
        // Previously only the English URL was listed, so the localized trees were never
        // submitted as first-class URLs.
        return pathLocales.map((locale) => ({
            loc: localeUrl(locale, path),
            changefreq: 'daily' as const,
            priority: 0.7,
            alternateRefs,
        }));
    });

    return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {
    return null;
}
