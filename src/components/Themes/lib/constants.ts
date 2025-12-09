import type {BordersOptions, GravityTheme} from '@gravity-ui/uikit-themer';
import {
    DEFAULT_THEME as DEFAULT_GRAVITY_THEME,
    createInternalPrivateColorReference,
} from '@gravity-ui/uikit-themer';

import {type AdvanceColors, RadiusPresetName} from './types';
import {DEFAULT_FONT_FAMILY_SETTINGS} from './typography/constants';
import {getDefaultAdvancedColorValue} from './utils';

export const THEME_BORDER_RADIUS_VARIABLE_PREFIX = '--g-border-radius';

export const DEFAULT_NEW_COLOR_TITLE = 'New color';

export const DEFAULT_BRAND_COLORS = [
    'rgb(203 255 92)',
    'rgb(0 41 255)',
    'rgb(49 78 60)',
    'rgb(108 145 201)',
    'rgb(255 190 92)',
    'rgb(255 92 92)',
] as const;

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
    xs: '3px',
    s: '5px',
    m: '6px',
    l: '8px',
    xl: '10px',
};

export const RADIUS_PRESETS: Record<RadiusPresetName, BordersOptions> = {
    [RadiusPresetName.Regular]: DEFAULT_RADIUS,
    [RadiusPresetName.Circled]: {
        xs: '10px',
        s: '12px',
        m: '14px',
        l: '18px',
        xl: '22px',
    },
    [RadiusPresetName.Squared]: {
        xs: '0px',
        s: '0px',
        m: '0px',
        l: '0px',
        xl: '0px',
    },
    [RadiusPresetName.Custom]: DEFAULT_RADIUS,
};

