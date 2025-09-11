import uniq from 'lodash/uniq';
import mm from 'micromatch';

import type {Contributor, LibWithFullData} from '../api';
import packagesVersions from '../data/packages-versions.json';

// Re-export lib config functions from dedicated module
export {getLibConfigByIdSafe, isValidLibId, getLibConfigById, type LibConfig} from '../libs/config';

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

export const getMaintainers = (lib: LibWithFullData, path = '/'): Contributor[] => {
    const {contributors, codeOwners} = lib.data;

    const allCodeOwners = codeOwners.reduce<string[]>((acc, {pattern, owners}) => {
        if (mm.isMatch(path, pattern)) {
            acc.push(...owners);
        }

        return acc;
    }, []);

    const uniqueCodeOwners = uniq(allCodeOwners);

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
