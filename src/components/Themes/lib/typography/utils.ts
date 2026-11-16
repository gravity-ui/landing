import {
    DEFAULT_FONT_FAMILIES,
    DEFAULT_FONT_FAMILY_SUGGESTIONS,
    GOOGLE_FONTS_DOWNLOAD_HOST,
} from './constants';

export const createFontLinkImport = (fontLink: string) => {
    return `@import url('${fontLink}');`;
};

export const generateGoogleFontDownloadLink = (fontName?: string) => {
    if (!fontName) {
        return '';
    }

    return `${GOOGLE_FONTS_DOWNLOAD_HOST}?family=${fontName}&display=swap`;
};

// Whether a font family of a theme is a Themer preset: a default family
// (`sans`, `monospace`) whose main font is one of its suggestions. Custom fonts
// need a loading link, which the gallery format does not store.
export const isBuiltInFontFamily = (fontType: string, mainFont: string | undefined) =>
    DEFAULT_FONT_FAMILIES.some(
        (family) =>
            family === fontType &&
            DEFAULT_FONT_FAMILY_SUGGESTIONS[family].fontSuggestions.some(
                ({title}) => title === mainFont,
            ),
    );
