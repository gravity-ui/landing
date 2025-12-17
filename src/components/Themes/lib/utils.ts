import {
    DEFAULT_THEME as DEFAULT_GRAVITY_THEME,
    type UtilityColor,
    isUtilityColorToken,
} from '@gravity-ui/uikit-themer';
import capitalize from 'lodash/capitalize';

export const UTILITY_COLOR_PREFIX = '--g-color-';

export const getDefaultAdvancedColorValue = (colorName: UtilityColor) => {
    return {colorName: colorName, ...DEFAULT_GRAVITY_THEME['utilityColors'][colorName]};
};

export const getColorPrefix = (colorToken: string) => {
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
