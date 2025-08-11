import {Button, Flex, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {PropsWithChildren} from 'react';

import {block} from '../../../../utils';
import {ThemeActionDialog} from '../ThemeActionDialog/ThemeActionDialog';

import type {ThemeExportProps} from './ThemeExport';
import './ThemeExport.scss';

const b = block('theme-export');

interface ThemeExportDialogProps extends PropsWithChildren, ThemeExportProps {
    onSaveThemeCSSClick: () => void;
    onSaveThemeJSONClick: () => void;
    breakpoint: number;
}
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
        <ThemeActionDialog
            open={isOpen}
            onClose={onClose}
            breakpoint={breakpoint}
            title={t('export_theme_config')}
            children={children}
            bottomContent={
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
            }
        />
    );
};
