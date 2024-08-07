import {ArrowUpFromSquare} from 'landing-icons';
import {Button, Icon} from 'landing-uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {ThemeExportDialog} from '../ThemeExportDialog/ThemeExportDialog';
import {ThemeSection} from '../ThemeSection';

import './ExportThemeSection.scss';

const b = block('export-theme-section');

export const ExportThemeSection = () => {
    const {t} = useTranslation('themes');
    const [isDialogVisible, toggleDialog] = React.useReducer((isOpen) => !isOpen, false);

    return (
        <ThemeSection title="Is everything set?" className={b()}>
            <Button view="action" size="xl" className={b('export-button')} onClick={toggleDialog}>
                <Icon data={ArrowUpFromSquare} />
                {t('btn_export_theme')}
            </Button>
            <ThemeExportDialog isOpen={isDialogVisible} onClose={toggleDialog} />
        </ThemeSection>
    );
};
