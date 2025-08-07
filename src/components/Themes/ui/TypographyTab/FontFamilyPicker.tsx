import {FormRow} from '@gravity-ui/components';
import {Plus, TrashBin} from '@gravity-ui/icons';
import {
    Button,
    Col,
    Flex,
    Icon,
    Popover,
    Row,
    SegmentedRadioGroup,
    SegmentedRadioGroupOptionProps,
    Text,
    TextArea,
    TextInput,
    TextInputProps,
} from '@gravity-ui/uikit';
import {TextGroup} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useState} from 'react';

import {block} from '../../../../utils';
import {SelectableCard} from '../../../SelectableCard/SelectableCard';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {CustomFontSelectType} from '../../lib/types';
import {
    DEFAULT_FONT_FAMILIES,
    DEFAULT_FONT_FAMILY_SETTINGS,
    DefaultFontFamily,
    GOOGLE_FONTS_FONT_PREVIEW_HOST,
    TEXT_GROUP_NAMES,
} from '../../lib/typography/constants';
import {generateGoogleFontDownloadLink} from '../../lib/typography/utils';

import './TypographyTab.scss';

type DefaultFontFamilyOption = {
    name: string;
    fontSuggestions: {title: string; key: string; link: string}[];
};

const DEFAULT_FONT_FAMILY_SUGGESTIONS: Record<DefaultFontFamily, DefaultFontFamilyOption> = {
    sans: {
        name: 'Sans Font Family',
        fontSuggestions: [
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
    monospace: {
        name: 'Monospace Font Family',
        fontSuggestions: [
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
};

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
    const {t} = useTranslation('themes');

    const {
        typography: {fontFamilies},
        gravityTheme: {
            typography: {fontFamilies: gravityFontFamilies},
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
                customType: CustomFontSelectType.GoogleFonts,
                value: {
                    link,
                    mainFont: fontName.replaceAll('+', ' '),
                    fallbackFonts:
                        DEFAULT_FONT_FAMILY_SETTINGS[fontType as DefaultFontFamily]
                            ?.fallbackFonts || [],
                },
            });
        },
        [fontType],
    );

    const customFontType: SegmentedRadioGroupOptionProps[] = [
        {
            value: CustomFontSelectType.GoogleFonts,
            content: t('label_import-from-google-fonts'),
        },
        {
            value: CustomFontSelectType.Manual,
            content: t('label_import-manual'),
        },
    ];

    return (
        <Flex direction="column" gap={6} width="100%" style={{marginBlockEnd: 52}}>
            <Flex justifyContent="space-between">
                <SegmentedRadioGroup
                    size="xl"
                    className={b('custom-font-radio-button')}
                    options={customFontType}
                    value={fontFamilies[fontType]?.customType || CustomFontSelectType.GoogleFonts}
                    onUpdate={(value) => {
                        updateFontFamily({
                            fontType,
                            customType: value,
                            fontWebsite: '',
                            value: {
                                link: '',
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
                    label={`${t('label_link-to-font')}:`}
                    validationState={validationState}
                    errorPlacement="inside"
                    errorMessage={`${t(
                        'label_invalid-font-link',
                    )} ${GOOGLE_FONTS_FONT_PREVIEW_HOST}`}
                    placeholder={`${GOOGLE_FONTS_FONT_PREVIEW_HOST}Fira+Mono`}
                    onChange={onGoogleFontInputChange}
                />
            )}

            {fontFamilies[fontType].customType === CustomFontSelectType.Manual && (
                <Flex direction="column" gap={6}>
                    <TextInput
                        label={`${t('label_font-name')}:`}
                        value={gravityFontFamilies[fontType].mainFont}
                        size="xl"
                        type="text"
                        placeholder={t('label_font-name-placeholder')}
                        onChange={(event) => {
                            const fontName = event.target.value;

                            updateFontFamily({
                                fontType,
                                value: {
                                    mainFont: fontName,
                                },
                            });
                        }}
                    />

                    <FormRow
                        direction="column"
                        className={b('custom-font-textarea-wrapper')}
                        label={<Text variant="subheader-2">{t('label_alternatives')}</Text>}
                    >
                        <TextArea
                            size="xl"
                            className={b('custom-font-textarea')}
                            value={gravityFontFamilies[fontType]?.fallbackFonts?.join(', ') || ''}
                            rows={3}
                            maxRows={4}
                            onChange={(event) => {
                                const alternatives = event.target.value;

                                updateFontFamily({
                                    fontType,
                                    value: {
                                        fallbackFonts: alternatives
                                            .split(',')
                                            .map((alternative) =>
                                                alternative.trim().replaceAll(';', ''),
                                            ),
                                        title: fontFamilies[fontType].title,
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
                        label={<Text variant="subheader-2">{t('label_font-link')}</Text>}
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
                                    value: {
                                        link,
                                        title: fontFamilies[fontType].title,
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

const DeleteAdditionalFontButton = ({
    getFontUsages,
    removeFontFamilyType,
    fontType,
    mobile,
}: {
    getFontUsages: (fontType: string) => string[];
    fontType: string;
    removeFontFamilyType: ReturnType<typeof useThemeCreatorMethods>['removeFontFamilyType'];
    mobile?: boolean;
}) => {
    const {t} = useTranslation('themes');

    const fontUsages = React.useMemo(() => {
        return getFontUsages(fontType);
    }, [getFontUsages, fontType]);

    return (
        <Popover
            content={
                <Flex direction="column" gap={2} className={b('delete-font-popover-content')}>
                    <span>
                        {t('label_delete-additional-font-message-1')} <b>{fontUsages.join(', ')}</b>
                        . {t('label_delete-additional-font-message-2')}
                    </span>
                    <Button
                        view="action"
                        width="max"
                        onClick={() => {
                            removeFontFamilyType({
                                fontType,
                            });
                        }}
                    >
                        {t('action_continue')}
                    </Button>
                </Flex>
            }
            hasArrow
            disabled={fontUsages.length === 0}
        >
            <div>
                <Button
                    size="xl"
                    className={b('additional-font-delete-btn', {mobile})}
                    disabled={fontUsages.length > 0}
                    onClick={() => {
                        removeFontFamilyType({
                            fontType,
                        });
                    }}
                >
                    <Icon data={TrashBin} />
                </Button>
            </div>
        </Popover>
    );
};

type DefaultFontFamilyOptionsProps = {
    type: DefaultFontFamily;
};

const DefaultFontFamilyOptions = ({type}: DefaultFontFamilyOptionsProps) => {
    const {
        gravityTheme: {typography},
    } = useThemeCreator();

    const {updateFontFamily} = useThemeCreatorMethods();

    const {name, fontSuggestions} = DEFAULT_FONT_FAMILY_SUGGESTIONS[type];
    const fontFamilyOptions = typography.fontFamilies[type];

    const isCustomFontSelected = React.useMemo(() => {
        return !fontSuggestions.some(({title}) => title === fontFamilyOptions.mainFont);
    }, [type, fontSuggestions, fontFamilyOptions]);

    return (
        <Row space={0} spaceRow={2} style={{width: '100%', alignItems: 'center'}}>
            <Col s="12" l="4">
                <Text variant="body-3">{name}</Text>
            </Col>

            <Col s="12" l="8">
                <Row space={5} spaceRow={5}>
                    {fontSuggestions.map((font) => (
                        <Col s="6" m="3" key={font.key}>
                            <SelectableCard
                                className={b('font-card')}
                                selected={
                                    !isCustomFontSelected &&
                                    fontFamilyOptions.mainFont === font.title
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
                                        fontType: type,
                                        value: {
                                            mainFont: font.title,
                                            link: font.link,
                                            fallbackFonts:
                                                DEFAULT_FONT_FAMILY_SETTINGS[type]?.fallbackFonts,
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
                            selected={isCustomFontSelected}
                            text="Custom"
                            textProps={{
                                variant: 'header-1',
                                className: b('font-card__text'),
                            }}
                            pureText
                            onClick={() => {
                                updateFontFamily({
                                    fontType: type,
                                    customType: CustomFontSelectType.GoogleFonts,
                                    value: {
                                        mainFont: '',
                                        fallbackFonts: [],
                                    },
                                });
                            }}
                        />
                    </Col>
                    <Col s="12">{isCustomFontSelected && <CustomFontFamily fontType={type} />}</Col>
                </Row>
            </Col>
        </Row>
    );
};

export const FontFamilyPicker = () => {
    const {t} = useTranslation('themes');

    const {
        typography: {fontFamilies},
        gravityTheme,
    } = useThemeCreator();

    const {addFontFamilyType, removeFontFamilyType, updateFontFamilyTypeTitle} =
        useThemeCreatorMethods();

    const getFontUsages = React.useCallback(
        (fontType: string) => {
            return Object.entries(gravityTheme.typography.groups)
                .filter(([, textVariantSetting]) => textVariantSetting['font-family'] === fontType)
                .map(([group]) => TEXT_GROUP_NAMES[group as TextGroup]);
        },
        [gravityTheme.typography.groups],
    );

    const customFontFamilies = React.useMemo(() => {
        return Object.keys(gravityTheme.typography.fontFamilies).filter(
            (type) => !DEFAULT_FONT_FAMILIES.includes(type as DefaultFontFamily),
        );
    }, [gravityTheme.typography.fontFamilies]);

    return (
        <Flex direction="column" alignItems="flex-start" gap={10} width="100%">
            <Text variant="display-2">{t('title_fonts')}</Text>
            {DEFAULT_FONT_FAMILIES.map((type) => (
                <DefaultFontFamilyOptions key={type} type={type} />
            ))}
            {customFontFamilies.map((type) => (
                <Row space={0} style={{width: '100%'}} key={type}>
                    <Col s="12" l="4" className={b('additional-font-label')}>
                        <Flex gap={2}>
                            <TextInput
                                size="xl"
                                value={fontFamilies[type].title}
                                label={`${t('label_alias')}:`}
                                onChange={(event) => {
                                    const value = event.target.value;

                                    updateFontFamilyTypeTitle({
                                        title: value,
                                        familyType: type,
                                    });
                                }}
                                placeholder={t('label_alias-placeholder')}
                                className={b('additional-font-input')}
                            />
                            <DeleteAdditionalFontButton
                                removeFontFamilyType={removeFontFamilyType}
                                getFontUsages={getFontUsages}
                                fontType={type}
                                mobile={true}
                            />
                        </Flex>
                    </Col>
                    <Col s="12" l="8">
                        <CustomFontFamily
                            fontType={type}
                            withExtraContent
                            ExtraContent={
                                <DeleteAdditionalFontButton
                                    removeFontFamilyType={removeFontFamilyType}
                                    getFontUsages={getFontUsages}
                                    fontType={type}
                                />
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
                        title: `${t('label_additional-font')} ${customFontFamilies.length + 1}`,
                        customType: CustomFontSelectType.GoogleFonts,
                    });
                }}
            >
                <Icon data={Plus} />
                {t('action_add-font-family')}
            </Button>
        </Flex>
    );
};
