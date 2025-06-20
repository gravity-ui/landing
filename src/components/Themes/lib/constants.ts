import type {GravityTheme, Theme} from '@gravity-ui/uikit-themer';
import {
    DEFAULT_THEME as DEFAULT_GRAVITY_THEME,
    createInternalPrivateColorReference,
} from '@gravity-ui/uikit-themer';

import {BordersOptions, RadiusPresetName, RadiusValue} from './types';

export const THEME_BORDER_RADIUS_VARIABLE_PREFIX = '--g-border-radius';

export const DEFAULT_NEW_COLOR_TITLE = 'New color';

export const DEFAULT_BRAND_COLORS = [
    'rgb(203,255,92)',
    'rgb(0,41,255)',
    'rgb(49,78,60)',
    'rgb(108,145,201)',
    'rgb(255,190,92)',
    'rgb(255,92,92)',
] as const;

export const TEXT_CONTRAST_COLORS: Record<Theme, {white: string; black: string}> = {
    dark: {
        white: 'rgb(255, 255, 255)',
        black: 'rgba(0, 0, 0, 0.9)', // --g-color-private-black-900
    },
    light: {
        white: 'rgb(255, 255, 255)',
        black: 'rgba(0, 0, 0, 0.85)', // --g-color-private-black-850
    },
};

export const DEFAULT_PALETTE: GravityTheme['baseColors'] = {
    ...DEFAULT_GRAVITY_THEME.baseColors,
    brand: {
        light: {
            value: DEFAULT_BRAND_COLORS[0],
        },
        dark: {
            value: DEFAULT_BRAND_COLORS[0],
        },
    },
};

export const DEFAULT_PALETTE_TOKENS = new Set(Object.keys(DEFAULT_PALETTE));

export const DEFAULT_RADIUS: BordersOptions = {
    xs: '3',
    s: '5',
    m: '6',
    l: '8',
    xl: '10',
};

export const RADIUS_PRESETS: Record<RadiusPresetName, RadiusValue> = {
    [RadiusPresetName.Regular]: DEFAULT_RADIUS,
    [RadiusPresetName.Circled]: {
        xs: '10',
        s: '12',
        m: '14',
        l: '18',
        xl: '22',
    },
    [RadiusPresetName.Squared]: {
        xs: '0',
        s: '0',
        m: '0',
        l: '0',
        xl: '0',
    },
    [RadiusPresetName.Custom]: DEFAULT_RADIUS,
};

