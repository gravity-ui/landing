import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Dialog, DialogFooter} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {PropsWithChildren} from 'react';

import {block} from '../../../../utils';

import type {ThemeExportProps} from './ThemeExport';
import './ThemeExport.scss';

const b = block('theme-export');

interface ThemeExportDialogProps extends PropsWithChildren, ThemeExportProps {
    onSaveThemeClick: () => void;
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
    onSaveThemeClick,
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
            <DialogFooter
                textButtonCancel={t('export_theme_cancel_btn')}
                textButtonApply={t('export_theme_apply_btn')}
                onClickButtonApply={onSaveThemeClick}
                onClickButtonCancel={onClose}
            />
        </Dialog>
    );
};
