/**
 * This script is used to prefetch all organization contributors.
 */

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import * as dotenv from 'dotenv';

import {getOrganizationRepositories, getRepositoryContributors} from './github.mjs';

dotenv.config();

const LIBS_DATA_FILENAME = 'libs-data.json';
const CONTRIB_FILENAME = 'contributors.json';

const contribDataPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../src/data',
    CONTRIB_FILENAME,
);

const readLibsData = async () => {
    const libsDataPath = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        '../src/data',
        LIBS_DATA_FILENAME,
    );

    const libsDataContent = await fs.promises.readFile(libsDataPath, 'utf-8');
    return JSON.parse(libsDataContent);
};

const start = async () => {
    if (fs.existsSync(contribDataPath) && !process.env.GITHUB_TOKEN) {
        console.error(
            `The ${CONTRIB_FILENAME} file exists. You can delete it manually for refetch.
            Learn more about the limitations of the GitHub API...
            https://docs.github.com/ru/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#rate-limiting`,
        );

        return;
    }

    if (!process.env.GITHUB_TOKEN) {
        console.warn(
            `The ${CONTRIB_FILENAME} cannot be filled with real data. You need to put your GitHub PAT in the "GITHUB_TOKEN" environment variable to get the actual list of contributors.`,
        );

        fs.writeFileSync(contribDataPath, JSON.stringify([], null, 4), 'utf8');

        return;
    }

    const libsData = await readLibsData();
    const repos = await getOrganizationRepositories('gravity-ui');

    const rawContributors = await Promise.all(
        repos.map(async (repo) => {
            if (libsData[repo.name]) {
                return libsData[repo.name].contributors;
            }

            return await getRepositoryContributors(repo.owner.login, repo.name);
        }),
    );

    const contributors = {};

    for (const list of rawContributors) {
        for (const contributor of list) {
            const {login, contributions} = contributor;

            if (contributors[login]) {
                contributors[login].contributions += contributions;
            } else {
                contributors[login] = contributor;
            }
        }
    }

    const sortedContributors = Object.values(contributors).sort(
        (a, b) => b.contributions - a.contributions,
    );

    fs.writeFileSync(contribDataPath, JSON.stringify(sortedContributors, null, 4), 'utf8');
};

start().catch((err) => {
    console.error(err.message);
    process.exit(1);
});
