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
        libraryVersion = (packagesVersions as Record<string, string>)[id];
    } catch {
        libraryVersion = undefined;
    }

    return libraryVersion;
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
