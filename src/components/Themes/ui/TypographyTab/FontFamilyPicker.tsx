import {FormRow} from '@gravity-ui/components';
import {Plus, TrashBin} from '@gravity-ui/icons';
import {
    Button,
    Col,
    Flex,
    Icon,
    Popover,
    RadioButton,
    RadioButtonOption,
    Row,
    Text,
    TextArea,
    TextInput,
    TextInputProps,
} from '@gravity-ui/uikit';
import React, {useCallback, useState} from 'react';

import {block} from '../../../../utils';
import {SelectableCard} from '../../../SelectableCard/SelectableCard';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {CustomFontSelectType} from '../../lib/types';
import {
    DEFAULT_FONTS,
    DefaultFontFamilyType,
    GOOGLE_FONTS_FONT_PREVIEW_HOST,
} from '../../lib/typography/constants';
import {generateGoogleFontDownloadLink} from '../../lib/typography/utils';

import './TypographyTab.scss';

const customFontType: RadioButtonOption[] = [
    {
        value: CustomFontSelectType.GoogleFonts,
        content: 'Import From Google Fonts',
    },
    {
        value: CustomFontSelectType.Manual,
        content: 'Manual',
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
                link: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
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
    const {
        typography: {
            baseSetting: {fontFamilies},
        },
    } = useThemeCreator();

    const [validationState, setValidationState] =
        useState<TextInputProps['validationState']>(undefined);
    const {updateFontFamily} = useThemeCreatorMethods();

    const onGoogleFontInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;

            if (value.startsWith(GOOGLE_FONTS_FONT_PREVIEW_HOST)) {
                setValidationState(undefined);
            } else {
                setValidationState('invalid');
            }

            const dirtyFontName = value.split('/').at(-1);

            const extraDataIndex = dirtyFontName?.indexOf('?');

            const fontName =
                (extraDataIndex === -1 ? dirtyFontName : dirtyFontName?.slice(0, extraDataIndex)) ??
                '';

            const link = generateGoogleFontDownloadLink(fontName);

            updateFontFamily({
                fontType,
                fontWebsite: value,
                isCustom: true,
                customType: CustomFontSelectType.GoogleFonts,
                value: {
                    title: fontName.replaceAll('+', ' '),
                    key: fontName.replaceAll('+', '-').toLowerCase(),
                    link,
                    alternatives: fontFamilies[fontType].alternatives,
                },
            });
        },
        [fontType],
    );

    return (
        <Flex direction="column" gap={6} width="100%" style={{marginBlockEnd: 52}}>
            <Flex justifyContent="space-between">
                <RadioButton
                    size="xl"
                    className={b('custom-font-radio-button')}
                    options={customFontType}
                    value={fontFamilies[fontType]?.customType || CustomFontSelectType.GoogleFonts}
                    onUpdate={(value) => {
                        updateFontFamily({
                            fontType,
                            isCustom: true,
                            customType: value,
                            fontWebsite: '',
                            value: {
                                title: '',
                                key: '',
                                link: '',
                                alternatives: [],
                            },
                        });
                    }}
                />
                {withExtraContent && ExtraContent}
            </Flex>
            {fontFamilies[fontType].customType === CustomFontSelectType.GoogleFonts && (
                <TextInput
                    size="xl"
                    value={fontFamilies[fontType]?.fontWebsite || ''}
                    label="Link to font:"
                    validationState={validationState}
                    errorPlacement="inside"
                    errorMessage={`Invalid link. Link should start from ${GOOGLE_FONTS_FONT_PREVIEW_HOST}`}
                    placeholder={`${GOOGLE_FONTS_FONT_PREVIEW_HOST}Fira+Mono`}
                    onChange={onGoogleFontInputChange}
                />
            )}

            {fontFamilies[fontType].customType === CustomFontSelectType.Manual && (
                <Flex direction="column" gap={6}>
                    <TextInput
                        label="Font Name:"
                        value={fontFamilies[fontType].title}
                        size="xl"
                        type="text"
                        placeholder="Enter font name"
                        onChange={(event) => {
                            const fontName = event.target.value;

                            updateFontFamily({
                                fontType,
                                isCustom: true,
                                value: {
                                    title: fontName,
                                    key: fontName.replaceAll(' ', '-').toLowerCase(),
                                    link: fontFamilies[fontType].link,
                                    alternatives: fontFamilies[fontType].alternatives,
                                },
                            });
                        }}
                    />

                    <FormRow
                        direction="column"
                        className={b('custom-font-textarea-wrapper')}
                        label={<Text variant="subheader-2">Alternatives</Text>}
                    >
                        <TextArea
                            size="xl"
                            className={b('custom-font-textarea')}
                            value={fontFamilies[fontType].alternatives.join(', ')}
                            rows={3}
                            maxRows={4}
                            onChange={(event) => {
                                const alternatives = event.target.value;

                                updateFontFamily({
                                    fontType,
                                    isCustom: true,
                                    value: {
                                        alternatives: alternatives
                                            .split(',')
                                            .map((alternative) =>
                                                alternative.trim().replaceAll(';', ''),
                                            ),
                                        title: fontFamilies[fontType].title,
                                        key: fontFamilies[fontType].key,
                                        link: fontFamilies[fontType].link,
                                    },
                                });
                            }}
                            placeholder="'Mono', 'Consolas', 'Ubuntu Mono', monospace;"
                        />
                    </FormRow>
                    <FormRow
                        direction="column"
                        className={b('custom-font-textarea-wrapper')}
                        label={<Text variant="subheader-2">Font Link</Text>}
                    >
                        <TextArea
                            className={b('custom-font-textarea')}
                            size="xl"
                            value={fontFamilies[fontType].link}
                            rows={3}
                            maxRows={4}
                            placeholder="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
                            onChange={(event) => {
                                const link = event.target.value;

                                updateFontFamily({
                                    fontType,
                                    isCustom: true,
                                    value: {
                                        link,
                                        alternatives: fontFamilies[fontType].alternatives,
                                        title: fontFamilies[fontType].title,
                                        key: fontFamilies[fontType].key,
                                    },
                                });
                            }}
                        />
                    </FormRow>
                </Flex>
            )}
        </Flex>
    );
};

