import {PutObjectCommand, S3} from '@aws-sdk/client-s3';
import * as dotenv from 'dotenv';
import {chromium} from 'playwright';

import {libs} from '../src/libs.mjs';

dotenv.config();

const s3Client = new S3({
    endpoint: 'https://storage.yandexcloud.net/',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: 'ru-central1-a',
});

const BUCKET_NAME = 'gravity-assets';

try {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: {width: 1200, height: 630},
    });
    const page = await context.newPage();

    for (let i = 0; i < libs.length; i++) {
        const {id} = libs[i];
        await page.goto(`https://gravity-ui.com/libraries/${id}/preview`, {
            waitUntil: 'networkidle',
        });
        const buffer = await page.screenshot();

        const uploadParams = {
            Bucket: BUCKET_NAME,
            Key: `og/${id}.jpg`,
            ContentType: 'image/jpeg',
            Body: buffer,
        };

        try {
            await s3Client.send(new PutObjectCommand(uploadParams));
        } catch (err) {
            console.error(err);
        }
    }

    await browser.close();
} catch (err) {
    console.error(err);
}
