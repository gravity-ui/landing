import {expect, test} from '@playwright/test';

test.describe('Home Page', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('should load successfully', async ({page}) => {
        // Wait for the page to be fully loaded
        await page.waitForLoadState('networkidle');

        // Check that the page title is present
        await expect(page).toHaveTitle(/Gravity UI/i);
    });

    test('should match screenshot', async ({page}) => {
        // Wait for the page to be fully loaded
        await page.waitForLoadState('networkidle');

        // Take a full page screenshot and compare
        // Mask "Recent updates" block as it contains dynamic content
        await expect(page).toHaveScreenshot('home-page.png', {
            fullPage: true,
            animations: 'disabled',
            mask: [page.locator('.gravity-ui-landing-custom-header__extra')],
        });
    });
});
