import {Moon, Sun} from '@gravity-ui/icons';
import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Icon, SegmentedRadioGroup} from '@gravity-ui/uikit';
import type {BaseColors, Theme} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';
import {type ReactElement, useMemo, useState} from 'react';

import {useThemeCreator} from '../../hooks';
import {isManuallyCreatedPaletteToken} from '../../lib/themeCreatorUtils';

import {ThemeValueColumn, TitleColumn, VariableColumn} from './columns';

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

export const useColumns = (): Column[] => {
    const [theme, toggleTheme] = useState<Theme>('light');
    const {t} = useTranslation('themes');

    const breakpoint = useWindowBreakpoint();
    const isTablet = breakpoint < BREAKPOINTS.lg;

    const variableColumn: Column = useMemo(
        () => ({
            title: () => <TitleColumn value={t('title_advance-settings-table_title-variable')} />,
            key: 'variable',
            render: ({colorName, extraVariable = false}) => (
                <VariableColumn name={colorName} extraVariable={extraVariable} />
            ),
        }),
        [t],
    );

    if (isTablet) {
        return useMemo(
            () => [
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
                                {t('theme_name_light')}
                            </SegmentedRadioGroup.Option>
                            <SegmentedRadioGroup.Option value="dark">
                                <Icon data={Moon} />
                                {t('theme_name_dark')}
                            </SegmentedRadioGroup.Option>
                        </SegmentedRadioGroup>
                    ),
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
            [theme, t],
        );
    }

    return useMemo(
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
        [t],
    );
};
