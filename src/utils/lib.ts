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

/**
 * Extracts the first sentence from markdown content for meta descriptions
 * Supports multiple languages and their punctuation patterns
 * @param markdownContent - The markdown text to extract the first sentence from
 * @returns The first sentence extracted from the markdown content, truncated if too long
 */
export const extractFirstSentence = (markdownContent: string): string => {
    if (!markdownContent) {
        return '';
    }

    // Remove markdown formatting (headers, links, code blocks, etc.)
    const cleanText = markdownContent
        // Remove GitHub blocks and comments
        .replace(/<!--[\s\S]*?-->/g, '')
        // Remove code blocks
        .replace(/```[\s\S]*?```/g, '')
        .replace(/`[^`]*`/g, '')
        // Remove headers completely (don't include header text in description)
        .replace(/#{1,6}\s+[^\n]*\n?/g, '')
        // Remove links but keep text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        // Remove bold/italic formatting
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/__([^_]+)__/g, '$1')
        .replace(/_([^_]+)_/g, '$1')
        // Remove HTML tags
        .replace(/<[^>]*>/g, '')
        // Remove extra whitespace and newlines
        .replace(/\s+/g, ' ')
        .trim();

    if (!cleanText) {
        return '';
    }

    // Find the first sentence with international punctuation support
    // Supports: . ! ? (Latin), 。！？(Chinese), ।(Hindi), ؟(Arabic), etc.
    const sentenceMatch = cleanText.match(/^[^.!?。！？।؟]*[.!?。！？।؟]/);
    if (sentenceMatch) {
        let firstSentence = sentenceMatch[0].trim();

        // Ensure the sentence is not too long for meta description
        if (firstSentence.length > 155) {
            firstSentence = firstSentence.substring(0, 152) + '...';
        }

        return firstSentence;
    }

    // If no sentence ending found, take first 150 characters and add ellipsis
    if (cleanText.length > 155) {
        return cleanText.substring(0, 152).trim() + '...';
    }

    return cleanText;
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

export const getComponentMeta = (
    lib: {id: string; title: string},
    componentTitle: string,
    readmeContent: string,
    fallbackDescription?: string,
): MetaProps => {
    const dynamicDescription = extractFirstSentence(readmeContent);

    return {
        name: `${lib.title} – ${componentTitle}`,
        description:
            dynamicDescription ||
            fallbackDescription ||
            `${componentTitle} component from ${lib.title}`,
        image: getOgImageUrl(lib.id),
    };
};

export const getDesignArticleMeta = (
    sectionTitle: string,
    articleTitle: string,
    articleContent: string,
    fallbackDescription?: string,
): MetaProps => {
    const dynamicDescription = extractFirstSentence(articleContent);

    return {
        name: `Gravity UI – ${sectionTitle} – ${articleTitle}`,
        description:
            dynamicDescription ||
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
