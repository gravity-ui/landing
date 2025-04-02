export type Article = {
    id: string;
    content: {
        en: string;
        ru: string;
        es: string;
        zh: string;
    };
};

export type Section = {
    id: string;
    articles: Article[];
};
