import Link, {LinkProps} from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../../next-i18next.config';

type HoverPrefetchLinkProps = LinkProps & {
    children: React.ReactNode;
};

const HoverPrefetchLink = (props: HoverPrefetchLinkProps) => {
    const [active, setActive] = React.useState(false);

    return (
        <Link prefetch={active ? null : false} onMouseEnter={() => setActive(true)} {...props} />
    );
};

type I18nLinkProps = LinkProps & {
    className?: string;
    target?: string;
    locale?: string;
    children: React.ReactNode;
    href: string;
};

export const I18nLink: React.FC<I18nLinkProps> = ({href, locale, children, ...rest}) => {
    const router = useRouter();

    let resultHref = href;

    const propsLocale = locale ?? router.query.locale;
    const resultLocale =
        typeof propsLocale === 'string' ? propsLocale : i18nextConfig.i18n.defaultLocale;

    if (
        resultLocale !== i18nextConfig.i18n.defaultLocale &&
        !resultHref.startsWith('http://') &&
        !resultHref.startsWith('https://')
    ) {
        resultHref = `/${resultLocale}${resultHref}`;
    }

    return (
        <HoverPrefetchLink href={resultHref} {...rest}>
            {children}
        </HoverPrefetchLink>
    );
};

export {I18nLink as Link};
