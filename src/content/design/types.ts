export type Article = {
    id: string;
    content: {
        en: string;
        ru: string;
    };
};

export type Section = {
    id: string;
    articles: Article[];
};
