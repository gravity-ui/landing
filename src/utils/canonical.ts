import i18nextConfig from '../../next-i18next.config';
import sitemapConfig from '../../next-sitemap.config';

export const SITE_URL = sitemapConfig.siteUrl;

export const getCanonicalUrlForLocale = (locale: string, pathWithoutLocale: string): string => {
    const {defaultLocale} = i18nextConfig.i18n;
    const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
    const pathPart = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

    return `${SITE_URL}${localePrefix}${pathPart}`;
};
