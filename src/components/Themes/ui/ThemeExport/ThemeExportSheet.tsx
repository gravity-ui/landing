import {Button, Flex, Sheet, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {type PropsWithChildren} from 'react';

import {block} from '../../../../utils';

import type {ThemeExportProps} from './ThemeExport';
import './ThemeExport.scss';

export interface ThemeExportSheetProps extends ThemeExportProps, PropsWithChildren {
    onSaveThemeClick: () => void;
}

const b = block('theme-export__sheet');

export const ThemeExportSheet = ({
    isOpen,
    onClose,
    children,
    onSaveThemeClick,
}: ThemeExportSheetProps) => {
    const {t} = useTranslation('themes');

    return (
        <Sheet visible={isOpen} onClose={onClose} title={t('export_theme_config')} className={b()}>
            <Flex direction="column">
                {children}
                <Button
                    size="xl"
                    onClick={onSaveThemeClick}
                    view="action"
                    className={b('save-btn')}
                >
                    <Text>Save custom.scss</Text>
                </Button>
            </Flex>
        </Sheet>
    );
};
