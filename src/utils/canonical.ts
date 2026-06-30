import i18nextConfig from '../../next-i18next.config';
import sitemapConfig from '../../next-sitemap.config';

export const SITE_URL = sitemapConfig.siteUrl;

export const getCanonicalUrlForLocale = (locale: string, pathWithoutLocale: string): string => {
    const {defaultLocale} = i18nextConfig.i18n;
    const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
    const pathPart = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

    return `${SITE_URL}${localePrefix}${pathPart}`;
};

export const getCanonicalUrlFromAsPath = (asPath: string): string => {
    let path = asPath.split('?')[0].split('#')[0] || '/';

    if (path !== '/' && path.endsWith('/')) {
        path = path.slice(0, -1);
    }

    if (path === '/') {
        return SITE_URL;
    }

    return `${SITE_URL}${path}`;
};
