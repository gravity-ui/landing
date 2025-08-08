import {GOOGLE_FONTS_DOWNLOAD_HOST} from './constants';

export const createFontLinkImport = (fontLink: string) => {
    return `@import url('${fontLink}');`;
};

export const generateGoogleFontDownloadLink = (fontName?: string) => {
    if (!fontName) {
        return '';
    }

    return `${GOOGLE_FONTS_DOWNLOAD_HOST}?family=${fontName}&display=swap`;
};
