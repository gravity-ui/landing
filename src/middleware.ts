import {NextRequest, NextResponse} from 'next/server';

import nextI18nextConfig from '../next-i18next.config';

import {Api} from './api';

export const middleware = async (request: NextRequest) => {
    const {pathname, locale} = request.nextUrl;

    if (pathname === '/api/health') {
        await Promise.all([
            Api.instance.fetchAllContributorsWithCache(),
            Api.instance.fetchAllLibs(),
        ]);
    }

    if (
        locale !== nextI18nextConfig.i18n.defaultLocale &&
        (pathname === '/rtl' || pathname.startsWith('__stand'))
    ) {
        const url = request.nextUrl.clone();
        url.locale = nextI18nextConfig.i18n.defaultLocale;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
};
