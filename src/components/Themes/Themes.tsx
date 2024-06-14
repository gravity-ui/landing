import {ArrowUpFromSquare} from '@gravity-ui/icons';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, Flex, Icon, Text, ThemeProvider} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useMemo, useState} from 'react';

import {DEFAULT_THEME} from '../../constants';
import {block} from '../../utils';
import {TagItem, Tags} from '../Tags/Tags';

import {ThemeSection} from './ThemeSection/ThemeSection';
import './Themes.scss';
import {ThemeSectionType} from './types';

const b = block('themes');

export const Themes = () => {
    const {t} = useTranslation('themes');

    const tags: TagItem[] = useMemo(
        () => [
            {
                value: ThemeSectionType.Colors,
                title: t('tags_colors'),
            },
            {
                value: ThemeSectionType.Typography,
                title: t('tags_typography'),
            },
            {
                value: ThemeSectionType.BorderRadius,
                title: t('tags_borderRadius'),
            },
            {
                value: ThemeSectionType.Preview,
                title: t('tags_preview'),
            },
        ],
        [t],
    );

    const [activeTag, setActiveTag] = useState<string>(tags[0].value);

    const onExportButtonClick = useCallback(() => {
        //TODO add logic here
    }, []);

    return (
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
                    value={activeTag}
                    onChange={setActiveTag}
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
                <Col sizes={12}>
                    {/*TODO: need to pass correct theme from context*/}
                    <ThemeProvider theme={DEFAULT_THEME} scoped>
                        <ThemeSection sectionType={activeTag as ThemeSectionType} />
                    </ThemeProvider>
                </Col>
            </Row>
        </Grid>
    );
};
