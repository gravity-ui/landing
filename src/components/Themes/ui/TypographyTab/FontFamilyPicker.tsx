import {Plus, TrashBin} from '@gravity-ui/icons';
import {
    Button,
    Flex,
    Icon,
    RadioButton,
    RadioButtonOption,
    Text,
    TextInput,
    TextInputProps,
} from '@gravity-ui/uikit';
import React, {useCallback, useState} from 'react';

import {block} from '../../../../utils';
import {SelectableCard} from '../../../SelectableCard/SelectableCard';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {
    DefaultFontFamilyType,
    GOOGLE_FONTS_FONT_PREVIEW_HOST,
} from '../../lib/typography/constants';
import {generateGoogleFontDownloadLink} from '../../lib/typography/utils';

import './TypographyTab.scss';

enum CustomFontSelectType {
    GoogleFonts = 'google-fonts',
    Manual = 'manual',
}

const customFontType: RadioButtonOption[] = [
    {
        value: CustomFontSelectType.GoogleFonts,
        content: 'Import From Google Fonts',
    },
    {
        value: CustomFontSelectType.Manual,
        content: 'Manual',
        disabled: true,
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

const b = block('typography-tab__font');

const CustomFontFamily = ({
    fontType,
    withExtraContent,
    ExtraContent,
}: {
    fontType: string;
    withExtraContent?: boolean;
    ExtraContent?: React.ReactNode;
}) => {
    const [validationState, setValidationState] =
        useState<TextInputProps['validationState']>(undefined);

    const [customType, setCustomType] = useState<CustomFontSelectType>(
        CustomFontSelectType.GoogleFonts,
    );

    const {updateFontFamily} = useThemeCreatorMethods();

    const renderFieldsByType = useCallback(() => {
        switch (customType) {
            case CustomFontSelectType.GoogleFonts: {
                return (
                    <TextInput
                        size="xl"
                        label="Link to font:"
                        validationState={validationState}
                        errorPlacement="inside"
                        errorMessage={`Invalid link. Link should start from ${GOOGLE_FONTS_FONT_PREVIEW_HOST}`}
                        placeholder={`${GOOGLE_FONTS_FONT_PREVIEW_HOST}Fira+Mono`}
                        onChange={(event) => {
                            const value = event.target.value;

                            if (!value.startsWith(GOOGLE_FONTS_FONT_PREVIEW_HOST)) {
                                setValidationState('invalid');
                                return;
                            } else {
                                setValidationState(undefined);
                            }

                            const dirtyFontName = value.split('/').at(-1);

                            if (!dirtyFontName) {
                                return;
                            }

                            const extraDataIndex = dirtyFontName.indexOf('?');

                            const fontName = dirtyFontName.slice(
                                0,
                                extraDataIndex === -1 ? dirtyFontName.length : extraDataIndex,
                            );

                            const link = generateGoogleFontDownloadLink(fontName);

                            updateFontFamily({
                                fontType,
                                value: {
                                    title: fontName.replaceAll('+', ' '),
                                    key: fontName.replaceAll('+', '-').toLowerCase(),
                                    link,
                                },
                            });
                        }}
                    />
                );
            }
            case CustomFontSelectType.Manual: {
                return <div></div>;
            }
            default: {
                return null;
            }
        }
    }, [customType, validationState]);

    return (
        <Flex direction="column" gap={6} width="100%" style={{marginBlockEnd: 52}}>
            <Flex justifyContent="space-between">
                <RadioButton
                    size="xl"
                    className={b('custom-font-radio-button')}
                    options={customFontType}
                    value={customType}
                    onUpdate={(value) => {
                        setCustomType(value as CustomFontSelectType);
                    }}
                />
                {withExtraContent && ExtraContent}
            </Flex>
            {renderFieldsByType()}
        </Flex>
    );
};

export const FontFamilyPicker = () => {
    const [isCustom, setIsCustom] = useState({
        [DefaultFontFamilyType.Sans]: false,
        [DefaultFontFamilyType.Monospace]: false,
    });

    const {
        typography: {
            baseSetting: {fontFamilies, customFontFamilyType},
            advanced,
        },
    } = useThemeCreator();

    console.log('fontFamily', fontFamilies);
    console.log('customFontFamilyType', customFontFamilyType);

    const {updateFontFamily, addFontFamilyType, removeFontFamilyType, updateFontFamilyTypeTitle} =
        useThemeCreatorMethods();

    return (
        <Flex direction="column" alignItems="flex-start" gap={10} width="100%">
            <Text variant="display-2">Fonts</Text>
            {FONT_FAMILIES_OPTION.map((option) => (
                <Flex direction="column" gap={5} style={{width: '100%'}} key={option.variableName}>
                    <Flex alignItems="flex-start" width="100%">
                        <Text variant="body-3" style={{width: '400px'}}>
                            {option.name}
                        </Text>

                        <Flex direction="column" gap={5}>
                            <Flex gap={4}>
                                {option.fonts.map((font) => (
                                    <SelectableCard
                                        key={font.key}
                                        className={b('font-card')}
                                        selected={
                                            fontFamilies[option.variableName].title ===
                                                font.title && !isCustom[option.variableName]
                                        }
                                        text={font.title}
                                        textProps={{
                                            variant: 'header-1',
                                            style: {
                                                fontFamily: font.title,
                                            },
                                        }}
                                        pureText
                                        onClick={() => {
                                            setIsCustom((prevState) => ({
                                                ...prevState,
                                                [option.variableName]: false,
                                            }));

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
                                    selected={isCustom[option.variableName]}
                                    text="Custom"
                                    textProps={{
                                        variant: 'body-3',
                                    }}
                                    pureText
                                    onClick={() => {
                                        setIsCustom((prevState) => {
                                            return {
                                                ...prevState,
                                                [option.variableName]:
                                                    !prevState[option.variableName],
                                            };
                                        });
                                    }}
                                />
                            </Flex>
                            {isCustom[option.variableName] && (
                                <CustomFontFamily fontType={option.variableName} />
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            ))}
            {customFontFamilyType.map((fType) => (
                <Flex gap={4} width="100%" key={fType.value}>
                    <TextInput
                        size="xl"
                        value={fType.content}
                        label="Alias:"
                        onChange={(event) => {
                            const value = event.target.value;

                            updateFontFamilyTypeTitle({title: value, familyType: fType.value});
                        }}
                        placeholder="Enter font alias"
                        style={{
                            minWidth: '380px',
                            width: '380px',
                        }}
                    />

                    <CustomFontFamily
                        fontType={fType.value}
                        withExtraContent
                        ExtraContent={
                            <Button
                                size="xl"
                                disabled={Object.entries(advanced).some(
                                    ([, textVariantSetting]) =>
                                        textVariantSetting.selectedFontFamilyType === fType.value,
                                )}
                                onClick={() => {
                                    removeFontFamilyType({
                                        fontType: fType.value,
                                    });
                                }}
                            >
                                <Icon data={TrashBin} />
                            </Button>
                        }
                    />
                </Flex>
            ))}
            <Button
                size="xl"
                view="outlined-action"
                onClick={() => {
                    addFontFamilyType({
                        title: `Additional Font ${customFontFamilyType.length + 1}`,
                    });
                }}
            >
                <Icon data={Plus} />
                Add Font Family
            </Button>
        </Flex>
    );
};
