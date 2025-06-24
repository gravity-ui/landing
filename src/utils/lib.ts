import _ from 'lodash';
import mm from 'micromatch';

import packagesVersions from '../data/packages-versions.json';
import {libs} from '../libs';
import type {Contributor, Lib} from '../services/lib';

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

const getOgImageUrl = (id?: string) => {
    return id ? `https://storage.yandexcloud.net/gravity-ui-assets/og/${id}.jpg` : undefined;
};

export type MetaProps = {
    name: string;
    description: string;
    image?: string;
};

export const getLibraryMeta = (
    lib: {id: string; title: string},
    t: (key: string) => string,
    componentTitle?: string,
): MetaProps => {
    return {
        name: componentTitle ? `${lib.title} – ${componentTitle}` : lib.title,
        description: t(`libraries-info:description_${lib.id}`),
        image: getOgImageUrl(lib.id),
    };
};

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
