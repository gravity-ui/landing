export type MetaProps = {
    name: string;
    description: string;
    image?: string;
};

const getOgImageUrl = (id?: string) => {
    return id ? `https://storage.yandexcloud.net/gravity-ui-assets/og/${id}.jpg` : undefined;
};

export const getLibraryMeta = (
    lib: {id: string; title: string},
    t: (key: string) => string,
    componentTitle?: string,
): MetaProps => {
    return {
        name: componentTitle ? `${lib.title} – ${componentTitle}` : lib.title,
        description: t(`libraries-info:description_${lib.id}`),
        image: getOgImageUrl(lib.id),
    };
};

export const getComponentMeta = (params: {
    libId: string;
    libTitle: string;
    componentId: string;
    componentTitle: string;
    t: any; // Use any to allow for options parameter
}): MetaProps => {
    const {libId, libTitle, componentId, componentTitle, t} = params;

    // Get the meta description from translations using flat structure
    const metaKey = `${libId}_${componentId}`;

    // Try accessing our component-meta namespace
    const description = t(`component-meta:${metaKey}`);
    console.log('🚀 Component meta attempt:', description, 'for key:', `component-meta:${metaKey}`);

    // Check if translation was found
    const hasTranslation =
        description && description !== `component-meta:${metaKey}` && description !== metaKey;
    console.log('🚀 Has translation:', hasTranslation);

    return {
        name: `${libTitle} – ${componentTitle}`,
        description: hasTranslation ? description : `${componentTitle} component from ${libTitle}`,
        image: getOgImageUrl(libId),
    };
};

export const getDesignArticleMeta = (params: {
    sectionId: string;
    sectionTitle: string;
    articleId: string;
    articleTitle: string;
    t: (key: string) => string;
}): MetaProps => {
    const {sectionId, sectionTitle, articleId, articleTitle, t} = params;

    // Get the meta description from translations using flat structure
    const metaKey = `${sectionId}_${articleId}`;
    const description = t(`design-meta:${metaKey}`);

    // Check if translation was found
    const hasTranslation = description !== `design-meta:${metaKey}` && description !== metaKey;

    return {
        name: `Gravity UI – ${sectionTitle} – ${articleTitle}`,
        description: hasTranslation ? description : `${articleTitle} design guide from Gravity UI`,
        image: 'https://gravity-ui.com/index-social.png',
    };
};

export const getDesignSectionMeta = (
    sectionTitle: string,
    t: (key: string) => string,
    fallbackDescription?: string,
): MetaProps => {
    // Try to get localized section description
    const localizedDescription = t(
        `design-articles-info:section_description_${sectionTitle
            .toLowerCase()
            .replace(/\s+/g, '_')}`,
    );

    const translationKey = `design-articles-info:section_description_${sectionTitle
        .toLowerCase()
        .replace(/\s+/g, '_')}`;
    const hasValidTranslation = localizedDescription !== translationKey;

    return {
        name: `Gravity UI – ${sectionTitle}`,
        description: hasValidTranslation
            ? localizedDescription
            : fallbackDescription || `${sectionTitle} design guides and principles`,
        image: 'https://gravity-ui.com/index-social.png',
    };
};
