import * as dotenv from 'dotenv';
import {request} from 'undici';
import {libs} from '../src/libs.mjs';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

dotenv.config();

function fetchVersions() {
    const npmApiUrl = 'https://registry.npmjs.org/';
    const versions = [];
    return Promise.all(
        libs.map(async (item) => {
            const {body} = await request(`${npmApiUrl}${item.npmId}`);
            const data = await body.json();
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
                throw Error(`No latest version for ${item.title}`);
            }
            versions.push({
                title: item.npmId,
                version: latestReleaseVersion,
                date: latestReleaseDate,
            });
        }),
    ).then(() => {
        if (versions.length === 0) {
            console.log('Empty versions');
            process.error(1);
        }
        fs.writeFileSync(
            path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/versions.json'),
            JSON.stringify(versions),
            'utf8',
        );
    });
}

function fetchStars() {
    const githubApiUrl = 'https://api.github.com/repos/';
    const stars = [];
    const cacheFilePath = path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        '../src/stars.json',
    );
    if (cacheFilePath && !process.env.GITHUB_TOKEN) {
        console.error(
            `The stars cache file exists. You can delete it manually for refetch.
Learn more about the limitations of the GitHub API..
https://docs.github.com/ru/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#rate-limiting`,
        );
        process.exit(0);
    }
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
            const value = data?.stargazers_count;

            if (value) {
                stars.push({
                    title: item.githubId,
                    stars: value,
                });
            } else {
                throw Error(JSON.stringify(data));
            }
        }),
    ).then(() => {
        if (stars.length === 0) {
            console.error('Empty stars');
            process.exit(1);
        }
        fs.writeFileSync(path.join(cacheFilePath), JSON.stringify(stars), 'utf8');
    });
}

fetchVersions()
    .then(() => fetchStars())
    .catch((err) => {
        console.error(err.message);
        process.exit(1);
    });
