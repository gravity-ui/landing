import type {LibConfig} from '../../libs';

import {fetchChangelogInfo} from './fetch-lib-changelog-info';
import {fetchLibGithubInfo} from './fetch-lib-github-info';
import {fetchNpmInfo} from './fetch-lib-npm-info';
import {fetchLibReadmeInfo} from './fetch-lib-readme-info';
import type {CodeOwners, Contributor} from './github';

export type LibData = {
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

export const fetchLibData = async (libConfig: LibConfig): Promise<LibData> => {
    const [npmInfo, githubInfo, readmeInfo, changelogInfo] = await Promise.all([
        libConfig.npmId ? fetchNpmInfo(libConfig.npmId) : null,
        libConfig.githubId ? fetchLibGithubInfo(libConfig.githubId) : null,
        fetchLibReadmeInfo(libConfig),
        libConfig.changelogUrl ? fetchChangelogInfo(libConfig.changelogUrl) : '',
    ]);

    const latestVersion = npmInfo?.['dist-tags']?.latest || '';
    let latestReleaseDate = '';

    if (latestVersion && npmInfo?.time?.[latestVersion]) {
        try {
            const date = new Date(npmInfo.time[latestVersion]);
            const day = date.getUTCDate();
            const month = date.getUTCMonth() + 1;
            latestReleaseDate = `${day < 10 ? `0${day}` : day}.${
                month < 10 ? `0${month}` : month
            }.${date.getUTCFullYear()}`;
        } catch (error) {
            console.error('Error parsing date:', error);
        }
    }

    return {
        stars: githubInfo?.stargazers_count ?? 0,
        version: latestVersion,
        lastUpdate: latestReleaseDate,
        license: githubInfo?.license?.name ?? '',
        issues: githubInfo?.open_issues_count ?? 0,
        readme: readmeInfo,
        changelog: changelogInfo,
        contributors: githubInfo?.contributors ?? [],
        codeOwners: githubInfo?.codeOwners ?? [],
    };
};
