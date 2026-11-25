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
    const actions = React.useContext(ThemeSubmitContext);
    const pullRequestUrl = actions?.pullRequestUrl;

    return (
        <ThemeSection title={t('is_everything_set')} className={b()}>
            <Flex gap={2} wrap className={b('actions')}>
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
                    href={pullRequestUrl ?? undefined}
                    target={pullRequestUrl ? '_blank' : undefined}
                    onClick={pullRequestUrl ? undefined : actions?.openSubmit}
                >
                    <Icon data={githubIcon} size={20} />
                    {t(pullRequestUrl ? 'btn_view_theme_pr' : 'btn_submit_theme')}
                </Button>
                {pullRequestUrl && (
                    <Button size="xl" className={b('export-button')} onClick={actions?.createTheme}>
                        {t('submit_theme_create_new_btn')}
                    </Button>
                )}
            </Flex>
            <ThemeExport isOpen={isDialogVisible} onClose={toggleDialog} />
        </ThemeSection>
    );
};
