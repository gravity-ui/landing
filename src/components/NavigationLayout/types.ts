export type SubSection = {
    id: string;
    title: string;
    url: string;
    isComingSoon?: boolean;
};

export type Section = {
    id: string;
    title: string;
    url?: string;
    subSections?: SubSection[];
};
