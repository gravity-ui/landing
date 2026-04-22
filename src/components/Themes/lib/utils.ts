import {
    DEFAULT_THEME as DEFAULT_GRAVITY_THEME,
    type UtilityColor,
    type UtilityIllustrationColor,
    isUtilityColorToken,
    isUtilityIllustrationColorToken,
} from '@gravity-ui/uikit-themer';
import capitalize from 'lodash/capitalize';

export const UTILITY_COLOR_PREFIX = '--g-color-';
export const UTILITY_ILLUSTRATION_COLOR_PREFIX = '--gil-color-';

export const getDefaultAdvancedColorValue = (colorName: UtilityColor) => {
    return {colorName: colorName, ...DEFAULT_GRAVITY_THEME['utilityColors'][colorName]};
};

export const getDefaultIllustrationColorValue = (colorName: UtilityIllustrationColor) => {
    return {
        colorName: colorName,
        ...DEFAULT_GRAVITY_THEME['libraries']?.['illustrations']?.[colorName],
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
