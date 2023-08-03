export type Article = {
    id: string;
    title: string;
    description?: string;
    content: string;
};

export type Section = {
    id: string;
    title: string;
    description: string;
    articles: Article[];
};
