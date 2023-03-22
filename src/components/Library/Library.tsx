import {Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, Tabs} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import issuesIcon from '../../assets/icons/about/issues.svg';
import lastUpdateIcon from '../../assets/icons/about/last-update.svg';
import licenseIcon from '../../assets/icons/about/license.svg';
import linkIcon from '../../assets/icons/about/link.svg';
import starIcon from '../../assets/icons/about/star.svg';
import versionIcon from '../../assets/icons/about/version.svg';
import githubIcon from '../../assets/icons/github.svg';
import storybookIcon from '../../assets/icons/storybook.svg';
import primaryLibBackroundLg from '../../assets/primary-lib-background-lg.svg';
import libsData from '../../libs-data.json';
import {libs} from '../../libs.mjs';
import {block} from '../../utils';

import './Library.scss';

const b = block('library');

enum Tab {
    Readme = 'readme',
    Changelog = 'changelog',
}

const githubUrl = 'https://github.com/';

type Props = {
    id: string;
};

export const Library: React.FC<Props> = ({id}) => {
    const libConfig = libs.find((item) => item.id === id);
    const libData = (libsData as unknown as any)[id];

    const [activeTab, setActiveTab] = React.useState(Tab.Readme);

    if (!libConfig || !libData) {
        return null;
    }

    const isPrimary = Boolean(libConfig.id === 'uikit' || libConfig.id === 'page-constructor');

    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={12}>
                        <div
                            className={b('header', {primary: isPrimary})}
                            style={
                                isPrimary
                                    ? {
                                          backgroundImage: `url(/${primaryLibBackroundLg})`,
                                      }
                                    : {}
                            }
                        >
                            <div className={b('breadcrumbs')}>
                                <Link href="/libraries">
                                    <a className={b('link')}>Libraries</a>
                                </Link>{' '}
                                / <HTML>{libConfig.title}</HTML>
                            </div>
                            <h1 className={b('title')}>
                                <HTML>{libConfig.title}</HTML>
                            </h1>
                            <div className={b('description')}>{libConfig.description}</div>
                            {libConfig.githubId || libConfig.storybookUrl ? (
                                <div className={b('buttons')}>
                                    {libConfig.githubId ? (
                                        <div key="github" className={b('button')}>
                                            <Button
                                                view="action"
                                                size="xl"
                                                href={`${githubUrl}${libConfig.githubId}`}
                                                target="_blank"
                                            >
                                                <Icon
                                                    className={b('button-icon')}
                                                    data={githubIcon}
                                                    size={16}
                                                />
                                                <span>Github</span>
                                            </Button>
                                        </div>
                                    ) : null}
                                    {libConfig.storybookUrl ? (
                                        <div key="storybook" className={b('button')}>
                                            <Button
                                                view="outlined"
                                                size="xl"
                                                href={libConfig.storybookUrl}
                                                target="_blank"
                                            >
                                                <Icon
                                                    className={b('button-icon')}
                                                    data={storybookIcon}
                                                    size={16}
                                                />
                                                <span>Storybook</span>
                                            </Button>
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sizes={8}>
                        <div className={b('block')}>
                            <Tabs
                                size="xl"
                                items={[
                                    {
                                        id: Tab.Readme,
                                        title: 'Readme',
                                    },
                                    {
                                        id: Tab.Changelog,
                                        title: 'Changelog',
                                    },
                                ]}
                                activeTab={activeTab}
                                onSelectTab={(selectedTab) => {
                                    setActiveTab(selectedTab as Tab);
                                }}
                            />
                            <div className={b('content')}>
                                <ReactMarkdown
                                    children={
                                        activeTab === Tab.Readme
                                            ? libData.readme
                                            : libData.changelog
                                    }
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sizes={4}>
                        <div className={b('block')}>
                            <div className={b('info')}>
                                <div className={b('info-title')}>About library</div>
                                <div className={b('info-list')}>
                                    <div className={b('info-item')}>
                                        <div className={b('info-item-icon')}>
                                            <Icon data={starIcon} size={22} />
                                        </div>
                                        <div className={b('info-item-content')}>
                                            <div className={b('info-item-title')}>Stars</div>
                                            <div className={b('info-item-value')}>
                                                {libData.stars}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={b('info-item')}>
                                        <div className={b('info-item-icon')}>
                                            <Icon data={versionIcon} size={22} />
                                        </div>
                                        <div className={b('info-item-content')}>
                                            <div className={b('info-item-title')}>Version</div>
                                            <div className={b('info-item-value')}>
                                                v{libData.version}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={b('info-item')}>
                                        <div className={b('info-item-icon')}>
                                            <Icon data={lastUpdateIcon} size={22} />
                                        </div>
                                        <div className={b('info-item-content')}>
                                            <div className={b('info-item-title')}>Last update</div>
                                            <div className={b('info-item-value')}>
                                                {libData.lastUpdate}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={b('info-item')}>
                                        <div className={b('info-item-icon')}>
                                            <Icon data={linkIcon} size={22} />
                                        </div>
                                        <div className={b('info-item-content')}>
                                            <div className={b('info-item-title')}>Repository</div>
                                            <div className={b('info-item-value')}>
                                                <a
                                                    href={`https://github.com/${libConfig.githubId}`}
                                                    target="_blank"
                                                    className={b('info-link')}
                                                >
                                                    github.com/{libConfig.githubId}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={b('info-item')}>
                                        <div className={b('info-item-icon')}>
                                            <Icon data={licenseIcon} size={22} />
                                        </div>
                                        <div className={b('info-item-content')}>
                                            <div className={b('info-item-title')}>License</div>
                                            <div className={b('info-item-value')}>
                                                {libData.license}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={b('info-item')}>
                                        <div className={b('info-item-icon')}>
                                            <Icon data={issuesIcon} size={22} />
                                        </div>
                                        <div className={b('info-item-content')}>
                                            <div className={b('info-item-title')}>Issues</div>
                                            <div className={b('info-item-value')}>
                                                {libData.issues}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Library;
