import {ArrowUpFromSquare} from '@gravity-ui/icons';
import {BREAKPOINTS, Grid, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ThemeExport} from 'src/components/Themes/ui/ThemeExport/ThemeExport';

import {block} from '../../utils';
import {TagItem, Tags} from '../Tags/Tags';

import './Themes.scss';
import {DEFAULT_THEME} from './lib/constants';
import {BorderRadiusTab} from './ui/BorderRadiusTab/BorderRadiusTab';
import {ColorsTab} from './ui/ColorsTab/ColorsTab';
import {PreviewTab} from './ui/PreviewTab/PreviewTab';
import {ThemeCreatorContextProvider} from './ui/ThemeCreatorContextProvider';
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

    const ThemeActionsButtons = useCallback(
        () => (
            <Flex direction="row" gap={2}>
                <Button className={b('theme-action-btn')} view="outlined-action" size="xl">
                    <Text>Импортировать тему</Text>
                </Button>
                <Button
                    className={b('theme-action-btn')}
                    view="action"
                    size="xl"
                    onClick={toggleExportDialog}
                >
                    <Icon data={ArrowUpFromSquare} />
                    <Text>{t('btn_export_theme')}</Text>
                </Button>
            </Flex>
        ),
        [],
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
                    {breakpoint >= BREAKPOINTS.md && <ThemeActionsButtons />}
                </Flex>
            </div>

            {breakpoint < BREAKPOINTS.md && (
                <div className={b('header-action-buttons')}>
                    <ThemeActionsButtons />
                </div>
            )}
            <Grid className={b('grid')}>
                <div className={b('grid__content')}>{TabComponent ? <TabComponent /> : null}</div>
            </Grid>

            <ThemeExport isOpen={isExportDialogVisible} onClose={toggleExportDialog} />
        </ThemeCreatorContextProvider>
    );
};
