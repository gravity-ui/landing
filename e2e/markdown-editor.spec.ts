import {expect, test} from '@playwright/test';

const SCROLL_OFFSET = 600;
// Matches `top` of the pinned toolbar in MarkdownEditor.scss.
const STICKY_TOP = 8;
// Pinned toolbar with its backdrop.
const STRIP_HEIGHT = 48;

test.describe('Markdown editor playground', () => {
    test('toolbar stays pinned while the page is scrolled', async ({page}) => {
        await page.goto('/libraries/markdown-editor/playground');
        await page.waitForLoadState('networkidle');

        const toolbar = page.locator('.g-md-editor-component__toolbar');
        await expect(toolbar).toBeVisible();

        const containerTop = await page.evaluate((offset) => {
            let container = document.querySelector('.g-md-editor-component')?.parentElement ?? null;
            while (container) {
                const {overflowY} = getComputedStyle(container);
                if (overflowY === 'auto' || overflowY === 'scroll') break;
                container = container.parentElement;
            }

            (container ?? document.documentElement).scrollTop = offset;

            return container ? container.getBoundingClientRect().top : 0;
        }, SCROLL_OFFSET);

        await expect
            .poll(async () => Math.round((await toolbar.boundingBox())?.y ?? -1))
            .toBe(Math.round(containerTop) + STICKY_TOP);

        await expect(page).toHaveScreenshot('toolbar-pinned.png', {
            animations: 'disabled',
            clip: {
                x: 0,
                y: containerTop,
                width: page.viewportSize()?.width ?? 0,
                height: STRIP_HEIGHT,
            },
        });
    });
});
