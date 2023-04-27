import * as dotenv from 'dotenv';
import {chromium} from 'playwright';

import {libs} from '../src/libs.mjs';

dotenv.config();

function getOgImagePublicPath(id) {
    return `public/og-images/${id}.jpg`;
}

try {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: {width: 1200, height: 630},
        deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    for (let i = 0; i < libs.length; i++) {
        const {id} = libs[i];
        await page.goto(`http://localhost:3000/preview/${id}`, {waitUntil: 'networkidle'});
        await page.screenshot({path: getOgImagePublicPath(id)});
    }

    await browser.close();
} catch (err) {
    console.error(err);
}
