import {useRouter} from 'next/router';
import React from 'react';
import {useLocale} from 'src/hooks/useLocale';
import {getCanonicalUrlFromAsPath} from 'src/utils/canonical';

const SITE_NAME = 'Gravity UI';

const DEFAULT_META = {
    name: SITE_NAME,
    description: 'Build modern interfaces with the Gravity design system and libraries',
    image: 'https://gravity-ui.com/index-social.png',
};

export type MetaProps = {
    name?: string;
    description?: string;
    image?: string;
};

export const Meta: React.FC<MetaProps> = ({
    name = DEFAULT_META.name,
    description = DEFAULT_META.description,
    image = DEFAULT_META.image,
}) => {
    const router = useRouter();
    const locale = useLocale();
    const canonicalUrl = getCanonicalUrlFromAsPath(router.asPath);

    return (
        <React.Fragment>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#160d1b" />

            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
            <link type="image/png" sizes="192x192" rel="icon" href="/favicon-192x192.png" />
            <link type="image/png" sizes="512x512" rel="icon" href="/favicon-512x512.png" />

            <link rel="apple-touch-icon" href="/favicon-192x192.png" />

            <meta name="description" content={description} />

            <meta itemProp="name" content={name} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={image} />

            <meta property="og:title" content={name} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={locale} />

            <meta name="twitter:title" content={name} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />

            <meta property="share:title" content={name} />
            <meta property="share:sharing_schema" content="default" />
            <link rel="manifest" href="/manifest.json" />
        </React.Fragment>
    );
};
