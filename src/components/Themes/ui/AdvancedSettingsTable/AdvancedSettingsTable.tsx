import {Moon, Sun} from '@gravity-ui/icons';
import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Flex, HelpMark, Icon, SegmentedRadioGroup, Text} from '@gravity-ui/uikit';
import type {BaseColors, Theme, UtilityColor} from '@gravity-ui/uikit-themer';
import {
    createUtilityColorCssVariable,
    isUtilityColorToken,
} from '@gravity-ui/uikit-themer/dist/utils';
import {Fragment, type ReactElement, useMemo, useState} from 'react';

import {block} from '../../../../utils';
import {
    useThemeCreator,
    useThemePaletteColor,
    useThemePrivateColorOptions,
    useThemeUtilityColor,
} from '../../hooks';
import {useThemeSemanticColorOption} from '../../hooks/useThemeSemanticColorOption';
import {DEFAULT_ADVANCED_COLORS, UTILITY_COLOR_HELP_CONTENT} from '../../lib/constants';
import {isManuallyCreatedPaletteToken} from '../../lib/themeCreatorUtils';
import type {AdvancedColorType} from '../../lib/types';
import {getColorPrefix} from '../../lib/utils';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {PrivateColorSelect} from '../PrivateColorSelect';

import {AddExtraColor} from './AddExtraColor/AddExtraColor';
import './AdvancedSettingsTable.scss';
import {ExtraColorName} from './ExtraColorName/ExtraColorName';

const b = block('advanced-color-settings-table');

export interface AdvancedSettingsTableProps {
    colorType: AdvancedColorType;
}

type ValueCellProps = {colorName: string; theme: Theme; value?: string};

type Column = {
    title: () => ReactElement;
    key: string;
    render: (props: {
        colorName: string;
        light?: string;
        dark?: string;
        extraVariable?: boolean;
    }) => ReactElement;
};

const getContentForUtilityVariable = (value: UtilityColor) => {
    const content = UTILITY_COLOR_HELP_CONTENT[value];

    return (
        <Flex direction="column" gap={1} justifyContent="center">
            <Text variant="body-1" color="secondary">
                {createUtilityColorCssVariable(value)}
            </Text>
            <Text variant="body-1" color="primary">
                {content}
            </Text>
        </Flex>
    );
};

const VariableCell = ({name, extraVariable}: {name: string; extraVariable?: boolean}) => {
    if (extraVariable) {
        return <ExtraColorName token={name} />;
    }

    const isUtilityColor = isUtilityColorToken(name as UtilityColor);

    return (
        <Flex justifyContent="space-between" gap={2}>
            <Text variant="body-1" color="secondary">
                {getColorPrefix(name)}
                <Text variant="body-1" color="primary">
                    {name}
                </Text>
            </Text>
            {isUtilityColor && (
                <HelpMark iconSize="m" popoverProps={{placement: 'top-start'}}>
                    {getContentForUtilityVariable(name as UtilityColor)}
                </HelpMark>
            )}
        </Flex>
    );
};

const UtilityThemeValueCell = ({
    colorName,
    theme,
    value,
}: Omit<ValueCellProps, 'colorName'> & {colorName: UtilityColor}) => {
    const [color, setColor] = useThemeUtilityColor({
        name: colorName,
        theme,
    });

    const themePrivateColorOptions = useThemePrivateColorOptions(theme);
    const themeSemanticColorOptions = useThemeSemanticColorOption(theme);

    console.log('themeSemanticColorOptions', themeSemanticColorOptions);
    console.log('themePrivateColorOptions', themePrivateColorOptions);

    if (colorName === 'base-background') {
        return (
            <ColorPickerInput
                value={color}
                defaultValue={value ?? '#000000'}
                onChange={setColor}
                view="clear"
            />
        );
    }

    return (
        <PrivateColorSelect
            privateGroups={themePrivateColorOptions}
            semanticGroups={themeSemanticColorOptions}
            defaultValue={value ?? '#000000'}
            value={color}
            onChange={setColor}
            inputView="clear"
        />
    );
};

const PaletteThemeValueCell = ({colorName, theme, value}: ValueCellProps) => {
    const [color, setColor] = useThemePaletteColor({
        token: colorName,
        theme,
    });

    return (
        <ColorPickerInput
            value={color.value}
            defaultValue={value ?? '#000000'}
            onChange={setColor}
            view="clear"
        />
    );
};

