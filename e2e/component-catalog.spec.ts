/* eslint-disable testing-library/prefer-screen-queries */
import {expect, test} from '@playwright/test';

test.describe('Published component catalog', () => {
    test('serves generated exact-version component documentation', async ({page}) => {
        const response = await page.goto('/components/uikit/avatar-stack');

        expect(response?.ok()).toBe(true);
        await expect(
            page.getByRole('heading', {level: 1, name: 'Avatar Stack'}).first(),
        ).toBeVisible();
        await expect(
            page.getByText(
                'This component is used for a stack of images with overlap over one another',
                {exact: false},
            ),
        ).toBeVisible();
    });

    test('discovers another component README from the exact package tag', async ({page}) => {
        const response = await page.goto('/components/uikit/table-column-setup');

        expect(response?.ok()).toBe(true);
        await expect(
            page.getByRole('heading', {level: 1, name: 'Table Column Setup'}).first(),
        ).toBeVisible();
    });
});
