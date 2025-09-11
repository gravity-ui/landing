import {libs} from '../libs.mjs';

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

export const getLibConfigByIdSafe = (id: string): LibConfig | undefined => {
    const config = libs.find((lib) => lib.id === id);

    return config;
};

export const isValidLibId = (id: string): boolean => {
    return getLibConfigByIdSafe(id) !== undefined;
};

export const getLibConfigById = (id: string): LibConfig => {
    const config = getLibConfigByIdSafe(id);

    if (!config) {
        throw new Error(`Can't find config for lib with id – ${id}`);
    }

    return config;
};
