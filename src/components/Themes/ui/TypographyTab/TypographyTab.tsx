import {FormRow} from '@gravity-ui/components';
import {Plus, Sliders} from '@gravity-ui/icons';
import {
    Button,
    Card,
    Flex,
    Icon,
    Select,
    Slider,
    Text,
    TextInput,
    TextProps,
    ThemeProvider,
} from '@gravity-ui/uikit';
import React, {useState} from 'react';

import {block} from '../../../../utils';
import {SelectableCard} from '../../../SelectableCard/SelectableCard';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';
import {
    DEFAULT_FONTS,
    DefaultFontFamilyType,
    FONT_WEIGHTS,
    TextVariants,
} from '../../lib/typography/constants';
import {ExportThemeSection} from '../ExportThemeSection/ExportThemeSection';

import './TypographyTab.scss';
import './base-fonts.scss';

const b = block('typography-tab');

const TYPOGRAPHY_STYLES_PREVIEW: {
    title: string;
    variants: {title: string; variant: TextProps['variant']}[];
}[] = [
    {
        title: 'Caption',
        variants: [
            {
                title: 'Caption 1',
                variant: 'caption-1',
            },
            {
                title: 'Caption 2',
                variant: 'caption-2',
            },
        ],
    },
    {
        title: 'Body Text',
        variants: [
            {
                title: 'Body 1 Short',
                variant: 'body-short',
            },
            {
                title: 'Body 1',
                variant: 'body-1',
            },
            {
                title: 'Body 2',
                variant: 'body-2',
            },
            {
                title: 'Body 3',
                variant: 'body-3',
            },
        ],
    },
    {
        title: 'Code',
        variants: [
            {
                title: 'Code 1',
                variant: 'code-1',
            },
            {
                title: 'Code 1 Inline',
                variant: 'code-inline-1',
            },
            {
                title: 'Code 2',
                variant: 'code-2',
            },
            {
                title: 'Code 2 Inline',
                variant: 'code-inline-2',
            },
            {
                title: 'Code 3',
                variant: 'code-3',
            },
            {
                title: 'Code 3 Inline',
                variant: 'code-inline-3',
            },
        ],
    },
    {
        title: 'Subheader',
        variants: [
            {
                title: 'Subheader 1',
                variant: 'subheader-1',
            },
            {
                title: 'Subheader 2',
                variant: 'subheader-2',
            },
            {
                title: 'Subheader 3',
                variant: 'subheader-3',
            },
        ],
    },
    {
        title: 'Header',
        variants: [
            {
                title: 'Header 1',
                variant: 'header-1',
            },
            {
                title: 'Header 2',
                variant: 'header-2',
            },
        ],
    },
    {
        title: 'Display',
        variants: [
            {
                title: 'Display 1',
                variant: 'display-1',
            },
            {
                title: 'Display 2',
                variant: 'display-2',
            },
            {
                title: 'Display 3',
                variant: 'display-3',
            },
            {
                title: 'Display 4',
                variant: 'display-4',
            },
        ],
    },
];

const FONT_FAMILIES_OPTION: {
    name: string;
    variableName: DefaultFontFamilyType;
    fonts: {title: string; key: string; link: string}[];
}[] = [
    {
        name: 'Sans Font Family',
        variableName: DefaultFontFamilyType.Sans,
        fonts: [
            {
                title: 'Inter',
                key: 'inter',
                link: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
            },
            {
                title: 'Merriweather',
                key: 'merriweather',
                link: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
            },
            {
                title: 'Titillium Web',
                key: 'titillium_web',
                link: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap',
            },
        ],
    },
    {
        name: 'Monospace Font Family',
        variableName: DefaultFontFamilyType.Monospace,
        fonts: [
            {
                title: 'Roboto Mono',
                key: 'roboto_mono',
                link: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap',
            },
            {
                title: 'Ubuntu Mono',
                key: 'ubuntu_mono',
                link: 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            },
            {
                title: 'IBM Plex Mono',
                key: 'ibm_plex_mono',
                link: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
            },
        ],
    },
];

