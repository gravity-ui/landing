import {NextRequest, NextResponse} from 'next/server';

import nextI18nextConfig from '../next-i18next.config';

import {NEXT_LOCALE_COOKIE} from './constants';

const defaultLocale = nextI18nextConfig.i18n.defaultLocale;
const locales = nextI18nextConfig.i18n.locales;

const getLocaleFromHeaders = (request: NextRequest): string | undefined => {
    const acceptLanguage = request.headers.get('Accept-Language');
    if (!acceptLanguage) return undefined;

    const preferredLocales = acceptLanguage
        .split(',')
        .map((item) => {
            const [locale, weight] = item.trim().split(';q=');
            return {
                locale: locale.split('-')[0],
                weight: weight ? parseFloat(weight) : 1.0,
            };
        })
        .sort((a, b) => b.weight - a.weight);

    for (const {locale} of preferredLocales) {
        if (locales.includes(locale)) {
            return locale;
        }
    }

    return undefined;
};

const getLocaleFromCookie = (request: NextRequest): string | undefined => {
    const cookieLocale = request.cookies.get(NEXT_LOCALE_COOKIE)?.value;

    if (cookieLocale && locales.includes(cookieLocale)) {
        return cookieLocale;
    }

    return undefined;
};

export const middleware = async (request: NextRequest) => {
    const {pathname} = request.nextUrl;

    // Blog is only available for en and ru locales
    // Check if path is related to blog
    const isBlogPath = pathname.includes('/blog');

    if (isBlogPath) {
        const blogLocale = request.nextUrl.locale || defaultLocale;

        // Redirect to en if locale is not en or ru
        if (blogLocale !== 'en' && blogLocale !== 'ru') {
            const url = request.nextUrl.clone();
            url.locale = 'en';
            return NextResponse.redirect(url);
        }

        // For blog pages, ignore cookie-based locale detection to prevent redirect loops
        // Only use the current locale from URL, don't try to detect from cookie/headers
        return NextResponse.next();
    }

    if (
        nextI18nextConfig.routesWithoutRedirect.some(
            (route) => pathname === route || pathname.startsWith(route),
        )
    ) {
        if (request.nextUrl.locale !== defaultLocale) {
            const url = request.nextUrl.clone();
            url.locale = defaultLocale;
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    }

    const currentLocale = request.nextUrl.locale || defaultLocale;

    const detectedLocale =
        getLocaleFromCookie(request) || getLocaleFromHeaders(request) || currentLocale;

    if (detectedLocale !== currentLocale) {
        const url = request.nextUrl.clone();
        url.locale = detectedLocale;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/', '/((?!_next|api|favicon|static|manifest).*)'],
};
