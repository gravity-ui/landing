import {NextRequest, NextResponse} from 'next/server';

import nextI18nextConfig from '../next-i18next.config';

export function middleware(request: NextRequest) {
    const {pathname, locale} = request.nextUrl;

    if (
        locale !== nextI18nextConfig.i18n.defaultLocale &&
        (pathname === '/rtl' || pathname.startsWith('__stand'))
    ) {
        const url = request.nextUrl.clone();
        url.locale = nextI18nextConfig.i18n.defaultLocale;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
