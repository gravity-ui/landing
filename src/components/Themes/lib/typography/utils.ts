import {TextProps} from '@gravity-ui/uikit';

import {TypographyOptions} from '../types';

import {
    DEFAULT_FONTS,
    GOOGLE_FONTS_DOWNLOAD_HOST,
    THEME_FONT_FAMILY_PREFIX,
    THEME_TEXT_PREFIX,
    TextVariants,
} from './constants';

export const createFontLinkImport = (fontLink: string) => {
    return `@import url('${fontLink}');`;
};

export const createFontFamilyVariable = (
    fontFamilyType: string,
    value: string,
    forPreview: boolean,
) => {
    const additionalFonts = DEFAULT_FONTS[fontFamilyType];

    return `${THEME_FONT_FAMILY_PREFIX}-${fontFamilyType}: '${value}'${
        additionalFonts ? `, ${additionalFonts}` : ''
    }${forPreview ? '!important' : ''};`;
};

export const createTextFontWeightVariable = (
    textVariant: TextVariants,
    value: number,
    forPreview: boolean,
) => {
    return `${THEME_TEXT_PREFIX}-${textVariant}-font-weight: ${value}${
        forPreview ? '!important' : ''
    };`;
};

export const createTextFontFamilyVariable = (
    textVariant: TextVariants,
    value: string,
    forPreview: boolean,
) => {
    return `${THEME_TEXT_PREFIX}-${textVariant}-font-family: var(${THEME_FONT_FAMILY_PREFIX}-${value})${
        forPreview ? '!important' : ''
    };`;
};

export const createTextFontSizeVariable = (
    variant: TextProps['variant'],
    value: number,
    forPreview: boolean,
) => {
    return `${THEME_TEXT_PREFIX}-${variant}-font-size: ${value}px${
        forPreview ? '!important' : ''
    };`;
};

export const createTextLineHeightVariable = (
    variant: TextProps['variant'],
    value: number,
    forPreview: boolean,
) => {
    return `${THEME_TEXT_PREFIX}-${variant}-line-height: ${value}px${
        forPreview ? '!important' : ''
    };`;
};

export const generateGoogleFontDownloadLink = (fontName: string) => {
    return `${GOOGLE_FONTS_DOWNLOAD_HOST}?family=${fontName}&display=swap`;
};

export const getCustomFontTypeKey = (
    key: string,
    customFontFamilyType: TypographyOptions['baseSetting']['customFontFamilyType'],
) => {
    return customFontFamilyType.find((setting) => setting.value === key)?.content.toLowerCase();
};
