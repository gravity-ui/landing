import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Alert, Flex, Text} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useMemo, useState} from 'react';

import {block} from '../../../../utils';
import {CodeExample} from '../../../CodeExample/CodeExample';
import {useThemeCreator} from '../../hooks';
import {
    APPLY_THEME_TEMPLATE,
    type ExportFormat,
    exportThemeForDialog,
} from '../../lib/themeCreatorExport';

import './ThemeExport.scss';
import {ThemeExportDialog} from './ThemeExportDialog';
import {ThemeExportSheet} from './ThemeExportSheet';

const b = block('theme-export');

export interface ThemeExportProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ThemeExport = ({isOpen, onClose}: ThemeExportProps) => {
    const {t} = useTranslation('themes');

    const themeState = useThemeCreator();
    const breakpoint = useWindowBreakpoint();

    //TODO: add more formats to import
    const [format] = useState<ExportFormat>('css');

    const themeStyles = useMemo(
        () => exportThemeForDialog({themeState, format}),
        [themeState, format],
    );

    const onSaveThemeClick = useCallback(() => {
        const blob = new Blob([themeStyles]);

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'custom.css');

        link.click();
    }, [themeStyles]);

    const ExportContent = useCallback(() => {
        return (
            <Flex direction="column" gap={4}>
                <Alert
                    theme="info"
                    title={t('export_theme_apply-theme-alert-title')}
                    message={
                        <Text variant="code-1" className={b('apply-theme-message')}>
                            {APPLY_THEME_TEMPLATE}
                        </Text>
                    }
                />
                <CodeExample code={themeStyles} className={b('code')} />
            </Flex>
        );
    }, [themeStyles]);

    return breakpoint >= BREAKPOINTS.sm ? (
        <ThemeExportDialog
            onClose={onClose}
            isOpen={isOpen}
            onSaveThemeClick={onSaveThemeClick}
            breakpoint={breakpoint}
        >
            <ExportContent />
        </ThemeExportDialog>
    ) : (
        <ThemeExportSheet onClose={onClose} isOpen={isOpen} onSaveThemeClick={onSaveThemeClick}>
            <ExportContent />
        </ThemeExportSheet>
    );
};
