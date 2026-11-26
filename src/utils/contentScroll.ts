import {CONTENT_WRAPPER_ID} from '../constants';

/**
 * The page scrolls inside `Layout`'s wrapper, not on `<body>`. That wrapper is
 * wrapped in `CustomScrollbar`, which hands the scrolling over to an inner
 * overlayscrollbars viewport and leaves the host with `overflow: hidden` — so
 * reading `scrollTop` or locking overflow on the `CONTENT_WRAPPER_ID` element
 * itself is a no-op. Resolve the element that actually scrolls instead.
 */
export function getContentScrollElement(): HTMLElement | null {
    const host = document.getElementById(CONTENT_WRAPPER_ID);
    if (!host) {
        return null;
    }
    return host.querySelector<HTMLElement>('[data-overlayscrollbars-viewport]') ?? host;
}
