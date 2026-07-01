import React from 'react';

const SITE_NAME = 'Gravity UI';

const DEFAULT_META = {
    name: SITE_NAME,
    description: 'Build modern interfaces with the Gravity design system and libraries',
    image: 'https://gravity-ui.com/index-social.png',
    imageType: 'image/png',
    imageWidth: 1280,
    imageHeight: 640,
};

export type MetaProps = {
    name?: string;
    description?: string;
    image?: string;
    imageType?: string;
    imageWidth?: number;
    imageHeight?: number;
};

export const Meta: React.FC<MetaProps> = ({
    name = DEFAULT_META.name,
    description = DEFAULT_META.description,
    image = DEFAULT_META.image,
    imageType = DEFAULT_META.imageType,
    imageWidth = DEFAULT_META.imageWidth,
    imageHeight = DEFAULT_META.imageHeight,
}) => {
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
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />
            <meta property="og:image:type" content={imageType} />
            <meta property="og:image:width" content={String(imageWidth)} />
            <meta property="og:image:height" content={String(imageHeight)} />
            <meta property="og:image:alt" content={name} />

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