const FontFamily = () => {
    const {
        typography: {
            baseSetting: {fontFamily},
        },
    } = useThemeCreator();

    const {updateFontFamily} = useThemeCreatorMethods();

    return (
        <Flex direction="column" alignItems="flex-start" gap={5} width="100%">
            <Text variant="display-2">Font Families</Text>
            {FONT_FAMILIES_OPTION.map((option) => (
                <Flex direction="column" gap={5} style={{width: '100%'}} key={option.variableName}>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Text variant="body-3">{option.name}</Text>

                        <Flex gap={4}>
                            {option.fonts.map((font) => (
                                <SelectableCard
                                    key={font.key}
                                    className={b('font-card')}
                                    selected={fontFamily[option.variableName].title === font.title}
                                    text={font.title}
                                    textProps={{
                                        variant: 'body-3',
                                        style: {
                                            fontFamily: [
                                                font.title,
                                                ...DEFAULT_FONTS[option.variableName],
                                            ].join(', '),
                                        },
                                    }}
                                    pureText
                                    onClick={() => {
                                        updateFontFamily({
                                            fontType: option.variableName,
                                            value: {
                                                title: font.title,
                                                key: font.key,
                                                link: font.link,
                                            },
                                        });
                                    }}
                                />
                            ))}
                            <SelectableCard
                                key={'custom'}
                                className={b('font-card')}
                                selected={false}
                                text="Custom (disable)"
                                textProps={{
                                    variant: 'body-3',
                                }}
                                pureText
                                onClick={() => {
                                    //TODO add logic
                                }}
                            />
                        </Flex>
                    </Flex>
                    {/*//TODO add logic*/}
                    {/*{selectedFonts[option.variableName] === 'Custom' && (*/}
                    {/*    <Flex>custom font settings</Flex>*/}
                    {/*)}*/}
                </Flex>
            ))}
            <Button size="xl" view="outlined-action" disabled>
                <Icon data={Plus} />
                Add Font Family
            </Button>
        </Flex>
    );
};

const TypographyPreview = () => {
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(
        () => exportTheme({themeState, ignoreDefaultValues: false}),
        [themeState],
    );

    return (
        <Flex direction="column" gap={10} style={{width: '100%'}}>
            <Text variant="display-2">Typography Styles</Text>
            <Card size="l">
                <ThemeProvider
                    theme="dark"
                    scoped
                    rootClassName={`${b('preview')} ${b('preview', {theme: 'dark'})}`}
                >
                    {themeStyles ? (
                        <style>
                            {`.gravity-ui-landing-typography-tab__preview_theme_dark {
                                ${themeStyles.typography}\n
                                ${themeStyles.dark}
                            }`}
                        </style>
                    ) : null}
                    <Flex gap={10} style={{padding: 80}} justifyContent="center">
                        {TYPOGRAPHY_STYLES_PREVIEW.map(({title, variants}) => {
                            return (
                                <Flex direction="column" gap={10} key={title}>
                                    <Text variant="subheader-3" color="brand">
                                        {title}
                                    </Text>
                                    {variants.map((variant) => (
                                        <Text variant={variant.variant} key={variant.variant}>
                                            {variant.title}
                                        </Text>
                                    ))}
                                </Flex>
                            );
                        })}
                    </Flex>
                </ThemeProvider>
            </Card>
        </Flex>
    );
};

