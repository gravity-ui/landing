import {
    Cube,
    Layers,
    MagicWand,
    PencilToLine,
    TargetDart,
    Text as TextIcon,
} from '@gravity-ui/icons';
import {Icon} from '@gravity-ui/uikit';
import {
    type ColorOptions,
    type GravityTheme,
    type Theme,
    type UtilityColor,
    createInternalUtilityColorReference,
    createUtilityColorCssVariable,
    isInternalUtilityColorReference,
    isUtilityColorToken,
    parseInternalUtilityColorReference,
} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';
import {useMemo} from 'react';

import {DEFAULT_ADVANCED_COLORS} from '../lib/constants';
import type {AdvancedColorType} from '../lib/types';
import type {BaseColor} from '../ui/GravityColorSelect/types';

import {useThemeCreator} from './useThemeCreator';

export type SemanticColorGroupItem = BaseColor & {
    name?: string;
    ref?: string;
    disabled?: boolean;
};

export type SemanticColorGroup = {
    icon: React.ReactNode;
    key: string;
    title: string;
    groups: {
        title: string;
        items: SemanticColorGroupItem[];
    }[];
};

const getIconByGroup = (group: Exclude<AdvancedColorType, 'basic-palette'>) => {
    switch (group) {
        case 'brand-summary':
            return <Icon data={TargetDart} />;
        case 'texts':
            return <Icon data={TextIcon} />;
        case 'backgrounds':
            return <Icon data={Layers} />;
        case 'lines':
            return <Icon data={PencilToLine} />;
        case 'effects':
            return <Icon data={MagicWand} />;
        case 'misc':
            return <Icon data={Cube} />;
        default:
            return <Icon data={Cube} />;
    }
};

const resolveUtilityColor = (
    state: GravityTheme['utilityColors'],
    themeVariant: Theme,
    updatedColorToken: string,
) => {
    let disabled = false;

    const traverse = (
        colorObject: ColorOptions & {token?: string},
    ): {color: string; disabled: boolean} => {
        if (colorObject.token === updatedColorToken) {
            disabled = true;
        }

        if (colorObject.ref && isInternalUtilityColorReference(colorObject.ref)) {
            const nextUtilityColorToken = parseInternalUtilityColorReference(colorObject.ref);

            if (colorObject.ref === updatedColorToken) {
                disabled = true;
            }

            if (nextUtilityColorToken) {
                const nextUtilityColor = state[nextUtilityColorToken];

                return traverse(nextUtilityColor[themeVariant]);
            }
        }

        return {color: colorObject.value, disabled};
    };

    return traverse;
};

export const useThemeSemanticColorOption = (
    themeVariant: Theme,
    updatedColorToken: string,
): SemanticColorGroup[] => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();
    const {gravityTheme} = themeState;

    return useMemo(() => {
        return Object.entries(DEFAULT_ADVANCED_COLORS)
            .filter(([advanceColorGroupName]) => advanceColorGroupName !== 'basic-palette')
            .map(([advanceColorGroupName, advanceColorSubGroups]) => {
                return {
                    key: advanceColorGroupName,
                    icon: getIconByGroup(
                        advanceColorGroupName as Exclude<AdvancedColorType, 'basic-palette'>,
                    ),
                    title: t(`title_advance-color-settings-${advanceColorGroupName}`),
                    groups: Object.entries(advanceColorSubGroups).map(
                        ([advanceColorSubGroupName, advanceColorSubGroupItems]) => {
                            return {
                                title: t(
                                    `title_advance-color-settings-group-${advanceColorSubGroupName}`,
                                ),
                                items: advanceColorSubGroupItems.map(({colorName}) => {
                                    const isUtilityColor = isUtilityColorToken(colorName);

                                    if (isUtilityColor) {
                                        const colorObject =
                                            gravityTheme.utilityColors[colorName as UtilityColor][
                                                themeVariant
                                            ];
                                        const token =
                                            createInternalUtilityColorReference(colorName);

                                        const {color, disabled} = resolveUtilityColor(
                                            gravityTheme.utilityColors,
                                            themeVariant,
                                            updatedColorToken,
                                        )({...colorObject, token});

                                        return {
                                            color,
                                            disabled,
                                            token,
                                            name: colorName,
                                            title: createUtilityColorCssVariable(colorName),
                                            ref: colorObject.ref,
                                        };
                                    } else {
                                        const colorObject =
                                            gravityTheme.baseColors[colorName]?.[themeVariant];

                                        return {
                                            name: colorName,
                                            title: colorName,
                                            color: colorObject.value,
                                            ref: colorObject.ref,
                                            disabled: false,
                                            token: colorName,
                                        };
                                    }
                                }),
                            };
                        },
                    ),
                };
            });
    }, [gravityTheme, themeVariant, updatedColorToken, t]);
};
