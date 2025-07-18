import block from 'bem-cn-lite';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';

import i18nextConfig from '../../next-i18next.config';
import sitemapConfig from '../../next-sitemap.config';
import {DEFAULT_THEME, GA_ID, IS_PRODUCTION} from '../constants';

// Site URL from next-sitemap.config.js
const SITE_URL = sitemapConfig.siteUrl;

// Function to check if a route should be excluded from alternates
const shouldExcludeRoute = (path: string) => {
    return i18nextConfig.routesWithoutRedirect.some((route) => path.startsWith(route));
};

// Function to resolve dynamic route parameters
const resolveDynamicPath = (path: string, query: Record<string, any>): string => {
    if (!path.includes('[') || !path.includes(']')) {
        return path; // Not a dynamic path
    }

    // Extract dynamic segments from the path
    const segments = path.split('/');
    const resolvedSegments = segments.map((segment) => {
        if (segment.startsWith('[') && segment.endsWith(']')) {
            // Extract parameter name without brackets
            const paramName = segment.slice(1, -1);
            // Check if the parameter exists in the query
            if (query[paramName] && typeof query[paramName] === 'string') {
                return query[paramName] as string;
            }
            // If we can't resolve it, return the original segment
            return segment;
        }
        return segment;
    });

    return resolvedSegments.join('/');
};

// Function to generate alternate links for SSG
const generateAlternateLinks = (path: string, query: Record<string, any>) => {
    const {locales, defaultLocale} = i18nextConfig.i18n;

    // Skip routes that don't need alternates
    if (shouldExcludeRoute(path)) {
        return null;
    }

    // Try to resolve dynamic parameters
    const resolvedPath = resolveDynamicPath(path, query);
    // If we still have unresolved dynamic parameters, skip this route
    if (resolvedPath.includes('[') && resolvedPath.includes(']')) {
        return null;
    }

    // Determine if the path has a locale prefix
    let pathWithoutLocale = resolvedPath;

    // Check if the path starts with a locale
    const pathParts = resolvedPath.split('/').filter(Boolean);
    if (pathParts.length > 0 && locales.includes(pathParts[0])) {
        // Extract the locale from the path
        pathWithoutLocale = '/' + pathParts.slice(1).join('/');
        if (pathWithoutLocale === '') pathWithoutLocale = '/';
    }

    // Create links for all locales
    const links = locales.map((locale) => {
        let href;
        if (locale === defaultLocale) {
            href = `${SITE_URL}${pathWithoutLocale}`;
        } else {
            href = `${SITE_URL}/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
        }

        return <link key={locale} rel="alternate" hrefLang={locale} href={href} />;
    });

    // Add x-default link (points to default locale)
    links.push(
        <link
            key="x-default"
            rel="alternate"
            hrefLang="x-default"
            href={`${SITE_URL}${pathWithoutLocale}`}
        />,
    );

    // Add canonical link
    const canonicalPath = resolvedPath.startsWith('/') ? resolvedPath : `/${resolvedPath}`;
    links.push(<link key="canonical" rel="canonical" href={`${SITE_URL}${canonicalPath}`} />);

    return links;
};

const b = block('g-root');

class CustomDocument extends Document {
    render() {
        const {page, query} = this.props.__NEXT_DATA__;

        // Generate static links for SSG
        const staticLinks = generateAlternateLinks(page, query);

        return (
            // Workaround for missing direction 'ltr' in ThemeProvider
            <Html dir="ltr" prefix="og: https://ogp.me/ns#">
                <Head>
                    <meta
                        name="google-site-verification"
                        content="QhqdVzck0x0Hw82h7fl_l9ebRsYpSqlC_JhyDRXBnew"
                    />
                    {staticLinks /* Static links for SSG */}
                    {IS_PRODUCTION && (
                        <Script
                            id="google-analytics"
                            strategy="beforeInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','${GA_ID}');
                            `,
                            }}
                        />
                    )}
                </Head>
                <body className={b({theme: DEFAULT_THEME})}>
                    {IS_PRODUCTION && (
                        <noscript
                            dangerouslySetInnerHTML={{
                                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                            }}
                        />
                    )}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
