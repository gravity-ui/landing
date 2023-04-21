import puppeteer from 'puppeteer';

import * as dotenv from 'dotenv';

import { libs } from '../src/libs.mjs';

dotenv.config();

try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    for (let i = 0; i < libs.length; i++) {
        const { id } = libs[i];
        await page.goto(`http://localhost:3000/preview/${id}`, { waitUntil: 'networkidle0' });
        await page.setViewport({ width: 1200, height: 630 });
        await page.screenshot({ path: `public/og-images/${id}.jpg` })
    }

    await browser.close();
} catch (err) {
    console.error(err);
}
