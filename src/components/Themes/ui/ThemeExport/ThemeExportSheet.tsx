import {Button, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {type PropsWithChildren} from 'react';

import {sendAnalyticsEvent} from '../../../../utils/analytics';
import {block} from '../../../../utils/block';
import {ThemeActionSheet} from '../ThemeActionSheet/ThemeActionSheet';

import './ThemeExport.scss';
import type {ThemeExportProps} from './types';

export interface ThemeExportSheetProps extends ThemeExportProps, PropsWithChildren {
    onSaveThemeCSSClick: () => void;
    onSaveThemeJSONClick: () => void;
    storybookThemeLink: string;
}

const b = block('theme-export__sheet');

export const ThemeExportSheet = ({
    isOpen,
    onClose,
    children,
    onSaveThemeCSSClick,
    onSaveThemeJSONClick,
    storybookThemeLink,
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
                    <Button
                        size="xl"
                        onClick={onSaveThemeJSONClick}
                        view="outlined-action"
                        className={b('save-button')}
                    >
                        <Text>Save as JSON</Text>
                    </Button>
                    <Button
                        size="xl"
                        onClick={onSaveThemeCSSClick}
                        view="action"
                        className={b('save-button')}
                    >
                        <Text>Save as CSS</Text>
                    </Button>
                    <Button
                        size="xl"
                        href={storybookThemeLink}
                        target="_blank"
                        view="outlined-action"
                        className={b('save-button')}
                        onClick={() => sendAnalyticsEvent('theme_export', 'storybook')}
                    >
                        <Text>{t('export_theme_open_storybook')}</Text>
                    </Button>
                </React.Fragment>
            }
        />
    );
};
