import {Button, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {type PropsWithChildren} from 'react';

import {block} from '../../../../utils';
import {ThemeActionSheet} from '../ThemeActionSheet/ThemeActionSheet';

import type {ThemeExportProps} from './ThemeExport';
import './ThemeExport.scss';

export interface ThemeExportSheetProps extends ThemeExportProps, PropsWithChildren {
    onSaveThemeCSSClick: () => void;
    onSaveThemeJSONClick: () => void;
}

const b = block('theme-export__sheet');

export const ThemeExportSheet = ({
    isOpen,
    onClose,
    children,
    onSaveThemeCSSClick,
    onSaveThemeJSONClick,
}: ThemeExportSheetProps) => {
    const {t} = useTranslation('themes');

    return (
        <ThemeActionSheet
            open={isOpen}
            onClose={onClose}
            title={t('export_theme_config')}
            contentClassName={b('sheet-content')}
            bottomContentWrapperClassName={b('save-buttons')}
            children={children}
            bottomContent={
                <React.Fragment>
                    <Button size="xl" onClick={onSaveThemeJSONClick} view="outlined-action">
                        <Text>Save as JSON</Text>
                    </Button>
                    <Button size="xl" onClick={onSaveThemeCSSClick} view="action">
                        <Text>{t('export_theme_apply_btn')}</Text>
                    </Button>
                </React.Fragment>
            }
        />
    );
};
