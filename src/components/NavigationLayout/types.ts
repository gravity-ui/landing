export type SubSection = {
    id: string;
    title: string;
    url: string;
};

export type Section = {
    id: string;
    title: string;
    url?: string;
    subSections?: SubSection[];
};