// Default colors mappings (values from gravity-ui styles)
// https://github.com/gravity-ui/uikit/tree/main/styles/themes
export const DEFAULT_COLORS: GravityTheme['utilityColors'] = {
    ...DEFAULT_GRAVITY_THEME.utilityColors,
    'base-brand': {
        light: {
            value: createInternalPrivateColorReference('brand', '550-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '550-solid'),
        },
    },
    'base-background': {
        light: {
            value: 'rgb(255,255,255)',
        },
        dark: {
            value: 'rgb(34,29,34)',
        },
    },
    'base-brand-hover': {
        light: {
            value: createInternalPrivateColorReference('brand', '600-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '650-solid'),
        },
    },
    'base-selection': {
        light: {
            value: createInternalPrivateColorReference('brand', '200'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '150'),
        },
    },
    'base-selection-hover': {
        light: {
            value: createInternalPrivateColorReference('brand', '300'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '200'),
        },
    },
    'line-brand': {
        light: {
            value: createInternalPrivateColorReference('brand', '600-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '600-solid'),
        },
    },
    'text-brand': {
        light: {
            value: createInternalPrivateColorReference('brand', '700-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '600-solid'),
        },
    },
    'text-brand-heavy': {
        light: {
            value: createInternalPrivateColorReference('brand', '700-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '700-solid'),
        },
    },
    'text-brand-contrast': {
        light: {
            value: TEXT_CONTRAST_COLORS.light.black,
        },
        dark: {
            value: TEXT_CONTRAST_COLORS.dark.black,
        },
    },
    'text-link': {
        light: {
            value: createInternalPrivateColorReference('brand', '600-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '550-solid'),
        },
    },
    'text-link-hover': {
        light: {
            value: createInternalPrivateColorReference('brand', '800-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('brand', '700-solid'),
        },
    },
    'text-link-visited': {
        light: {
            value: createInternalPrivateColorReference('purple', '550-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('purple', '700-solid'),
        },
    },
    'text-link-visited-hover': {
        light: {
            value: createInternalPrivateColorReference('purple', '800-solid'),
        },
        dark: {
            value: createInternalPrivateColorReference('purple', '850-solid'),
        },
    },
};

export const DEFAULT_THEME: GravityTheme = {
    ...DEFAULT_GRAVITY_THEME,
    baseColors: DEFAULT_PALETTE,
    utilityColors: DEFAULT_COLORS,
};

export type BrandPreset = {
    brandColor: typeof DEFAULT_BRAND_COLORS[number];
    utilityColors: Partial<GravityTheme['utilityColors']>;
};

export const BRAND_COLORS_PRESETS: BrandPreset[] = [
    {
        brandColor: 'rgb(203,255,92)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255,255,255)',
                },
                dark: {
                    value: 'rgb(34,29,34)',
                },
            },
            'base-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'base-brand-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '650-solid'),
                },
            },
            'base-selection': {
                light: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '150'),
                },
            },
            'base-selection-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '300'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
            },
            'line-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand-heavy': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-brand-contrast': {
                light: {
                    value: TEXT_CONTRAST_COLORS.light.black,
                },
                dark: {
                    value: TEXT_CONTRAST_COLORS.dark.black,
                },
            },
            'text-link': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'text-link-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-link-visited': {
                light: {
                    value: createInternalPrivateColorReference('purple', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '700-solid'),
                },
            },
            'text-link-visited-hover': {
                light: {
                    value: createInternalPrivateColorReference('purple', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '850-solid'),
                },
            },
        },
    },
    {
        brandColor: 'rgb(0,41,255)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255,255,255)',
                },
                dark: {
                    value: 'rgb(34,29,34)',
                },
            },
            'base-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'base-brand-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '650-solid'),
                },
            },
            'base-selection': {
                light: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '150'),
                },
            },
            'base-selection-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '300'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
            },
            'line-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand-heavy': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-brand-contrast': {
                light: {
                    value: TEXT_CONTRAST_COLORS.light.white,
                },
                dark: {
                    value: TEXT_CONTRAST_COLORS.dark.white,
                },
            },
            'text-link': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'text-link-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-link-visited': {
                light: {
                    value: createInternalPrivateColorReference('purple', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '700-solid'),
                },
            },
            'text-link-visited-hover': {
                light: {
                    value: createInternalPrivateColorReference('purple', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '850-solid'),
                },
            },
        },
    },
    {
        brandColor: 'rgb(49,78,60)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255,255,255)',
                },
                dark: {
                    value: 'rgb(34,29,34)',
                },
            },
            'base-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'base-brand-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '650-solid'),
                },
            },
            'base-selection': {
                light: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '150'),
                },
            },
            'base-selection-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '300'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
            },
            'line-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand-heavy': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-brand-contrast': {
                light: {
                    value: TEXT_CONTRAST_COLORS.light.white,
                },
                dark: {
                    value: TEXT_CONTRAST_COLORS.dark.white,
                },
            },
            'text-link': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'text-link-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-link-visited': {
                light: {
                    value: createInternalPrivateColorReference('purple', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '700-solid'),
                },
            },
            'text-link-visited-hover': {
                light: {
                    value: createInternalPrivateColorReference('purple', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '850-solid'),
                },
            },
        },
    },
    {
        brandColor: 'rgb(108,145,201)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255,255,255)',
                },
                dark: {
                    value: 'rgb(34,29,34)',
                },
            },
            'base-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'base-brand-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '650-solid'),
                },
            },
            'base-selection': {
                light: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '150'),
                },
            },
            'base-selection-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '300'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
            },
            'line-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand-heavy': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-brand-contrast': {
                light: {
                    value: TEXT_CONTRAST_COLORS.light.white,
                },
                dark: {
                    value: TEXT_CONTRAST_COLORS.dark.white,
                },
            },
            'text-link': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'text-link-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-link-visited': {
                light: {
                    value: createInternalPrivateColorReference('purple', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '700-solid'),
                },
            },
            'text-link-visited-hover': {
                light: {
                    value: createInternalPrivateColorReference('purple', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '850-solid'),
                },
            },
        },
    },
    {
        brandColor: 'rgb(255,190,92)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255,255,255)',
                },
                dark: {
                    value: 'rgb(34,29,34)',
                },
            },
            'base-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'base-brand-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '650-solid'),
                },
            },
            'base-selection': {
                light: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '150'),
                },
            },
            'base-selection-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '300'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
            },
            'line-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand-heavy': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-brand-contrast': {
                light: {
                    value: TEXT_CONTRAST_COLORS.light.black,
                },
                dark: {
                    value: TEXT_CONTRAST_COLORS.dark.black,
                },
            },
            'text-link': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'text-link-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-link-visited': {
                light: {
                    value: createInternalPrivateColorReference('purple', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '700-solid'),
                },
            },
            'text-link-visited-hover': {
                light: {
                    value: createInternalPrivateColorReference('purple', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '850-solid'),
                },
            },
        },
    },
    {
        brandColor: 'rgb(255,92,92)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255,255,255)',
                },
                dark: {
                    value: 'rgb(34,29,34)',
                },
            },
            'base-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'base-brand-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '650-solid'),
                },
            },
            'base-selection': {
                light: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '150'),
                },
            },
            'base-selection-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '300'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '200'),
                },
            },
            'line-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
            },
            'text-brand-heavy': {
                light: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-brand-contrast': {
                light: {
                    value: TEXT_CONTRAST_COLORS.light.white,
                },
                dark: {
                    value: TEXT_CONTRAST_COLORS.dark.white,
                },
            },
            'text-link': {
                light: {
                    value: createInternalPrivateColorReference('brand', '600-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '550-solid'),
                },
            },
            'text-link-hover': {
                light: {
                    value: createInternalPrivateColorReference('brand', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('brand', '700-solid'),
                },
            },
            'text-link-visited': {
                light: {
                    value: createInternalPrivateColorReference('purple', '550-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '700-solid'),
                },
            },
            'text-link-visited-hover': {
                light: {
                    value: createInternalPrivateColorReference('purple', '800-solid'),
                },
                dark: {
                    value: createInternalPrivateColorReference('purple', '850-solid'),
                },
            },
        },
    },
];
