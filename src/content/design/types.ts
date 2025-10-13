export const ARTICLE_SUPPORTED_LOCALES = ['en', 'ru', 'es', 'zh'] as const;
export type ArticleSupportedLocale = (typeof ARTICLE_SUPPORTED_LOCALES)[number];

export type Article = {
    id: string;
    content: Record<ArticleSupportedLocale, string>;
};

export type Section = {
    id: string;
    articles: Article[];
};