export const FontFamilyPicker = () => {
    const {
        typography: {
            baseSetting: {fontFamilies, customFontFamilyType},
            advanced,
        },
    } = useThemeCreator();

    const {updateFontFamily, addFontFamilyType, removeFontFamilyType, updateFontFamilyTypeTitle} =
        useThemeCreatorMethods();

    const getFontUsages = React.useCallback(
        (fontType: string) => {
            return Object.entries(advanced)
                .filter(
                    ([, textVariantSetting]) =>
                        textVariantSetting.selectedFontFamilyType === fontType,
                )
                .map(([, textVariantSetting]) => textVariantSetting.title);
        },
        [advanced],
    );

    return (
        <Flex direction="column" alignItems="flex-start" gap={10} width="100%">
            <Text variant="display-2">Fonts</Text>
            {FONT_FAMILIES_OPTION.map((option) => (
                <Row space={5} style={{width: '100%', alignItems: 'center'}}>
                    <Col s="12" l="4">
                        <Text variant="body-3">{option.name}</Text>
                    </Col>

                    <Col s="12" l="8">
                        <Row space={5} spaceRow={5}>
                            {option.fonts.map((font) => (
                                <Col s="6" m="3" key={font.key}>
                                    <SelectableCard
                                        className={b('font-card')}
                                        selected={
                                            fontFamilies[option.variableName].title ===
                                                font.title &&
                                            !fontFamilies[option.variableName].isCustom
                                        }
                                        text={font.title}
                                        textProps={{
                                            variant: 'header-1',
                                            className: b('font-card__text', {
                                                fontType: font.key,
                                            }),
                                        }}
                                        pureText
                                        onClick={() => {
                                            updateFontFamily({
                                                fontType: option.variableName,
                                                isCustom: false,
                                                value: {
                                                    title: font.title,
                                                    key: font.key,
                                                    link: font.link,
                                                    alternatives:
                                                        DEFAULT_FONTS[option.variableName],
                                                },
                                            });
                                        }}
                                    />
                                </Col>
                            ))}
                            <Col s="6" m="3">
                                <SelectableCard
                                    key={'custom'}
                                    className={b('font-card')}
                                    selected={fontFamilies[option.variableName].isCustom}
                                    text="Custom"
                                    textProps={{
                                        variant: 'header-1',
                                        className: b('font-card__text'),
                                    }}
                                    pureText
                                    onClick={() => {
                                        updateFontFamily({
                                            fontType: option.variableName,
                                            customType: CustomFontSelectType.GoogleFonts,
                                            isCustom: true,
                                            value: {
                                                title: '',
                                                key: '',
                                                link: '',
                                                alternatives: [],
                                            },
                                        });
                                    }}
                                />
                            </Col>

                            <Col s="12">
                                {fontFamilies[option.variableName].isCustom && (
                                    <CustomFontFamily fontType={option.variableName} />
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ))}
            {customFontFamilyType.map((fType) => (
                <Row space={4} style={{width: '100%'}}>
                    <Col s="12" l="4">
                        <TextInput
                            size="xl"
                            value={fType.content}
                            label="Alias:"
                            onChange={(event) => {
                                const value = event.target.value;

                                updateFontFamilyTypeTitle({title: value, familyType: fType.value});
                            }}
                            placeholder="Enter font alias"
                            className={b('additional-font-input')}
                        />
                    </Col>
                    <Col s="12" l="8">
                        <CustomFontFamily
                            fontType={fType.value}
                            withExtraContent
                            ExtraContent={
                                <Popover
                                    content={
                                        <Flex direction="column" gap={2}>
                                            <span>
                                                This font is currently in use in blocks:{' '}
                                                <b>{getFontUsages(fType.value).join(', ')}</b>. If
                                                you delete it, we'll replace it with a default font.
                                            </span>
                                            <Button
                                                view="action"
                                                width="max"
                                                onClick={() => {
                                                    removeFontFamilyType({
                                                        fontType: fType.value,
                                                    });
                                                }}
                                            >
                                                Continue
                                            </Button>
                                        </Flex>
                                    }
                                    disabled={getFontUsages(fType.value).length === 0}
                                >
                                    <Button
                                        size="xl"
                                        disabled={getFontUsages(fType.value).length > 0}
                                        onClick={() => {
                                            removeFontFamilyType({
                                                fontType: fType.value,
                                            });
                                        }}
                                    >
                                        <Icon data={TrashBin} />
                                    </Button>
                                </Popover>
                            }
                        />
                    </Col>
                </Row>
            ))}
            <Button
                size="xl"
                view="outlined-action"
                className={b('additional-font-add-btn')}
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