export const DEFAULT_ADVANCED_COLORS: AdvanceColors = {
    texts: {
        base: [
            getDefaultAdvancedColorValue('text-primary'),
            getDefaultAdvancedColorValue('text-complementary'),
            getDefaultAdvancedColorValue('text-secondary'),
            getDefaultAdvancedColorValue('text-hint'),
        ],
        semantic: [
            getDefaultAdvancedColorValue('text-info'),
            getDefaultAdvancedColorValue('text-info-heavy'),
            getDefaultAdvancedColorValue('text-positive'),
            getDefaultAdvancedColorValue('text-positive-heavy'),
            getDefaultAdvancedColorValue('text-warning'),
            getDefaultAdvancedColorValue('text-warning-heavy'),
            getDefaultAdvancedColorValue('text-danger'),
            getDefaultAdvancedColorValue('text-danger-heavy'),
            getDefaultAdvancedColorValue('text-utility'),
            getDefaultAdvancedColorValue('text-utility-heavy'),
            getDefaultAdvancedColorValue('text-misc'),
            getDefaultAdvancedColorValue('text-misc-heavy'),
        ],
        brand: [
            getDefaultAdvancedColorValue('text-brand'),
            getDefaultAdvancedColorValue('text-link'),
            getDefaultAdvancedColorValue('text-link-hover'),
            getDefaultAdvancedColorValue('text-link-visited'),
            getDefaultAdvancedColorValue('text-link-visited-hover'),
        ],

        'always-dark': [
            getDefaultAdvancedColorValue('text-dark-primary'),
            getDefaultAdvancedColorValue('text-dark-complementary'),
            getDefaultAdvancedColorValue('text-dark-secondary'),
            getDefaultAdvancedColorValue('text-dark-hint'),
        ],
        'always-light': [
            getDefaultAdvancedColorValue('text-light-primary'),
            getDefaultAdvancedColorValue('text-light-complementary'),
            getDefaultAdvancedColorValue('text-light-secondary'),
            getDefaultAdvancedColorValue('text-light-hint'),
        ],
        'main-inversion': [
            getDefaultAdvancedColorValue('text-inverted-primary'),
            getDefaultAdvancedColorValue('text-inverted-complementary'),
            getDefaultAdvancedColorValue('text-inverted-secondary'),
            getDefaultAdvancedColorValue('text-inverted-hint'),
        ],
    },
    backgrounds: {
        basic: [
            getDefaultAdvancedColorValue('base-background'),
            getDefaultAdvancedColorValue('base-generic'),
            getDefaultAdvancedColorValue('base-generic-hover'),
            getDefaultAdvancedColorValue('base-generic-medium'),
            getDefaultAdvancedColorValue('base-generic-medium-hover'),
            getDefaultAdvancedColorValue('base-generic-accent'),
            getDefaultAdvancedColorValue('base-generic-accent-disabled'),
            getDefaultAdvancedColorValue('base-generic-ultralight'),
            getDefaultAdvancedColorValue('base-simple-hover'),
            getDefaultAdvancedColorValue('base-simple-hover-solid'),
        ],
        brand: [
            getDefaultAdvancedColorValue('base-brand'),
            getDefaultAdvancedColorValue('base-brand-hover'),
            getDefaultAdvancedColorValue('base-selection'),
            getDefaultAdvancedColorValue('base-selection-hover'),
        ],
        'light-semantic': [
            getDefaultAdvancedColorValue('base-info-light'),
            getDefaultAdvancedColorValue('base-info-light-hover'),
            getDefaultAdvancedColorValue('base-positive-light'),
            getDefaultAdvancedColorValue('base-positive-light-hover'),
            getDefaultAdvancedColorValue('base-warning-light'),
            getDefaultAdvancedColorValue('base-warning-light-hover'),
            getDefaultAdvancedColorValue('base-danger-light'),
            getDefaultAdvancedColorValue('base-danger-light-hover'),
            getDefaultAdvancedColorValue('base-utility-light'),
            getDefaultAdvancedColorValue('base-utility-light-hover'),
            getDefaultAdvancedColorValue('base-neutral-light'),
            getDefaultAdvancedColorValue('base-neutral-light-hover'),
            getDefaultAdvancedColorValue('base-misc-light'),
            getDefaultAdvancedColorValue('base-misc-light-hover'),
        ],
        'medium-semantic': [
            getDefaultAdvancedColorValue('base-info-medium'),
            getDefaultAdvancedColorValue('base-info-medium-hover'),
            getDefaultAdvancedColorValue('base-positive-medium'),
            getDefaultAdvancedColorValue('base-positive-medium-hover'),
            getDefaultAdvancedColorValue('base-warning-medium'),
            getDefaultAdvancedColorValue('base-warning-medium-hover'),
            getDefaultAdvancedColorValue('base-danger-medium'),
            getDefaultAdvancedColorValue('base-danger-medium-hover'),
            getDefaultAdvancedColorValue('base-utility-medium'),
            getDefaultAdvancedColorValue('base-utility-medium-hover'),
            getDefaultAdvancedColorValue('base-neutral-medium'),
            getDefaultAdvancedColorValue('base-neutral-medium-hover'),
            getDefaultAdvancedColorValue('base-misc-medium'),
            getDefaultAdvancedColorValue('base-misc-medium-hover'),
        ],
        'heavy-semantic': [
            getDefaultAdvancedColorValue('base-info-heavy'),
            getDefaultAdvancedColorValue('base-info-heavy-hover'),
            getDefaultAdvancedColorValue('base-positive-heavy'),
            getDefaultAdvancedColorValue('base-positive-heavy-hover'),
            getDefaultAdvancedColorValue('base-warning-heavy'),
            getDefaultAdvancedColorValue('base-warning-heavy-hover'),
            getDefaultAdvancedColorValue('base-danger-heavy'),
            getDefaultAdvancedColorValue('base-danger-heavy-hover'),
            getDefaultAdvancedColorValue('base-utility-heavy'),
            getDefaultAdvancedColorValue('base-utility-heavy-hover'),
            getDefaultAdvancedColorValue('base-neutral-heavy'),
            getDefaultAdvancedColorValue('base-neutral-heavy-hover'),
            getDefaultAdvancedColorValue('base-misc-heavy'),
            getDefaultAdvancedColorValue('base-misc-heavy-hover'),
        ],
        'always-light': [
            getDefaultAdvancedColorValue('base-light'),
            getDefaultAdvancedColorValue('base-light-hover'),
            getDefaultAdvancedColorValue('base-light-simple-hover'),
            getDefaultAdvancedColorValue('base-light-disabled'),
            getDefaultAdvancedColorValue('base-light-accent-disabled'),
        ],
        floats: [
            getDefaultAdvancedColorValue('base-float'),
            getDefaultAdvancedColorValue('base-float-hover'),
            getDefaultAdvancedColorValue('base-float-medium'),
            getDefaultAdvancedColorValue('base-float-heavy'),
            getDefaultAdvancedColorValue('base-float-accent'),
            getDefaultAdvancedColorValue('base-float-accent-hover'),
            getDefaultAdvancedColorValue('base-modal'),
        ],
    },
    lines: {
        general: [
            getDefaultAdvancedColorValue('line-generic'),
            getDefaultAdvancedColorValue('line-generic-hover'),
            getDefaultAdvancedColorValue('line-generic-active'),
            getDefaultAdvancedColorValue('line-generic-accent'),
            getDefaultAdvancedColorValue('line-generic-accent-hover'),
            getDefaultAdvancedColorValue('line-generic-solid'),
        ],
        semantic: [
            getDefaultAdvancedColorValue('line-info'),
            getDefaultAdvancedColorValue('line-positive'),
            getDefaultAdvancedColorValue('line-warning'),
            getDefaultAdvancedColorValue('line-danger'),
            getDefaultAdvancedColorValue('line-utility'),
            getDefaultAdvancedColorValue('line-misc'),
        ],
        'always-light': [getDefaultAdvancedColorValue('line-light')],
    },
    effects: {
        other: [
            getDefaultAdvancedColorValue('sfx-veil'),
            getDefaultAdvancedColorValue('sfx-shadow'),
            getDefaultAdvancedColorValue('sfx-shadow-heavy'),
            getDefaultAdvancedColorValue('sfx-shadow-light'),
            getDefaultAdvancedColorValue('sfx-fade'),
        ],
    },
    misc: {
        scroll: [
            getDefaultAdvancedColorValue('scroll-track'),
            getDefaultAdvancedColorValue('scroll-handle'),
            getDefaultAdvancedColorValue('scroll-handle-hover'),
            getDefaultAdvancedColorValue('scroll-corner'),
        ],
        axes: [getDefaultAdvancedColorValue('infographics-axis')],
        tooltips: [getDefaultAdvancedColorValue('infographics-tooltip-bg')],
    },
    'basic-palette': {
        'base-color': [
            ...Object.entries(DEFAULT_GRAVITY_THEME.baseColors).map(([colorName, colorValue]) => ({
                colorName,
                ...colorValue,
            })),
        ],
        'extra-color': [],
    },
    'brand-summary': {
        'brand-palette': [
            getDefaultAdvancedColorValue('base-background'),
            getDefaultAdvancedColorValue('text-brand-contrast'),
            {
                colorName: 'brand',
                ...DEFAULT_GRAVITY_THEME.baseColors.brand,
            },
        ],
        'advanced-brand-palette': [
            getDefaultAdvancedColorValue('base-brand-hover'),
            getDefaultAdvancedColorValue('text-brand'),
            getDefaultAdvancedColorValue('text-brand-heavy'),
            getDefaultAdvancedColorValue('line-brand'),
            getDefaultAdvancedColorValue('base-selection'),
            getDefaultAdvancedColorValue('base-selection-hover'),
        ],
        'additional-colors': [
            getDefaultAdvancedColorValue('text-link'),
            getDefaultAdvancedColorValue('text-link-hover'),
            getDefaultAdvancedColorValue('text-link-visited'),
            getDefaultAdvancedColorValue('text-link-visited-hover'),
        ],
    },
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
            value: 'rgb(255, 255, 255)',
        },
        dark: {
            value: 'rgb(34, 29, 34)',
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
    typography: {
        ...DEFAULT_GRAVITY_THEME.typography,
        fontFamilies: DEFAULT_FONT_FAMILY_SETTINGS,
    },
};

