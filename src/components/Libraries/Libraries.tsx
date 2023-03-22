import {Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Icon, Label, TextInput} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

import calendarIcon from '../../assets/icons/calendar.svg';
import starIcon from '../../assets/icons/star.svg';
import primaryLibBackround from '../../assets/primary-lib-background.svg';
import libsData from '../../libs-data.json';
import {libs} from '../../libs.mjs';
import {block} from '../../utils';

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

const githubUrl = 'https://github.com/';

export const Libraries = () => {
    const [activeTag, setActivaTag] = React.useState(tags[0].value);

    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={12}>
                        <h1 className={b('title')}>Our libraries</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sizes={9}>
                        <Tags items={tags} value={activeTag} onChange={setActivaTag} />
                    </Col>
                    <Col sizes={3}>
                        <TextInput size="xl" placeholder="Search by name or description" />
                    </Col>
                </Row>
                <Row>
                    {libs.map((libConfig) => {
                        const libData = (libsData as unknown as any)[libConfig.id];
                        const isPrimary = Boolean(
                            libConfig.id === 'uikit' || libConfig.id === 'page-constructor',
                        );
                        return (
                            <Col sizes={4} key={libConfig.id}>
                                <Link href={`/libraries/${libConfig.id}`}>
                                    <a
                                        className={b('library', {
                                            active: Boolean(
                                                libConfig.githubId || libConfig.storybookUrl,
                                            ),
                                            primary: isPrimary,
                                        })}
                                        style={
                                            isPrimary
                                                ? {
                                                      backgroundImage: `url(/${primaryLibBackround})`,
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className={b('library-header')}>
                                            <h5 className={b('library-title')}>
                                                <HTML>{libConfig.title}</HTML>
                                            </h5>
                                            {libData.stars ? (
                                                <div className={b('stars')}>
                                                    <Icon data={starIcon} size={19} />
                                                    <div className={b('stars-count')}>
                                                        {libData.stars}
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className={b('text')}>{libConfig.description}</div>

                                        {libConfig.npmId ? (
                                            <div className={b('release-info')}>
                                                {libData.version && (
                                                    <React.Fragment>
                                                        <Label className={b('release-label')}>
                                                            v{libData.version}
                                                        </Label>
                                                        {libData.lastUpdate ? (
                                                            <React.Fragment>
                                                                <Icon
                                                                    data={calendarIcon}
                                                                    size={16}
                                                                />
                                                                <div className={b('release-date')}>
                                                                    {libData.lastUpdate}
                                                                </div>
                                                            </React.Fragment>
                                                        ) : null}
                                                    </React.Fragment>
                                                )}
                                            </div>
                                        ) : null}

                                        {libConfig.githubId || libConfig.storybookUrl ? (
                                            <div className={b('buttons')}>
                                                {libConfig.githubId ? (
                                                    <a
                                                        key="github"
                                                        className={b('button')}
                                                        href={`${githubUrl}${libConfig.githubId}`}
                                                        target="_blank"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        Github
                                                    </a>
                                                ) : null}
                                                {libConfig.storybookUrl ? (
                                                    <a
                                                        key="storybook"
                                                        className={b('button')}
                                                        href={libConfig.storybookUrl}
                                                        target="_blank"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        Storybook
                                                    </a>
                                                ) : null}
                                            </div>
                                        ) : null}
                                    </a>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Grid>
        </div>
    );
};
