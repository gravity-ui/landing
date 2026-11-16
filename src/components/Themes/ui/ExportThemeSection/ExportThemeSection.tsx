import {ArrowUpFromSquare} from '@gravity-ui/icons';
import {Button, Flex, Icon} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import githubIcon from '../../../../assets/icons/github.svg';
import {block} from '../../../../utils';
import {ThemeExport} from '../ThemeExport/ThemeExport';
import {ThemeSection} from '../ThemeSection';
import {ThemeSubmitContext} from '../ThemeSubmit/ThemeSubmitContext';

import './ExportThemeSection.scss';

const b = block('export-theme-section');

export const ExportThemeSection = () => {
    const {t} = useTranslation('themes');
    const [isDialogVisible, toggleDialog] = React.useReducer((isOpen) => !isOpen, false);
    const openSubmit = React.useContext(ThemeSubmitContext);

    return (
        <ThemeSection title={t('is_everything_set')} className={b()}>
            <Flex gap={2} wrap>
                <Button
                    view="action"
                    size="xl"
                    className={b('export-button')}
                    onClick={toggleDialog}
                >
                    <Icon data={ArrowUpFromSquare} />
                    {t('btn_export_theme')}
                </Button>
                <Button
                    view="outlined-action"
                    size="xl"
                    className={b('export-button')}
                    onClick={openSubmit ?? undefined}
                >
                    <Icon data={githubIcon} size={20} />
                    {t('btn_submit_theme')}
                </Button>
            </Flex>
            <ThemeExport isOpen={isDialogVisible} onClose={toggleDialog} />
        </ThemeSection>
    );
};
