import {Button, Flex, Sheet, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {type PropsWithChildren} from 'react';

import {block} from '../../../../utils';

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
        <Sheet visible={isOpen} onClose={onClose} title={t('export_theme_config')} className={b()}>
            <Flex direction="column" className={b('sheet-content')}>
                {children}
                <Flex
                    direction="row"
                    gap={2}
                    justifyContent="center"
                    alignItems="center"
                    className={b('save-buttons')}
                >
                    <Button size="xl" onClick={onSaveThemeJSONClick} view="outlined-action">
                        <Text>Save as JSON</Text>
                    </Button>
                    <Button size="xl" onClick={onSaveThemeCSSClick} view="action">
                        <Text>{t('export_theme_apply_btn')}</Text>
                    </Button>
                </Flex>
            </Flex>
        </Sheet>
    );
};
