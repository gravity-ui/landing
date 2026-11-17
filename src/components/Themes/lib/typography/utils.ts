import {isBuiltInFontFamily as isCatalogFontFamily} from '@gravity-ui/themes/fonts';

import {GOOGLE_FONTS_DOWNLOAD_HOST} from './constants';

export const isBuiltInFontFamily = (fontType: string, mainFont: string | undefined) =>
    isCatalogFontFamily(fontType, mainFont ?? '');

export const createFontLinkImport = (fontLink: string) => {
    return `@import url('${fontLink}');`;
};

export const generateGoogleFontDownloadLink = (fontName?: string) => {
    if (!fontName) {
        return '';
    }

    return `${GOOGLE_FONTS_DOWNLOAD_HOST}?family=${fontName}&display=swap`;
};
