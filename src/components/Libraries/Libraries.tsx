import {Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Icon, TextInput} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import calendarIcon from '../../assets/icons/calendar.svg';
import starIcon from '../../assets/icons/star.svg';
import versionIcon from '../../assets/icons/version.svg';
import {block, getLibsList} from '../../utils';
import {Link} from '../Link';

import './Libraries.scss';
import {TagItem, Tags} from './Tags/Tags';

const b = block('libraries');

export const Libraries = () => {
    const {t} = useTranslation();

    const tags: TagItem[] = [
        {
            value: 'all',
            title: t('libraries:tags_all'),
        },
        {
            value: 'ui',
            title: t('libraries:tags_ui'),
        },
        {
            value: 'nodejs',
            title: t('libraries:tags_nodejs'),
        },
        {
            value: 'infrastructure',
            title: t('libraries:tags_infrastructure'),
        },
    ];

    const [activeTag, setActivaTag] = React.useState(tags[0].value);
    const [filterString, setFilterString] = React.useState('');

    const libs = getLibsList();

    let filteredLibs =
        activeTag === 'all' ? libs : libs.filter((item) => item.config.tags.includes(activeTag));

    if (filterString) {
        const lowerCaseFilterString = filterString.toLowerCase();
        filteredLibs = filteredLibs.filter(
            (item) =>
                item.config.title.toLowerCase().includes(lowerCaseFilterString) ||
                t(`libraries-info:description_${item.config.id}`)
                    .toLowerCase()
                    .includes(lowerCaseFilterString),
        );
    }

    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={12}>
                        <h1 className={b('title')}>{t('libraries:header')}</h1>
                    </Col>
                </Row>
                <Row className={b('filters')}>
                    <Col sizes={{all: 12, md: 8, lg: 9}}>
                        <Tags items={tags} value={activeTag} onChange={setActivaTag} />
                    </Col>
                    <Col sizes={{all: 12, md: 4, lg: 3}}>
                        <div className={b('search')}>
                            <TextInput
                                value={filterString}
                                onUpdate={setFilterString}
                                size="xl"
                                placeholder={t('libraries:searchPlaceholder')}
                                hasClear
                            />
                        </div>
                    </Col>
                </Row>
                {filteredLibs.length === 0 ? (
                    <div className={b('empty')}>{t('libraries:empty')}</div>
                ) : (
                    <Row>
                        {filteredLibs.map((lib) => {
                            return (
                                <Col
                                    key={lib.config.id}
                                    className={b('col')}
                                    sizes={{all: 12, md: 6, lg: 4}}
                                >
                                    <Link
                                        href={`/libraries/${lib.config.id}`}
                                        className={b('library', {
                                            primary: lib.config.primary,
                                        })}
                                    >
                                        <div className={b('library-header')}>
                                            <h5 className={b('library-title')}>
                                                <HTML>{lib.config.title}</HTML>
                                            </h5>
                                            {lib.data.stars ? (
                                                <div className={b('stars')}>
                                                    <Icon data={starIcon} size={19} />
                                                    <div className={b('stars-count')}>
                                                        {lib.data.stars}
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className={b('description')}>
                                            {t(`libraries-info:description_${lib.config.id}`)}
                                        </div>

                                        {lib.config.npmId && lib.data.version ? (
                                            <div className={b('release-info')}>
                                                <div className={b('release-info-block')}>
                                                    <Icon data={versionIcon} size={16} />
                                                    <div className={b('release-version')}>
                                                        v{lib.data.version}
                                                    </div>
                                                </div>
                                                {lib.data.lastUpdate ? (
                                                    <div className={b('release-info-block')}>
                                                        <Icon data={calendarIcon} size={16} />
                                                        <div className={b('release-date')}>
                                                            {lib.data.lastUpdate}
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                        ) : null}
                                    </Link>
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Grid>
        </div>
    );
};