const ThemeValueCell = ({colorName, theme, value}: ValueCellProps) => {
    const isUtilityColor = isUtilityColorToken(colorName);

    if (isUtilityColor) {
        return <UtilityThemeValueCell colorName={colorName} theme={theme} value={value} />;
    }

    return <PaletteThemeValueCell colorName={colorName} theme={theme} value={value} />;
};

const TitleCell = ({value}: {value: string}) => {
    return <Text variant="header-1">{value}</Text>;
};

export const AdvancedSettingsTable = ({colorType}: AdvancedSettingsTableProps) => {
    const state = useThemeCreator();
    const {gravityTheme} = state;

    console.log('gravityTheme', gravityTheme);

    //todo: move to hook
    const extraColors = useMemo(() => {
        return Object.entries(state.gravityTheme.baseColors)
            .filter(([key]) => isManuallyCreatedPaletteToken(key))
            .reduce<BaseColors>((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});
    }, [state]);

    const breakpoint = useWindowBreakpoint();
    const [theme, toggleTheme] = useState<Theme>('light');

    //TODO: move to hook
    const columns = useMemo((): Column[] => {
        const isTablet = breakpoint < BREAKPOINTS.lg;

        const variableColumn: Column = {
            title: () => <TitleCell value="Variable" />,
            key: 'variable',
            render: ({colorName, extraVariable = false}) => (
                <VariableCell name={colorName} extraVariable={extraVariable} />
            ),
        };

        if (isTablet) {
            return [
                variableColumn,
                {
                    title: () => (
                        <SegmentedRadioGroup
                            size="xl"
                            defaultValue={theme}
                            onChange={(e) => {
                                toggleTheme(e.target.value as Theme);
                            }}
                        >
                            <SegmentedRadioGroup.Option value="light">
                                <Icon data={Sun} />
                                Light
                            </SegmentedRadioGroup.Option>
                            <SegmentedRadioGroup.Option value="dark">
                                <Icon data={Moon} />
                                Dark
                            </SegmentedRadioGroup.Option>
                        </SegmentedRadioGroup>
                    ),
                    key: 'themeToggle',
                    render: ({colorName, light, dark}) => (
                        <ThemeValueCell
                            theme={theme}
                            colorName={colorName}
                            value={theme === 'light' ? light : dark}
                        />
                    ),
                },
            ];
        }

        return [
            variableColumn,
            {
                title: () => <TitleCell value="Light theme value" />,
                key: 'light',
                render: ({colorName, light}) => (
                    <ThemeValueCell theme="light" colorName={colorName} value={light} />
                ),
            },
            {
                title: () => <TitleCell value="Dark theme value" />,
                key: 'dark',
                render: ({colorName, dark}) => (
                    <ThemeValueCell theme="dark" colorName={colorName} value={dark} />
                ),
            },
        ];
    }, [breakpoint, theme]);

    return (
        <table className={b()}>
            <thead>
                <tr className={b('row')}>
                    {columns.map(({title: Title}, index) => (
                        <th className={b('cell', {header: true})} key={`header-${index}`}>
                            <Title />
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className={b('body')}>
                {Object.entries(DEFAULT_ADVANCED_COLORS[colorType]).map(([group, variables]) => {
                    return (
                        <Fragment>
                            <tr className={b('row')}>
                                {columns.map(({key}) => (
                                    <td
                                        className={b('cell', {group: true})}
                                        key={`${group}-${key}`}
                                    >
                                        {key === 'variable' ? group : ''}
                                    </td>
                                ))}
                            </tr>

                            {colorType === 'basic-palette' && group === 'extra-color' && (
                                <Fragment>
                                    {Object.entries(extraColors).map(([colorName, value]) => (
                                        <tr className={b('row')}>
                                            {columns.map(({render: Render, key}) => (
                                                <td
                                                    className={b('cell')}
                                                    key={`${colorName}-${key}`}
                                                >
                                                    <Render
                                                        colorName={colorName}
                                                        light={
                                                            value.light?.ref ?? value.light?.value
                                                        }
                                                        dark={value.dark?.ref ?? value.dark?.value}
                                                        extraVariable
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan={columns.length}>
                                            <AddExtraColor />
                                        </td>
                                    </tr>
                                </Fragment>
                            )}

                            {variables.map(({colorName, light, dark}) => (
                                <tr className={b('row')}>
                                    {columns.map(({render: Render, key}) => (
                                        <td className={b('cell')} key={`${colorName}-${key}`}>
                                            <Render
                                                colorName={colorName}
                                                light={light?.ref ?? light?.value}
                                                dark={dark?.ref ?? dark?.value}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </Fragment>
                    );
                })}
            </tbody>
        </table>
    );
};
