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
    locale: {lang: string};
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

    const transformedTitle = yfmTransformer(locale.lang, title as string, {plugins});

    const preparedPost: PostData = {
        ...post,
        tags,
        title: transformedTitle,
        textTitle: typografToText(transformedTitle, locale.lang),
        htmlTitle: typografToHTML(transformedTitle, locale.lang),
        metaTitle: extractTextFromHtml(locale.lang, title, plugins),
        metaDescription: extractTextFromHtml(locale.lang, description, plugins),
        shareTitle: extractTextFromHtml(locale.lang, title, plugins),
        shareDescription: extractTextFromHtml(locale.lang, description, plugins),
        description: yfmTransformer(locale.lang, description as string, {plugins}),
        url: url ? getUrlWithLocale(url, locale.lang) : '',
    };

    if (withContent) {
        preparedPost.content = transformPostContent(
            content as string,
            locale.lang,
            plugins,
            contentPath,
        );
    }

    return preparedPost;
}
