import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../../next-i18next.config';

type LinkProps = {
    href: string;
    locale?: string;
    children: React.ReactNode;
} & Record<string, unknown>;

export const I18nLink: React.FC<LinkProps> = ({href, locale, children, ...rest}) => {
    const router = useRouter();

    let resultHref = href;

    const propsLocale = locale ?? router.query.locale;
    const resultLocale =
        typeof propsLocale === 'string' ? propsLocale : i18nextConfig.i18n.defaultLocale;

    if (resultLocale !== i18nextConfig.i18n.defaultLocale) {
        resultHref = `/${resultLocale}${resultHref}`;
    }

    return (
        <Link href={resultHref} {...rest}>
            {children}
        </Link>
    );
};

export {I18nLink as Link};
