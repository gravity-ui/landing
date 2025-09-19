import uniq from 'lodash/uniq';
import mm from 'micromatch';

import type {Contributor, LibWithFullData} from '../api';
import packagesVersions from '../data/packages-versions.json';

// Re-export lib config functions from dedicated module
export {getLibConfigByIdSafe, isValidLibId, getLibConfigById, type LibConfig} from '../libs/config';

export const getLibVersion = (id?: string) => {
    let libraryVersion;

    if (!id) {
        return undefined;
    }

    try {
        libraryVersion = (packagesVersions as Record<string, string>)[id];
    } catch {
        libraryVersion = undefined;
    }

    return libraryVersion;
};

const getOgImageUrl = (id?: string) => {
    return id ? `https://storage.yandexcloud.net/gravity-ui-assets/og/${id}.jpg` : undefined;
};

export type MetaProps = {
    name: string;
    description: string;
    image?: string;
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

export const getComponentMeta = async (
    lib: {id: string; title: string},
    componentTitle: string,
    componentId: string,
    locale = 'en',
    fallbackDescription?: string,
): Promise<MetaProps> => {
    let staticDescription = '';

    try {
        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(
            process.cwd(),
            'public',
            'locales',
            locale,
            'component-meta.json',
        );
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const componentMeta = JSON.parse(fileContent);
        staticDescription = componentMeta[lib.id]?.[componentId] || '';

        // Fallback to English if not found in current locale
        if (!staticDescription && locale !== 'en') {
            const enFilePath = path.join(
                process.cwd(),
                'public',
                'locales',
                'en',
                'component-meta.json',
            );
            const enFileContent = fs.readFileSync(enFilePath, 'utf8');
            const enComponentMeta = JSON.parse(enFileContent);
            staticDescription = enComponentMeta[lib.id]?.[componentId] || '';
        }
    } catch (error) {
        console.warn(
            `Failed to load component meta for ${lib.id}/${componentId} in locale ${locale}:`,
            error,
        );
    }

    return {
        name: `${lib.title} – ${componentTitle}`,
        description:
            staticDescription ||
            fallbackDescription ||
            `${componentTitle} component from ${lib.title}`,
        image: getOgImageUrl(lib.id),
    };
};

export const getDesignArticleMeta = async (
    sectionId: string,
    sectionTitle: string,
    articleId: string,
    articleTitle: string,
    locale = 'en',
    fallbackDescription?: string,
): Promise<MetaProps> => {
    let staticDescription = '';

    try {
        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'design-meta.json');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const designMeta = JSON.parse(fileContent);
        staticDescription = designMeta[sectionId]?.[articleId] || '';

        // Fallback to English if not found in current locale
        if (!staticDescription && locale !== 'en') {
            const enFilePath = path.join(
                process.cwd(),
                'public',
                'locales',
                'en',
                'design-meta.json',
            );
            const enFileContent = fs.readFileSync(enFilePath, 'utf8');
            const enDesignMeta = JSON.parse(enFileContent);
            staticDescription = enDesignMeta[sectionId]?.[articleId] || '';
        }
    } catch (error) {
        console.warn(
            `Failed to load design meta for ${sectionId}/${articleId} in locale ${locale}:`,
            error,
        );
    }

    return {
        name: `Gravity UI – ${sectionTitle} – ${articleTitle}`,
        description:
            staticDescription ||
            fallbackDescription ||
            `${articleTitle} design guide from Gravity UI`,
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

export const getMaintainers = (lib: LibWithFullData, path = '/'): Contributor[] => {
    const {contributors, codeOwners} = lib.data;

    const allCodeOwners = codeOwners.reduce<string[]>((acc, {pattern, owners}) => {
        if (mm.isMatch(path, pattern)) {
            acc.push(...owners);
        }

        return acc;
    }, []);

    const uniqueCodeOwners = uniq(allCodeOwners);

    return uniqueCodeOwners
        .map<Contributor>((owner) => {
            const maintainer = contributors.find((contributor) => contributor.login === owner);

            if (!maintainer) {
                console.warn(`code owner ${owner} is not a contributor`);

                return {
                    login: owner,
                    name: owner,
                    url: `https://github.com/${owner}`,
                    avatarUrl: '',
                    contributions: 0,
                };
            }

            return maintainer;
        })
        .sort((a, b) => b.contributions - a.contributions);
};
