import {Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Icon, TextInput} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

import calendarIcon from '../../assets/icons/calendar.svg';
import starIcon from '../../assets/icons/star.svg';
import versionIcon from '../../assets/icons/version.svg';
import {block, getLibsList} from '../../utils';

import './Libraries.scss';
import {TagItem, Tags} from './Tags/Tags';

const b = block('libraries');

const tags: TagItem[] = [
    {
        value: 'all',
        title: 'All',
    },
    {
        value: 'ui',
        title: 'UI',
    },
    {
        value: 'nodejs',
        title: 'Node.js',
    },
    {
        value: 'infrastructure',
        title: 'Infrastructure',
    },
];

export const Libraries = () => {
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
                item.config.description.toLowerCase().includes(lowerCaseFilterString),
        );
    }

    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={12}>
                        <h1 className={b('title')}>Our libraries</h1>
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
                                placeholder="Search by name or description"
                                hasClear
                            />
                        </div>
                    </Col>
                </Row>
                {filteredLibs.length === 0 ? (
                    <div className={b('empty')}>Nothing found</div>
                ) : (
                    <Row>
                        {filteredLibs.map((lib) => {
                            return (
                                <Col
                                    key={lib.config.id}
                                    className={b('col')}
                                    sizes={{all: 12, md: 6, lg: 4}}
                                >
                                    <Link href={`/libraries/${lib.config.id}`}>
                                        <a
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
                                                {lib.config.description}
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
                                        </a>
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
