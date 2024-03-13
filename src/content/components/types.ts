import {ElementType} from 'react';

export type Component = {
    id: string;
    title: string;
    description?: string;
    githubUrl?: string;
    figmaUrl?: string;
    isComingSoon?: boolean;
    isSupportRTL?: boolean;
    content?: {
        readmeUrl: string;
        design?: string;
    };
    sandbox?: SandboxType;
};

type OptionType = {
    value: string;
    content: string;
};

export type SandboxProps = {
    [key: string]: {
        type: string;
        defaultValue?: string | number | boolean;
        values?: OptionType[];
    };
};

export type SandboxType = {
    component: ElementType;
    props: SandboxProps;
};

export type Lib = {
    id: string;
    title: string;
    primary: boolean;
    description?: string;
    components: Component[];
};
