import {PostData} from '@gravity-ui/blog-constructor';
import {
    fullTransform,
    typografToHTML,
    typografToText,
    yfmTransformer,
} from '@gravity-ui/page-constructor/server';
import {Lang} from '@gravity-ui/uikit';
import {parse} from 'node-html-parser';

/**
 * Formats a blog post URL with locale prefix
 * @param url - The original URL (may or may not contain locale prefix)
 * @param locale - The locale string (e.g., 'en', 'ru')
 * @returns Formatted URL with locale prefix (e.g., '/en/blog/posts/...' or '/ru/blog/posts/...')
 */
export const getUrlWithLocale = (url: string, locale: string): string => {
    const defaultLocale = 'en';
    const lang = locale || defaultLocale;

    // Check if URL already has a locale prefix
    const locales = ['en', 'ru', 'es', 'zh', 'fr', 'de', 'ko'];
    const urlParts = url.startsWith('/') ? url.slice(1).split('/') : url.split('/');

    // If first part is a locale, remove it and rebuild URL
    if (urlParts.length > 0 && locales.includes(urlParts[0])) {
        urlParts.shift();
    }

    // Remove 'blog' prefix if present (Next.js handles /blog routing)
    if (urlParts.length > 0 && urlParts[0] === 'blog') {
        urlParts.shift();
    }

    const cleanUrl = urlParts.join('/');

    // Always add locale prefix, including default locale
    // Ensure URL starts with / and has locale prefix
    return cleanUrl ? `/${lang}/blog/${cleanUrl}` : `/${lang}/blog`;
};

type MarkdownItPluginCb = Parameters<typeof fullTransform>[1]['plugins'][number];

/**
 * Transforms post content from markdown to HTML
 * @param content - The markdown content to transform
 * @param lang - The language for transformation
 * @param plugins - Optional markdown plugins
 * @param path - Optional path for resolving relative resources
 * @returns The transformed HTML content
 */
function transformPostContent(
    content: string,
    lang: Lang,
    plugins: MarkdownItPluginCb[] = [],
    path?: string,
) {
    const {html} = fullTransform(content, {
        lang,
        extractTitle: true,
        allowHTML: true,
        path: path || __dirname,
        plugins,
    });

    return html;
}

/**
 * Extracts plain text from HTML/YFM content
 * @param lang - The language for transformation
 * @param yfmText - The YFM/HTML text to extract from
 * @param plugins - Optional markdown plugins
 * @returns The extracted plain text
 */
const extractTextFromHtml = (lang: Lang, yfmText?: string, plugins?: MarkdownItPluginCb[]) => {
    if (!yfmText) {
        return yfmText;
    }

    const html = yfmTransformer(lang, yfmText, {plugins});
    const root = parse(html);
    return root.text;
};

export interface PreparePostOptions {
    postData: Record<string, unknown>;
    locale: {lang: Lang | string};
    withContent?: boolean;
    plugins?: MarkdownItPluginCb[];
    contentPath?: string;
}

/**
 * Prepares a blog post for display by transforming content, titles, and URLs
 * @param options - Options for preparing the post
 * @returns The prepared post data
 */
export function preparePost({
    postData,
    locale,
    withContent = true,
    plugins = [],
    contentPath,
}: PreparePostOptions): PostData {
    const {
        tags,
        content,
        title,
        description,
        url,
        publishedVersionId: _publishedVersionId,
        hasPublishedVersionInRegion: _hasPublishedVersionInRegion,
        hasPublishedVersionInLocale: _hasPublishedVersionInLocale,
        ...post
    } = postData;

    // Convert locale.lang to Lang type if it's a string
    // Map string locale to Lang enum value
    const langMap: Record<string, Lang> = {
        en: Lang.En,
        ru: Lang.Ru,
        de: Lang.De,
        es: Lang.Es,
        fr: Lang.Fr,
        ko: Lang.Ko,
        zh: Lang.Zh,
    };
    const langValue: Lang =
        typeof locale.lang === 'string' ? langMap[locale.lang] || Lang.En : locale.lang;
    const langString =
        typeof locale.lang === 'string'
            ? locale.lang
            : Object.keys(langMap).find((key) => langMap[key] === locale.lang) || 'en';

    const transformedTitle = yfmTransformer(langValue, title as string, {plugins});

    const preparedPost: PostData = {
        ...post,
        tags,
        title: transformedTitle,
        textTitle: typografToText(transformedTitle, langValue),
        htmlTitle: typografToHTML(transformedTitle, langValue),
        metaTitle: extractTextFromHtml(langValue, title, plugins),
        metaDescription: extractTextFromHtml(langValue, description, plugins),
        shareTitle: extractTextFromHtml(langValue, title, plugins),
        shareDescription: extractTextFromHtml(langValue, description, plugins),
        description: yfmTransformer(langValue, description as string, {plugins}),
        url: url ? getUrlWithLocale(url, langString) : '',
    };

    if (withContent) {
        preparedPost.content = transformPostContent(
            content as string,
            langValue,
            plugins,
            contentPath,
        );
    }

    return preparedPost;
}
