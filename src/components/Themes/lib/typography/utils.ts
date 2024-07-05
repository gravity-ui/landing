import {TextProps} from '@gravity-ui/uikit';

import {
    DEFAULT_FONTS,
    DefaultFontFamilyType,
    THEME_FONT_FAMILY_PREFIX,
    THEME_TEXT_PREFIX,
    TextVariants,
} from './constants';

export const createFontLinkImport = (fontLink: string) => {
    return `@import(${fontLink});`;
};

export const createFontFamilyVariable = (
    fontFamilyType: DefaultFontFamilyType,
    value: string,
    forPreview: boolean,
) => {
    return `${THEME_FONT_FAMILY_PREFIX}-${fontFamilyType}: '${value}', ${
        DEFAULT_FONTS[fontFamilyType]
    } ${forPreview ? '!important' : ''};`;
};

export const createTextFontWeightVariable = (
    textVariant: TextVariants,
    value: number,
    forPreview: boolean,
) => {
    return `${THEME_TEXT_PREFIX}-${textVariant}-font-weight: ${value} ${
        forPreview ? '!important' : ''
    };`;
};

export const createTextFontFamilyVariable = (
    textVariant: TextVariants,
    value: DefaultFontFamilyType,
    forPreview: boolean,
) => {
    return `${THEME_TEXT_PREFIX}-${textVariant}-font-family: var(${THEME_FONT_FAMILY_PREFIX}-${value}) ${
        forPreview ? '!important' : ''
    };`;
};

export const createTextFontSizeVariable = (
    variant: TextProps['variant'],
    value: number,
    forPreview: boolean,
) => {
    return `${THEME_TEXT_PREFIX}-${variant}-font-size: ${value}px ${
        forPreview ? '!important' : ''
    };`;
};

export const createTextLineHeightVariable = (
    variant: TextProps['variant'],
    value: number,
    forPreview: boolean,
) => {
    return `${THEME_TEXT_PREFIX}-${variant}-line-height: ${value}px ${
        forPreview ? '!important' : ''
    };`;
};
