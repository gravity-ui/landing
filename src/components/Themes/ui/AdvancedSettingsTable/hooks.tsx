import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import type {BaseColors, Theme} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';
import {type ReactElement, useMemo, useState} from 'react';

import {useThemeCreator} from '../../hooks';
import {isManuallyCreatedPaletteToken} from '../../lib/themeCreatorUtils';
import type {AdvancedColorType} from '../../lib/types';

import {ThemeToggleTitleColumn, ThemeValueColumn, TitleColumn, VariableColumn} from './columns';

export const useExtraColors = () => {
    const {gravityTheme} = useThemeCreator();

    return useMemo(() => {
        return Object.entries(gravityTheme.baseColors)
            .filter(([key]) => isManuallyCreatedPaletteToken(key))
            .reduce<BaseColors>((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});
    }, [gravityTheme]);
};

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

export const useColumns = ({colorType}: {colorType: AdvancedColorType}): Column[] => {
    const [theme, toggleTheme] = useState<Theme>('light');
    const {t} = useTranslation('themes');

    const breakpoint = useWindowBreakpoint();
    const isTablet = breakpoint < BREAKPOINTS.lg;

    const variableColumn: Column = useMemo(
        () => ({
            title: () => (
                <TitleColumn
                    value={
                        colorType === 'basic-palette'
                            ? t('title_advance-settings-table_title-color')
                            : t('title_advance-settings-table_title-variable')
                    }
                />
            ),
            key: 'variable',
            render: ({colorName, extraVariable = false}) => (
                <VariableColumn name={colorName} extraVariable={extraVariable} />
            ),
        }),
        [t, colorType],
    );

    const tabletColumns: Column[] = useMemo(
        () => [
            variableColumn,
            {
                title: () => <ThemeToggleTitleColumn theme={theme} toggleTheme={toggleTheme} />,
                key: 'themeToggle',
                render: ({colorName, light, dark}) => (
                    <ThemeValueColumn
                        theme={theme}
                        colorName={colorName}
                        value={theme === 'light' ? light : dark}
                    />
                ),
            },
        ],
        [variableColumn, toggleTheme, theme],
    );

    const desktopColumns: Column[] = useMemo(
        () => [
            variableColumn,
            {
                title: () => <TitleColumn value={t('title_advance-settings-table_title-light')} />,
                key: 'light',
                render: ({colorName, light}) => (
                    <ThemeValueColumn theme="light" colorName={colorName} value={light} />
                ),
            },
            {
                title: () => <TitleColumn value={t('title_advance-settings-table_title-dark')} />,
                key: 'dark',
                render: ({colorName, dark}) => (
                    <ThemeValueColumn theme="dark" colorName={colorName} value={dark} />
                ),
            },
        ],
        [variableColumn, t],
    );

    if (isTablet) {
        return tabletColumns;
    }

    return desktopColumns;
};