export type BrandPreset = {
    brandColor: (typeof DEFAULT_BRAND_COLORS)[number];
    utilityColors: Partial<GravityTheme['utilityColors']>;
};

export const BRAND_COLORS_PRESETS: BrandPreset[] = [
    {
        brandColor: 'rgb(203 255 92)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255, 255, 255)',
                },
                dark: {
                    value: 'rgb(34, 29, 34)',
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
        brandColor: 'rgb(0 41 255)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255, 255, 255)',
                },
                dark: {
                    value: 'rgb(34, 29, 34)',
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
        brandColor: 'rgb(49 78 60)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255, 255, 255)',
                },
                dark: {
                    value: 'rgb(34, 29, 34)',
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
        brandColor: 'rgb(108 145 201)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255 255 255)',
                },
                dark: {
                    value: 'rgb(34 29 34)',
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
            // 'text-brand-contrast': {
            //     light: {
            //         value: TEXT_CONTRAST_COLORS.light.white,
            //     },
            //     dark: {
            //         value: TEXT_CONTRAST_COLORS.dark.white,
            //     },
            // },
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
        brandColor: 'rgb(255 190 92)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255 255 255)',
                },
                dark: {
                    value: 'rgb(34 29 34)',
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
        brandColor: 'rgb(255 92 92)',
        utilityColors: {
            'base-background': {
                light: {
                    value: 'rgb(255 255 255)',
                },
                dark: {
                    value: 'rgb(34 29 34)',
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
