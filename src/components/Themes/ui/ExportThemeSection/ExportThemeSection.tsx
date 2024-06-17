import {ArrowUpFromSquare} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {ThemeSection} from '../ThemeSection';

import './ExportThemeSection.scss';

const b = block('export-theme-section');

export const ExportThemeSection = () => {
    const {t} = useTranslation('themes');

    const handleExportTheme = React.useCallback(() => {
        // TODO
    }, []);

    return (
        <ThemeSection title={t('is_everything_set')} className={b()}>
            <Button
                view="action"
                size="xl"
                className={b('export-button')}
                onClick={handleExportTheme}
            >
                <Icon data={ArrowUpFromSquare} />
                {t('btn_export_theme')}
            </Button>
        </ThemeSection>
    );
};
