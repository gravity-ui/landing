import {BREAKPOINTS, Grid, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {ArrowUpFromSquare} from 'landing-icons';
import {Button, Flex, Icon, Text} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {block} from '../../utils';
import {TagItem, Tags} from '../Tags/Tags';

import './Themes.scss';
import {DEFAULT_THEME} from './lib/constants';
import {BorderRadiusTab} from './ui/BorderRadiusTab/BorderRadiusTab';
import {ColorsTab} from './ui/ColorsTab/ColorsTab';
import {PreviewTab} from './ui/PreviewTab/PreviewTab';
import {ThemeCreatorContextProvider} from './ui/ThemeCreatorContextProvider';
import {ThemeExportDialog} from './ui/ThemeExportDialog/ThemeExportDialog';
import {TypographyTab} from './ui/TypographyTab/TypographyTab';

const b = block('themes');

enum ThemeTab {
    Colors = 'colors',
    Typography = 'typography',
    BorderRadius = 'borderRadius',
    Preview = 'preview',
}

const tabToComponent: Record<ThemeTab, React.ComponentType | undefined> = {
    [ThemeTab.Colors]: ColorsTab,
    [ThemeTab.Typography]: TypographyTab,
    [ThemeTab.BorderRadius]: BorderRadiusTab,
    [ThemeTab.Preview]: PreviewTab,
};

export const Themes = () => {
    const {t} = useTranslation('themes');
    const breakpoint = useWindowBreakpoint();

    const headerRef = useRef<HTMLDivElement>(null);

    const [isExportDialogVisible, toggleExportDialog] = React.useReducer(
        (isOpen) => !isOpen,
        false,
    );

    const tags: TagItem<ThemeTab>[] = useMemo(
        () => [
            {
                value: ThemeTab.Colors,
                title: t('tags_colors'),
            },
            {
                value: ThemeTab.Typography,
                title: t('tags_typography'),
            },
            {
                value: ThemeTab.BorderRadius,
                title: t('tags_borderRadius'),
            },
            {
                value: ThemeTab.Preview,
                title: t('tags_preview'),
            },
        ],
        [t],
    );

    useEffect(() => {
        const contentEl = document.getElementsByClassName(
            'gravity-ui-landing-layout__wrapper',
        )?.[0];

        if (!contentEl) {
            return;
        }

        const onScroll = () => {
            console.log('headerRef?.current?.offsetTop', headerRef?.current?.offsetTop);
            if (headerRef?.current?.offsetTop && headerRef.current.offsetTop > 136) {
                headerRef.current?.classList.add(b('header-actions-wrapper_sticky'));
            } else {
                headerRef.current?.classList.remove(b('header-actions-wrapper_sticky'));
            }
        };
        contentEl.addEventListener('scroll', onScroll);

        return () => {
            contentEl.removeEventListener('scroll', onScroll);
        };
    }, []);

    const [activeTab, setActiveTab] = useState<ThemeTab>(ThemeTab.Colors);

    const TabComponent = tabToComponent[activeTab];

    const ExportBtn = useCallback(
        () => (
            <Button
                className={b('export-theme-btn')}
                view="action"
                size="xl"
                onClick={toggleExportDialog}
            >
                <Icon data={ArrowUpFromSquare} />
                <Text>{t('btn_export_theme')}</Text>
            </Button>
        ),
        [toggleExportDialog],
    );

    return (
        <ThemeCreatorContextProvider initialTheme={DEFAULT_THEME}>
            <div className={b('title')}>
                <Text className={b('title__text')}>{t('title')}</Text>
            </div>
            <div className={b('header-actions-wrapper')} ref={headerRef}>
                <Flex className={b('header-actions')}>
                    <Tags
                        className={b('tags')}
                        items={tags}
                        value={activeTab}
                        onChange={setActiveTab}
                    />
                    {breakpoint >= BREAKPOINTS.md && <ExportBtn />}
                </Flex>
            </div>

            {breakpoint < BREAKPOINTS.md && (
                <div className={b('header-action-buttons')}>
                    <ExportBtn />
                </div>
            )}
            <Grid className={b('grid')}>
                <div className={b('grid__content')}>{TabComponent ? <TabComponent /> : null}</div>
            </Grid>

            <ThemeExportDialog isOpen={isExportDialogVisible} onClose={toggleExportDialog} />
        </ThemeCreatorContextProvider>
    );
};
