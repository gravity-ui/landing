import {request} from 'undici';
import {libs} from '../src/libs.mjs';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const npmApiUrl = 'https://registry.npmjs.org/';

const versions = [];
Promise.all(
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
)
    .then(() => {
        if (versions.length === 0) {
            console.log('Empty versions');
            process.exit(1);
        }
        fs.writeFile(
            path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/versions.json'),
            JSON.stringify(versions),
            'utf8',
            () => {
                process.exit(0);
            },
        );
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
