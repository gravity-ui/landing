import {
    DEFAULT_THEME as DEFAULT_GRAVITY_THEME,
    IllustrationColors,
    type UtilityColor,
    type UtilityIllustrationColor,
    createInternalPrivateColorReference,
    isUtilityColorToken,
    isUtilityIllustrationColorToken,
} from '@gravity-ui/uikit-themer';
import capitalize from 'lodash/capitalize';

export const UTILITY_COLOR_PREFIX = '--g-color-';
export const UTILITY_ILLUSTRATION_COLOR_PREFIX = '--gil-color-';

export const getDefaultAdvancedColorValue = (colorName: UtilityColor) => {
    return {colorName: colorName, ...DEFAULT_GRAVITY_THEME['utilityColors'][colorName]};
};

export const DEFAULT_BRAND_ILLUSTRATION_COLORS: IllustrationColors = {
    'object-base': {
        dark: {value: createInternalPrivateColorReference('brand', '550-solid')},
        light: {value: createInternalPrivateColorReference('brand', '550-solid')},
    },
    'object-hightlight': {
        dark: {value: createInternalPrivateColorReference('brand', '700-solid')},
        light: {value: createInternalPrivateColorReference('brand', '350-solid')},
    },
    'object-accent-heavy': {
        dark: {value: createInternalPrivateColorReference('brand', '350-solid')},
        light: {value: createInternalPrivateColorReference('brand', '650-solid')},
    },
    'object-accent-light': {
        dark: {value: createInternalPrivateColorReference('white', '1000-solid')},
        light: {value: createInternalPrivateColorReference('white', '1000-solid')},
    },
    'object-danger': {
        dark: {value: createInternalPrivateColorReference('red', '550-solid')},
        light: {value: createInternalPrivateColorReference('red', '550-solid')},
    },
    'shadow-over-object': {
        dark: {value: createInternalPrivateColorReference('brand', '500-solid')},
        light: {value: createInternalPrivateColorReference('brand', '650-solid')},
    },
    'background-lines': {
        dark: {value: createInternalPrivateColorReference('brand', '650-solid')},
        light: {value: createInternalPrivateColorReference('brand', '650-solid')},
    },
    'background-shapes': {
        dark: {value: createInternalPrivateColorReference('brand', '200-solid')},
        light: {value: createInternalPrivateColorReference('brand', '100-solid')},
    },
};

export const getDefaultIllustrationColorValue = (colorName: UtilityIllustrationColor) => {
    return {
        colorName: colorName,
        ...DEFAULT_BRAND_ILLUSTRATION_COLORS[colorName],
    };
};

export const getColorPrefix = (colorToken: string) => {
    if (isUtilityIllustrationColorToken(colorToken)) {
        return UTILITY_ILLUSTRATION_COLOR_PREFIX;
    }

    if (isUtilityColorToken(colorToken)) {
        return UTILITY_COLOR_PREFIX;
    }

    return '';
};

export const getColorName = (colorToken: string) => {
    if (DEFAULT_GRAVITY_THEME['baseColors'][colorToken]) {
        return capitalize(colorToken);
    }

    if (colorToken === 'brand') {
        return 'Brand Color';
    }

    return colorToken;
};
