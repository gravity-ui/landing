export type Component = {
    id: string;
    title: string;
    description?: string;
    isComingSoon?: boolean;
    content?: {
        overview: string;
        design?: string;
    };
};

export type Lib = {
    id: string;
    title: string;
    primary: boolean;
    description?: string;
    components: Component[];
};
