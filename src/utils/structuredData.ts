import {SITE_URL} from './canonical';

const SCHEMA_CONTEXT = 'https://schema.org';

/**
 * Profiles the site itself links to, so they are authoritative rather than guessed.
 * The npm organisation is deliberately absent: it is not linked from the site and could not
 * be verified, and an unverified sameAs is worse than a missing one.
 */
const OFFICIAL_PROFILES = [
    'https://github.com/gravity-ui',
    'https://t.me/gravity_ui',
    'https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)',
];

export type JsonLd = Record<string, unknown>;

export const getOrganizationJsonLd = (): JsonLd => ({
    '@context': SCHEMA_CONTEXT,
    '@type': 'Organization',
    name: 'Gravity UI',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon-512x512.png`,
    sameAs: OFFICIAL_PROFILES,
});

export const getWebSiteJsonLd = (): JsonLd => ({
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    name: 'Gravity UI',
    url: `${SITE_URL}/`,
    // No `potentialAction: SearchAction` on purpose: the site has no search endpoint, so
    // declaring one would be markup that does not describe the page.
});

export const getBreadcrumbJsonLd = (items: {name: string; url: string}[]): JsonLd => ({
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
    })),
});

export const getSoftwareSourceCodeJsonLd = (params: {
    name: string;
    description?: string;
    githubId: string;
    url: string;
}): JsonLd => {
    const {name, description, githubId, url} = params;

    return {
        '@context': SCHEMA_CONTEXT,
        '@type': 'SoftwareSourceCode',
        name,
        url,
        codeRepository: `https://github.com/${githubId}`,
        programmingLanguage: 'TypeScript',
        ...(description ? {description} : {}),
    };
};

export const getTechArticleJsonLd = (params: {
    headline: string;
    description?: string;
    url: string;
    locale: string;
}): JsonLd => {
    const {headline, description, url, locale} = params;

    return {
        '@context': SCHEMA_CONTEXT,
        '@type': 'TechArticle',
        headline,
        url,
        inLanguage: locale,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Gravity UI',
            url: `${SITE_URL}/`,
        },
        // datePublished/dateModified are omitted rather than invented: the readme content is
        // fetched from GitHub raw URLs, which carry no reliable authoring date.
        ...(description ? {description} : {}),
    };
};
