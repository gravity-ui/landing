import libsData from '../libs-data.json';
import {libs} from '../libs.mjs';

type LibConfig = {
    id: string;
    githubId: string;
    npmId: string;
    title: string;
    primary: boolean;
    landing: boolean;
    tags: string[];
    description: string;
    storybookUrl: string;
    readmeUrl: string;
    changelogUrl: string;
    mainBranch: string;
};

type LibData = {
    stars: number;
    version: string;
    lastUpdate: string;
    license: string;
    issues: number;
    readme: string;
    changelog: string;
};

export type Lib = {
    config: LibConfig;
    data: LibData;
};

export const getLibsList = (): Lib[] => {
    const result: Lib[] = [];

    libs.forEach((config) => {
        const data = (libsData as any)[config.id];

        if (!data) {
            throw new Error(`Can't find fetched data for lib with id – ${config.id}`);
        }

        result.push({
            config: config as LibConfig,
            data: data as LibData,
        });
    });

    return result;
};

export const getLibById = (id: string): Lib => {
    const config = libs.find((lib) => lib.id === id);

    if (!config) {
        throw new Error(`Can't find config for lib with id – ${id}`);
    }

    const data = (libsData as any)[id];

    if (!data) {
        throw new Error(`Can't find fetched data for lib with id – ${id}`);
    }

    return {
        config: config as LibConfig,
        data: data as LibData,
    };
};

export const getLibraryGithubUrl = (library: Lib) =>
    `https://github.com/${library.config.githubId}`;
