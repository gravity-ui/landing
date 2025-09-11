import {Button} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {PropsWithChildren} from 'react';

import {block} from '../../../../utils/block';
import {ThemeActionSheet} from '../ThemeActionSheet/ThemeActionSheet';

import './ThemeImport.scss';
import type {ThemeImportProps} from './types';

const b = block('theme-import__sheet');

export interface ThemeImportSheetProps extends ThemeImportProps, PropsWithChildren {
    onImportThemeClick: () => void;
    isImportButtonDisabled: boolean;
}

export const ThemeImportSheet = ({
    isOpen,
    onClose,
    children,
    onImportThemeClick,
    isImportButtonDisabled,
}: ThemeImportSheetProps) => {
    const {t} = useTranslation('themes');

    return (
        <ThemeActionSheet
            open={isOpen}
            onClose={onClose}
            title="Import theme"
            contentClassName={b('content')}
            bottomContentWrapperClassName={b('import-button-wrapper')}
            children={children}
            bottomContent={
                <Button
                    size="xl"
                    onClick={onImportThemeClick}
                    view="action"
                    className={b('import-button')}
                    disabled={isImportButtonDisabled}
                >
                    {t('btn_import_theme')}
                </Button>
            }
        />
    );
};
