import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import * as dotenv from 'dotenv';
import {request} from 'undici';

import {libs} from '../src/libs.mjs';

dotenv.config();

const librariesInfoFilePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '../src/libraries-info.json',
);

const fetchNpmInfo = () => {
    const npmApiUrl = 'https://registry.npmjs.org/';
    return Promise.all(
        libs.map(async (item) => {
            const {body} = await request(`${npmApiUrl}${item.npmId}`);
            const data = await body.json();
            return [item.id, data];
        }),
    );
};

const fetchGithubInfo = () => {
    const githubApiUrl = 'https://api.github.com/repos/';
    return Promise.all(
        libs.map(async (item) => {
            const headers = {'User-Agent': 'request'};
            if (process.env.GITHUB_TOKEN) {
                headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
            }
            const {body} = await request(`${githubApiUrl}${item.githubId}`, {
                headers,
            });
            const data = await body.json();
            return [item.id, data];
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
                const {body} = await request(item.readmeUrl, {
                    headers,
                });
                data = await body.text();
            }

            return [item.id, data];
        }),
    );
};

if (fs.existsSync(librariesInfoFilePath) && !process.env.GITHUB_TOKEN) {
    console.error(
        `The libraries-info.json file exists. You can delete it manually for refetch.
Learn more about the limitations of the GitHub API..
https://docs.github.com/ru/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#rate-limiting`,
    );
    process.exit(0);
}

Promise.all([fetchNpmInfo(), fetchGithubInfo(), fetchReadmeInfo()])
    .then(([npmInfo, githubInfo, readmeInfo]) => {
        // Versions
        const versions = [];

        npmInfo.forEach(([id, data]) => {
            const libMeta = libs.find((item) => item.id === id);

            const latestVersion = data?.['dist-tags']?.latest;
            let latestReleaseVersion;
            let latestReleaseDate;
            if (latestVersion) {
                latestReleaseVersion = latestVersion;
                if (data?.time?.[latestVersion]) {
                    try {
                        const date = new Date(data?.time?.[latestVersion]);
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
            } else {
                throw Error(`No latest version for ${id}`);
            }
            versions.push({
                title: libMeta.npmId,
                version: latestReleaseVersion,
                date: latestReleaseDate,
            });
        });

        fs.writeFileSync(
            path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/versions.json'),
            JSON.stringify(versions),
            'utf8',
        );

        // Stars
        const stars = [];

        githubInfo.forEach(([id, data]) => {
            const libMeta = libs.find((item) => item.id === id);

            const value = data?.stargazers_count;

            if (value) {
                stars.push({
                    title: libMeta.githubId,
                    stars: value,
                });
            } else {
                throw Error(JSON.stringify(data));
            }
        });

        if (stars.length === 0) {
            console.error('Empty stars');
            process.exit(1);
        }

        fs.writeFileSync(
            path.join(path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/stars.json')),
            JSON.stringify(stars),
            'utf8',
        );

        // Total info

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

        fs.writeFileSync(librariesInfoFilePath, JSON.stringify(result), 'utf8');
    })
    .catch((err) => {
        console.error(err.message);
        process.exit(1);
    });
