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
    createUtilityColorCssVariable,
    isInternalUtilityColorReference,
} from '@gravity-ui/uikit-themer';
import {
    createInternalUtilityColorReference,
    isUtilityColorToken,
    parseInternalUtilityColorReference,
} from '@gravity-ui/uikit-themer/dist/utils';
import {useMemo} from 'react';

import {DEFAULT_ADVANCED_COLORS} from '../lib/constants';
import type {AdvancedColorType} from '../lib/types';
import type {BaseColor} from '../ui/PrivateColorSelect/types';

import {useThemeCreator} from './useThemeCreator';

export type SemanticColorGroup = {
    icon: React.ReactNode;
    key: string;
    title: string;
    groups: {
        title: string;
        items: (BaseColor & {name?: string; ref?: string})[];
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
    }
};

const resolveUtilityColor = (state: GravityTheme['utilityColors'], themeVariant: Theme) => {
    const traverse = (colorObject: ColorOptions): string => {
        if (colorObject.ref && isInternalUtilityColorReference(colorObject.ref)) {
            const nextUtilityColorToken = parseInternalUtilityColorReference(colorObject.ref);

            if (nextUtilityColorToken) {
                const nextUtilityColor = state[nextUtilityColorToken];

                return traverse(nextUtilityColor[themeVariant]);
            }

            return colorObject.value;
        }

        return colorObject.value;
    };

    return traverse;
};

export const useThemeSemanticColorOption = (themeVariant: Theme): SemanticColorGroup[] => {
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
                    title: advanceColorGroupName,
                    groups: Object.entries(advanceColorSubGroups).map(
                        ([advanceColorSubGroupName, advanceColorSubGroupItems]) => {
                            return {
                                title: advanceColorSubGroupName,
                                items: advanceColorSubGroupItems.map(({colorName}) => {
                                    const isUtilityColor = isUtilityColorToken(colorName);

                                    const colorObject = isUtilityColor
                                        ? gravityTheme.utilityColors[colorName as UtilityColor][
                                              themeVariant
                                          ]
                                        : gravityTheme.baseColors[colorName]?.[themeVariant];

                                    const resolvedValue = isUtilityColor
                                        ? resolveUtilityColor(
                                              gravityTheme.utilityColors,
                                              themeVariant,
                                          )(
                                              gravityTheme.utilityColors[colorName as UtilityColor][
                                                  themeVariant
                                              ],
                                          )
                                        : colorObject.value;

                                    return {
                                        name: colorName,
                                        title: isUtilityColor
                                            ? createUtilityColorCssVariable(colorName)
                                            : colorName,
                                        color: resolvedValue,
                                        ref: colorObject.ref,
                                        token: isUtilityColor
                                            ? createInternalUtilityColorReference(colorName)
                                            : colorName,
                                    };
                                }),
                            };
                        },
                    ),
                };
            });
    }, [themeState, themeVariant]);
};
