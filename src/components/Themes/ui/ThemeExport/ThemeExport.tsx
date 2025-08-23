import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Alert, Flex, Link, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useMemo} from 'react';

import {useLocale} from '../../../../hooks/useLocale';
import {block} from '../../../../utils/block';
import {CodeExample} from '../../../CodeExample/CodeExample';
import {useThemeCreator} from '../../hooks';
import {
    APPLY_THEME_TEMPLATE,
    FIGMA_GRAVITY_THEMER_LINK,
    exportThemeForDialog,
} from '../../lib/themeCreatorExport';

import './ThemeExport.scss';
import {ThemeExportDialog} from './ThemeExportDialog';
import {ThemeExportSheet} from './ThemeExportSheet';
import type {ThemeExportProps} from './types';

const b = block('theme-export');

export type {ThemeExportProps} from './types';

export const ThemeExport = ({isOpen, onClose}: ThemeExportProps) => {
    const {t} = useTranslation('themes');
    const locale = useLocale();

    const themeState = useThemeCreator();
    const breakpoint = useWindowBreakpoint();

    const themeStylesCSS = useMemo(
        () => exportThemeForDialog({themeState, format: 'css'}),
        [themeState],
    );

    const onSaveThemeCSSClick = useCallback(() => {
        const blob = new Blob([themeStylesCSS]);

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'styles.css');

        link.click();
    }, [themeStylesCSS]);

    const onSaveThemeJSONClick = useCallback(() => {
        const themeStylesJSONString = exportThemeForDialog({themeState, format: 'json'});
        const blob = new Blob([themeStylesJSONString]);

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'styles.json');

        link.click();
    }, [themeState]);

    const ExportContent = useCallback(() => {
        return (
            <Flex direction="column" gap={4}>
                <Alert
                    theme="info"
                    title={t('export_theme_apply-theme-alert-title')}
                    message={
                        <div>
                            <Text variant="code-1" className={b('apply-theme-message')}>
                                {locale === 'ru'
                                    ? APPLY_THEME_TEMPLATE.ru
                                    : APPLY_THEME_TEMPLATE.en}
                            </Text>
                            <Link href={FIGMA_GRAVITY_THEMER_LINK} className={b('figma-link')}>
                                Gravity Themer Plugin
                            </Link>
                        </div>
                    }
                />
                <CodeExample code={themeStylesCSS} className={b('code')} />
            </Flex>
        );
    }, [themeStylesCSS]);

    return breakpoint >= BREAKPOINTS.sm ? (
        <ThemeExportDialog
            onClose={onClose}
            isOpen={isOpen}
            onSaveThemeCSSClick={onSaveThemeCSSClick}
            onSaveThemeJSONClick={onSaveThemeJSONClick}
            breakpoint={breakpoint}
        >
            <ExportContent />
        </ThemeExportDialog>
    ) : (
        <ThemeExportSheet
            onClose={onClose}
            isOpen={isOpen}
            onSaveThemeCSSClick={onSaveThemeCSSClick}
            onSaveThemeJSONClick={onSaveThemeJSONClick}
        >
            <ExportContent />
        </ThemeExportSheet>
    );
};
