import {libs as libsBase} from './libs.mjs';

export type LibConfig = {
    id: string;
    githubId: string;
    npmId: string;
    title: string;
    primary: boolean;
    landing: boolean;
    tags: string[];
    storybookUrl: string;
    readmeUrl: {
        en: string;
        ru: string;
    };
    changelogUrl: string;
    mainBranch: string;
};

export const libs: LibConfig[] = [...libsBase];
