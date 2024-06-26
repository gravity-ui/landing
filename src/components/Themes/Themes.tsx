import {ArrowUpFromSquare} from '@gravity-ui/icons';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useMemo, useState} from 'react';

import {block} from '../../utils';
import {TagItem, Tags} from '../Tags/Tags';

import './Themes.scss';
import {DEFAULT_THEME} from './lib/constants';
import {BorderRadiusTab} from './ui/BorderRadiusTab/BorderRadiusTab';
import {ColorsTab} from './ui/ColorsTab/ColorsTab';
import {ThemeCreatorContextProvider} from './ui/ThemeCreatorContextProvider';

const b = block('themes');

enum ThemeTab {
    Colors = 'colors',
    Typography = 'typography',
    BorderRadius = 'borderRadius',
    Preview = 'preview',
}

const tabToComponent: Record<ThemeTab, React.ComponentType | undefined> = {
    [ThemeTab.Colors]: ColorsTab,
    [ThemeTab.Typography]: () => <div>TODO Typography</div>,
    [ThemeTab.BorderRadius]: BorderRadiusTab,
    [ThemeTab.Preview]: () => <div>TODO preview</div>,
};

export const Themes = () => {
    const {t} = useTranslation('themes');

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

    const [activeTab, setActiveTab] = useState<ThemeTab>(ThemeTab.Colors);

    const onExportButtonClick = useCallback(() => {
        //TODO add logic here
    }, []);

    const TabComponent = tabToComponent[activeTab];

    return (
        <ThemeCreatorContextProvider initialTheme={DEFAULT_THEME}>
            <Grid className={b()}>
                <Row className={b('title')}>
                    <Col sizes={12}>
                        <Text className={b('title__text')}>{t('title')}</Text>
                    </Col>
                </Row>
                <Flex className={b('header-actions')}>
                    <Tags
                        className={b('tabs')}
                        items={tags}
                        value={activeTab}
                        onChange={setActiveTab}
                    />

                    <Button
                        className={b('export-theme-btn')}
                        view="action"
                        size="xl"
                        onClick={onExportButtonClick}
                    >
                        <Icon data={ArrowUpFromSquare} />
                        <Text>{t('btn_export_theme')}</Text>
                    </Button>
                </Flex>

                <Row className={b('content')}>
                    <Col sizes={12}>{TabComponent ? <TabComponent /> : null}</Col>
                </Row>
            </Grid>
        </ThemeCreatorContextProvider>
    );
};
