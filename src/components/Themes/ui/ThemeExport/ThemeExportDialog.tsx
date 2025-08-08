import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Button, Dialog, Flex, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {PropsWithChildren} from 'react';

import {block} from '../../../../utils';

import type {ThemeExportProps} from './ThemeExport';
import './ThemeExport.scss';

const b = block('theme-export');

interface ThemeExportDialogProps extends PropsWithChildren, ThemeExportProps {
    onSaveThemeCSSClick: () => void;
    onSaveThemeJSONClick: () => void;
    breakpoint: number;
}

const breakpointToSize = {
    [BREAKPOINTS.xl]: 'l' as const,
    [BREAKPOINTS.lg]: 'l' as const,
    [BREAKPOINTS.md]: 'm' as const,
    [BREAKPOINTS.sm]: 's' as const,
};

export const ThemeExportDialog: React.FC<ThemeExportDialogProps> = ({
    isOpen,
    onClose,
    onSaveThemeCSSClick,
    onSaveThemeJSONClick,
    breakpoint,
    children,
}) => {
    const {t} = useTranslation('themes');

    return (
        <Dialog
            className={b('dialog')}
            open={isOpen}
            onClose={onClose}
            size={breakpointToSize[breakpoint]}
        >
            <Dialog.Header caption={t('export_theme_config')} />
            <Dialog.Body>{children}</Dialog.Body>
            <Flex
                direction="row"
                gap={2}
                width="100%"
                justifyContent="flex-start"
                className={b('dialog-footer')}
            >
                <Button
                    className={b('theme-action-btn')}
                    onClick={onSaveThemeCSSClick}
                    view="action"
                    size="xl"
                >
                    <Text>{t('export_theme_apply_btn')}</Text>
                </Button>
                <Button
                    className={b('theme-action-btn')}
                    onClick={onSaveThemeJSONClick}
                    view="outlined-action"
                    size="xl"
                >
                    <Text>Save as JSON</Text>
                </Button>
            </Flex>
        </Dialog>
    );
};
