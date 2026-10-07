import {RefObject, useEffect, useState} from 'react';

const TOOLBAR_SELECTOR = '.g-md-editor-component__toolbar';

// Matches `top` of the pinned toolbar in MarkdownEditor.scss.
const STICKY_TOP = 8;

const getScrollContainer = (element: HTMLElement): HTMLElement | null => {
    for (let current = element.parentElement; current; current = current.parentElement) {
        const {overflowY} = getComputedStyle(current);
        if (overflowY === 'auto' || overflowY === 'scroll') {
            return current;
        }
    }

    return null;
};

// Reports whether the editor toolbar has reached its pinned position.
//
// The editor measures its own toolbar against the window, while the page scrolls inside a
// container, so `stickyToolbar` is disabled and the state is measured against that container.
// The container is a scrollbar viewport created after the editor mounts, and the toolbar element
// is replaced on every mode change, so both are resolved on each check.
export function useStickyToolbar(rootRef: RefObject<HTMLElement>) {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const root = rootRef.current;

        if (!root) {
            return undefined;
        }

        let container: HTMLElement | null = null;
        let toolbar: HTMLElement | null = null;
        let frame: number | null = null;

        const check = () => {
            frame = null;

            if (!container?.isConnected) {
                container = getScrollContainer(root);
            }

            if (!toolbar?.isConnected) {
                toolbar = root.querySelector<HTMLElement>(TOOLBAR_SELECTOR);
            }

            if (!toolbar) {
                return;
            }

            const containerTop = container ? container.getBoundingClientRect().top : 0;

            setSticky(toolbar.getBoundingClientRect().top <= containerTop + STICKY_TOP);
        };

        const schedule = () => {
            if (frame === null) {
                frame = requestAnimationFrame(check);
            }
        };

        check();
        // Scroll does not bubble, so the capture phase is the only way to see it on the window.
        window.addEventListener('scroll', schedule, {capture: true, passive: true});
        window.addEventListener('resize', schedule);

        return () => {
            if (frame !== null) {
                cancelAnimationFrame(frame);
            }
            window.removeEventListener('scroll', schedule, {capture: true});
            window.removeEventListener('resize', schedule);
        };
    }, [rootRef]);

    return sticky;
}
