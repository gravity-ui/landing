import {expect, test} from '@playwright/test';

test.describe('Icons Page', () => {
    // Opening an icon only changes the `?icon=` query. It must not depend on the server:
    // a failed `_next/data` request makes the Next router fall back to a full page reload.
    test('opens icon dialog without server round trip or page reload', async ({page}) => {
        await page.goto('/icons');
        await page.waitForLoadState('networkidle');

        let dataRequests = 0;
        await page.route('**/_next/data/**', (route) => {
            dataRequests++;
            return route.abort();
        });
        await page.evaluate(() => {
            (window as unknown as {__noReload: boolean}).__noReload = true;
        });

        await page.locator('.gravity-ui-landing-icon-button').nth(9).click();

        await expect(page).toHaveURL(/\/icons\?icon=\w+/);
        await expect(page.locator('text=React component')).toBeVisible();

        await page.keyboard.press('Escape');
        await expect(page).toHaveURL(/\/icons$/);

        expect(
            await page.evaluate(() => (window as unknown as {__noReload?: boolean}).__noReload),
        ).toBe(true);
        expect(dataRequests).toBe(0);
    });
});