const AdvanceTypographySettings = () => {
    const {
        typography: {advanced, baseSetting},
    } = useThemeCreator();

    const {updateAdvancedTypographySettings} = useThemeCreatorMethods();

    return (
        <Flex direction="column" gap={10} width="100%">
            {Object.entries(advanced).map(([key, setting]) => (
                <Flex gap={4} key={key} width="100%" justifyContent="space-between">
                    <Flex direction="column" gap={8} width="400px">
                        <Text variant="display-2">{setting.title}</Text>

                        <FormRow
                            direction="column"
                            fieldId={`font-family-${key}`}
                            label="Font Family"
                        >
                            <Select
                                size="xl"
                                value={[setting.selectedFontFamilyType]}
                                onUpdate={(fontFamilyType) => {
                                    updateAdvancedTypographySettings({
                                        key: key as TextVariants,
                                        selectedFontFamilyType:
                                            fontFamilyType[0] as DefaultFontFamilyType,
                                    });
                                }}
                                width="max"
                                name={`font-family-${key}`}
                                id={`font-family-${key}`}
                                placeholder="Choose font-family"
                                options={baseSetting.availableFontFamilyType}
                            />
                        </FormRow>
                        <FormRow direction="column" label="Font Weight">
                            <Slider
                                min={FONT_WEIGHTS[0]}
                                max={FONT_WEIGHTS[FONT_WEIGHTS.length - 1]}
                                availableValues={FONT_WEIGHTS}
                                value={setting.fontWeight}
                                onUpdate={(fontWeight) => {
                                    updateAdvancedTypographySettings({
                                        key: key as TextVariants,
                                        fontWeight: fontWeight as number,
                                    });
                                }}
                            />
                        </FormRow>
                    </Flex>

                    <Card style={{padding: '40px 80px', width: '100%'}}>
                        <Flex
                            direction="column"
                            gap={5}
                            justifyContent="center"
                            width="100%"
                            height="100%"
                        >
                            {Object.entries(setting.sizes).map(([sizeKey, sizeData]) => (
                                <Flex
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    key={sizeKey}
                                >
                                    <Text variant="body-2">{sizeData.title}</Text>
                                    <Flex gap={4}>
                                        <TextInput
                                            style={{
                                                width: 225,
                                            }}
                                            label="Font Size:"
                                            value={sizeData.fontSize.toString()}
                                            size="xl"
                                            onUpdate={(fontSize) => {
                                                updateAdvancedTypographySettings({
                                                    key: key as TextVariants,
                                                    sizeKey: sizeKey as TextProps['variant'],
                                                    fontSize: Number(fontSize),
                                                });
                                            }}
                                            type="number"
                                            controlProps={{min: 1}}
                                            endContent={
                                                <Text variant="caption-2" color="secondary">
                                                    px
                                                </Text>
                                            }
                                        />

                                        <TextInput
                                            label="Line Height:"
                                            value={sizeData.lineHeight.toString()}
                                            size="xl"
                                            style={{
                                                width: 225,
                                            }}
                                            onUpdate={(lineHeight) => {
                                                updateAdvancedTypographySettings({
                                                    key: key as TextVariants,
                                                    sizeKey: sizeKey as TextProps['variant'],
                                                    lineHeight: Number(lineHeight),
                                                });
                                            }}
                                            type="number"
                                            controlProps={{min: 1}}
                                            endContent={
                                                <Text variant="caption-2" color="secondary">
                                                    px
                                                </Text>
                                            }
                                        />
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Card>
                </Flex>
            ))}
        </Flex>
    );
};

export const TypographyTab = () => {
    const [withAdvancedSettings, toggleAdvancedSettings] = useState<boolean>(false);

    return (
        <Flex direction="column" alignItems="flex-start" gap={10} className={b()}>
            <FontFamily />
            <TypographyPreview />
            <Button
                size="xl"
                view="outlined-action"
                onClick={() => toggleAdvancedSettings((prevState) => !prevState)}
            >
                <Icon data={Sliders} />
                {withAdvancedSettings ? 'Hide Advanced Settings' : 'Advanced Settings'}
            </Button>
            {withAdvancedSettings && <AdvanceTypographySettings />}
            <ExportThemeSection />
        </Flex>
    );
};
