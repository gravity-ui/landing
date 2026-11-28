import {Inter} from 'next/font/google';

/**
 * Self-hosted via next/font instead of a remote stylesheet.
 *
 * Inter used to be pulled in by two CSS `@import url(https://fonts.googleapis.com/...)`
 * statements — one in vendors.scss and one inside @gravity-ui/uikit/styles/fonts.css.
 * A CSS @import is only discovered after the importing stylesheet has been downloaded and
 * parsed, so the critical path was serialized:
 * document -> app CSS -> fonts.googleapis.com -> fonts.gstatic.com, with a DNS + TLS
 * handshake for each third-party origin.
 *
 * next/font downloads the files at build time and serves them from our own origin with a
 * preload hint, which removes both extra origins and both extra round trips.
 */
// eslint-disable-next-line new-cap -- next/font loaders are capitalised factory functions
export const inter = Inter({
    // latin-ext covers accented characters used by the pt/fr/de locales; cyrillic covers ru.
    // Korean, Japanese and Chinese are not covered by Inter and fall back to system fonts,
    // exactly as before.
    subsets: ['latin', 'latin-ext', 'cyrillic'],
    weight: ['200', '400', '600'],
    display: 'swap',
});
