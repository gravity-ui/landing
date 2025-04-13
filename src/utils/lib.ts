import _ from 'lodash';
import mm from 'micromatch';

import allContributors from '../data/contributors.json';
import libsData from '../data/libs-data.json';
import packagesVersions from '../data/packages-versions.json';
import {libs} from '../libs.mjs';

type LibConfig = {
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

export type Contributor = {
    [x: string]: any;
    login: string;
    url: string;
    avatarUrl: string;
    contributions: number;
};

export type CodeOwners = {
    pattern: string;
    owners: string[];
};

type LibData = {
    stars: number;
    version: string;
    lastUpdate: string;
    license: string;
    issues: number;
    readme: {
        en: string;
        ru: string;
        es: string;
        zh: string;
    };
    changelog: string;
    contributors: Contributor[];
    codeOwners: CodeOwners[];
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

export const getLibVersion = (id?: string) => {
    let libraryVersion;

    if (!id) {
        return undefined;
    }

    try {
        libraryVersion = (packagesVersions as any)[id];
    } catch {
        libraryVersion = undefined;
    }

    return libraryVersion;
};

export const getLibraryGithubUrl = (library: Lib) =>
    `https://github.com/${library.config.githubId}`;

export const getAllContributors = () => allContributors;

export const getMaintainers = (lib: Lib, path = '/'): Contributor[] => {
    const {contributors, codeOwners} = lib.data;

    const allCodeOwners = codeOwners.reduce<string[]>((acc, {pattern, owners}) => {
        if (mm.isMatch(path, pattern)) {
            acc.push(...owners);
        }

        return acc;
    }, []);

    const uniqueCodeOwners = _.uniq(allCodeOwners);

    return uniqueCodeOwners
        .map<Contributor>((owner) => {
            const maintainer = contributors.find((contributor) => contributor.login === owner);

            if (!maintainer) {
                console.warn(`code owner ${owner} is not a contributor`);

                return {
                    login: owner,
                    name: owner,
                    url: `https://github.com/${owner}`,
                    avatarUrl: '',
                    contributions: 0,
                };
            }

            return maintainer;
        })
        .sort((a, b) => b.contributions - a.contributions);
};
