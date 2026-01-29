import {PostData, Tag} from '@gravity-ui/blog-constructor';
import {
    fullTransform,
    typografToHTML,
    typografToText,
    yfmTransformer,
} from '@gravity-ui/page-constructor/server';
import {parse} from 'node-html-parser';

/**
 * For transform: page-constructor supports only 'en' | 'ru'
 */
function getTransformLang(locale: string): 'en' | 'ru' {
    return locale === 'ru' ? 'ru' : 'en';
}

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

type MarkdownItPluginCb = NonNullable<Parameters<typeof fullTransform>[1]['plugins']>[number];

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
    locale: string,
    plugins: MarkdownItPluginCb[] = [],
    path?: string,
) {
    const {html} = fullTransform(content, {
        lang: getTransformLang(locale),
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
const extractTextFromHtml = (locale: string, yfmText?: string, plugins?: MarkdownItPluginCb[]) => {
    if (!yfmText) {
        return yfmText;
    }

    const html = yfmTransformer(getTransformLang(locale), yfmText, {plugins});
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

    const localeStr = locale.lang || 'en';
    const transformLang = getTransformLang(localeStr);

    const transformedTitle = yfmTransformer(transformLang, title as string, {plugins});

    const preparedPost = {
        ...post,
        tags: tags as Tag[],
        title: transformedTitle,
        textTitle: typografToText(transformedTitle, transformLang),
        htmlTitle: typografToHTML(transformedTitle, transformLang),
        metaTitle: extractTextFromHtml(localeStr, title as string | undefined, plugins),
        metaDescription: extractTextFromHtml(localeStr, description as string | undefined, plugins),
        shareTitle: extractTextFromHtml(localeStr, title as string | undefined, plugins),
        shareDescription: extractTextFromHtml(
            localeStr,
            description as string | undefined,
            plugins,
        ),
        description: yfmTransformer(transformLang, description as string, {plugins}),
        url: url && typeof url === 'string' ? getUrlWithLocale(url, localeStr) : '',
    } as PostData;

    if (withContent) {
        preparedPost.content = transformPostContent(
            content as string,
            localeStr,
            plugins,
            contentPath,
        );
    }

    return preparedPost;
}
