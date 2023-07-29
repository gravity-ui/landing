import {ElementType} from 'react';

export type Component = {
    id: string;
    title: string;
    description?: string;
    githubUrl?: string;
    figmaUrl?: string;
    isComingSoon?: boolean;
    content?: {
        overview: string;
        design?: string;
    };
    sandbox?: SandboxType;
};

type OptionType = {
    value: string;
    content: string;
};

export type SandboxType = {
    component: ElementType;
    props: {
        [key: string]: {
            type: string;
            values?: OptionType[];
        };
    };
};

export type Lib = {
    id: string;
    title: string;
    primary: boolean;
    description?: string;
    components: Component[];
};
