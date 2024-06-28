import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import * as dotenv from 'dotenv';
import {request} from 'undici';

import {libs} from '../src/libs.mjs';

import {fetchRepositoryCodeOwners, getRepositoryContributors} from './github.mjs';

dotenv.config();

const libsFetchedData = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '../src/data/libs-data.json',
);

const fetchNpmInfo = () => {
    const npmApiUrl = 'https://registry.npmjs.org/';
    return Promise.all(
        libs.map(async (item) => {
            if (item.npmId) {
                try {
                    const {statusCode, body} = await request(`${npmApiUrl}${item.npmId}`);
                    if (statusCode >= 200 && statusCode < 300) {
                        const data = await body.json();
                        return [item.id, data];
                    }
                } catch (err) {
                    console.error(err);
                }
            }
            return [item.id, null];
        }),
    );
};

const fetchGithubInfo = () => {
    const githubApiUrl = 'https://api.github.com/repos/';
    return Promise.all(
        libs.map(async (item) => {
            if (item.githubId) {
                try {
                    const headers = {'User-Agent': 'request'};
                    if (process.env.GITHUB_TOKEN) {
                        headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
                    }

                    const [repoOwner, repo] = item.githubId.split('/');
                    const [data, contributors, codeOwners] = await Promise.all([
                        (async () => {
                            const {statusCode, body} = await request(
                                `${githubApiUrl}${item.githubId}`,
                                {
                                    headers,
                                },
                            );

                            if (!(statusCode >= 200 && statusCode < 300)) {
                                throw new Error(
                                    `failed to fetch github repo info '${item.githubId}'`,
                                );
                            }

                            return await body.json();
                        })(),
                        getRepositoryContributors(repoOwner, repo),
                        fetchRepositoryCodeOwners(repoOwner, repo),
                    ]);

                    data.contributors = contributors;
                    data.codeOwners = codeOwners;
                    return [item.id, data];
                } catch (err) {
                    console.error(err);
                }
            }
            return [item.id, null];
        }),
    );
};

const fetchReadmeInfo = () => {
    return Promise.all(
        libs.map(async (item) => {
            const headers = {'User-Agent': 'request'};
            if (process.env.GITHUB_TOKEN) {
                headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
            }

            let data = '';

            if (item.readmeUrl) {
                try {
                    const {statusCode, body} = await request(item.readmeUrl, {
                        headers,
                    });
                    if (statusCode >= 200 && statusCode < 300) {
                        data = await body.text();
                    }
                } catch (err) {
                    console.error(err);
                }
            }

            return [item.id, data];
        }),
    );
};

const fetchChangelogInfo = () => {
    return Promise.all(
        libs.map(async (item) => {
            const headers = {'User-Agent': 'request'};
            if (process.env.GITHUB_TOKEN) {
                headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
            }

            let data = '';

            if (item.changelogUrl) {
                try {
                    const {statusCode, body} = await request(item.changelogUrl, {
                        headers,
                    });
                    if (statusCode >= 200 && statusCode < 300) {
                        data = await body.text();
                    }
                } catch (err) {
                    console.error(err);
                }
            }

            return [item.id, data];
        }),
    );
};

if (fs.existsSync(libsFetchedData) && !process.env.GITHUB_TOKEN) {
    console.error(
        `The libs-data.json file exists. You can delete it manually for refetch.
Learn more about the limitations of the GitHub API..
https://docs.github.com/ru/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#rate-limiting`,
    );
    process.exit(0);
}

Promise.all([fetchNpmInfo(), fetchGithubInfo(), fetchReadmeInfo(), fetchChangelogInfo()])
    .then(([npmInfo, githubInfo, readmeInfo, changelogInfo]) => {
        const result = {};
        npmInfo.forEach(([id, data]) => {
            result[id] = {npmInfo: data};
        });
        githubInfo.forEach(([id, data]) => {
            result[id] = {...result[id], githubInfo: data};
        });
        readmeInfo.forEach(([id, data]) => {
            result[id] = {...result[id], readmeInfo: data};
        });
        changelogInfo.forEach(([id, data]) => {
            result[id] = {...result[id], changelogInfo: data};
        });

        const preparedResult = {};
        Object.keys(result).forEach((id) => {
            const libGithubInfo = result[id].githubInfo;
            const libNpmInfo = result[id].npmInfo;

            const latestVersion = libNpmInfo?.['dist-tags']?.latest;
            let latestReleaseVersion = '';
            let latestReleaseDate = '';

            if (latestVersion) {
                latestReleaseVersion = latestVersion;
                if (libNpmInfo?.time?.[latestVersion]) {
                    try {
                        const date = new Date(libNpmInfo?.time?.[latestVersion]);
                        const day = date.getUTCDate();
                        const month = date.getUTCMonth() + 1;
                        latestReleaseDate = `${day < 10 ? `0${day}` : day}.${
                            month < 10 ? `0${month}` : month
                        }.${date.getUTCFullYear()}`;
                    } catch (error) {
                        console.log(error);
                        process.exit(1);
                    }
                }
            }

            preparedResult[id] = {
                stars: libGithubInfo?.stargazers_count ?? 0,
                version: latestReleaseVersion,
                lastUpdate: latestReleaseDate,
                license: libGithubInfo?.license?.name ?? '',
                issues: libGithubInfo?.open_issues_count ?? 0,
                readme: result[id].readmeInfo,
                changelog: result[id].changelogInfo,
                contributors: libGithubInfo?.contributors ?? [],
                codeOwners: libGithubInfo?.codeOwners ?? [],
                // debug: result[id],
            };
        });

        fs.writeFileSync(libsFetchedData, JSON.stringify(preparedResult), 'utf8');
    })
    .catch((err) => {
        console.error(err.message);
        process.exit(1);
    });
