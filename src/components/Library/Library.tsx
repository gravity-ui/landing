import {Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, Tabs} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';

// import issuesIcon from '../../assets/icons/issues.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import githubIcon from '../../assets/icons/github.svg';
import lastUpdateIcon from '../../assets/icons/last-update.svg';
import licenseIcon from '../../assets/icons/license.svg';
import linkIcon from '../../assets/icons/link.svg';
import starIcon from '../../assets/icons/star.svg';
import storybookIcon from '../../assets/icons/storybook.svg';
import versionIcon from '../../assets/icons/version.svg';
import {Lib, block} from '../../utils';
import {MDXRenderer} from '../MDXRenderer/MDXRenderer';

import './Library.scss';

const b = block('library');

enum Tab {
    Readme = 'readme',
    Changelog = 'changelog',
}

const GITHUB_URL = 'https://github.com/';

type Props = {
    lib: Lib;
};

export const Library: React.FC<Props> = ({lib}) => {
    const contentTabs = [
        {
            id: Tab.Readme,
            title: 'Readme',
        },
    ];

    if (lib.data.changelog) {
        contentTabs.push({
            id: Tab.Changelog,
            title: 'Changelog',
        });
    }

    const infoList = [
        {
            id: 'stars',
            title: 'Stars',
            value: lib.data.stars,
            icon: starIcon,
        },
        {
            id: 'version',
            title: 'Version',
            value: lib.data.version || '–',
            icon: versionIcon,
        },
        {
            id: 'lastUpdate',
            title: 'Last update',
            value: lib.data.lastUpdate || '–',
            icon: lastUpdateIcon,
        },
        {
            id: 'repository',
            title: 'Repository',
            link: `https://github.com/${lib.config.githubId}`,
            value: `github.com/${lib.config.githubId}`,
            icon: linkIcon,
        },
        {
            id: 'license',
            title: 'License',
            value: lib.data.license || '–',
            icon: licenseIcon,
        },
        // {
        //     id: 'issues',
        //     title: 'Issues',
        //     value: lib.data.issues,
        //     icon: issuesIcon,
        // },
    ];

    const [activeTab, setActiveTab] = React.useState(contentTabs[0].id);

    const [isVisibleInfoListMobile, setIsVisibleInfoListMobile] = React.useState(false);

    const isPrimary = lib.config.primary;

    return (
        <div className={b()}>
            <Grid className={b('header-grid')}>
                <Row>
                    <Col sizes={12}>
                        <div className={b('header', {primary: isPrimary})}>
                            <div className={b('breadcrumbs')}>
                                <Link href="/libraries">
                                    <a className={b('breadcrumbs-link')}>Libraries</a>
                                </Link>{' '}
                                / <HTML className={b('breadcrumbs-item')}>{lib.config.title}</HTML>
                            </div>

                            <h1 className={b('title')}>
                                <HTML>{lib.config.title}</HTML>
                            </h1>

                            <div className={b('description')}>{lib.config.description}</div>

                            {lib.config.githubId || lib.config.storybookUrl ? (
                                <div className={b('buttons')}>
                                    {lib.config.id === 'icons' && (
                                        <Button
                                            key="icons"
                                            className={b('button')}
                                            view="action"
                                            size="xl"
                                            href="/icons"
                                            target="_blank"
                                        >
                                            Go to icons
                                        </Button>
                                    )}
                                    {lib.config.githubId ? (
                                        <Button
                                            key="github"
                                            className={b('button')}
                                            view={lib.config.id === 'icons' ? 'outlined' : 'action'}
                                            size="xl"
                                            href={`${GITHUB_URL}${lib.config.githubId}`}
                                            target="_blank"
                                        >
                                            <Icon
                                                className={b('button-icon')}
                                                data={githubIcon}
                                                size={16}
                                            />
                                            <span>Github</span>
                                        </Button>
                                    ) : null}
                                    {lib.config.id !== 'icons' && lib.config.storybookUrl ? (
                                        <Button
                                            key="storybook"
                                            className={b('button')}
                                            view="outlined"
                                            size="xl"
                                            href={lib.config.storybookUrl}
                                            target="_blank"
                                        >
                                            <Icon
                                                className={b('button-icon')}
                                                data={storybookIcon}
                                                size={16}
                                            />
                                            <span>Storybook</span>
                                        </Button>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col sizes={{all: 12, lg: 8}} orders={{all: 2, lg: 1}}>
                        <div className={b('block')}>
                            <Tabs
                                size="xl"
                                items={contentTabs}
                                activeTab={activeTab}
                                onSelectTab={(selectedTab) => {
                                    setActiveTab(selectedTab as Tab);
                                }}
                            />
                            <div className={b('content')}>
                                <MDXRenderer
                                    text={
                                        activeTab === Tab.Readme
                                            ? lib.data.readme
                                            : lib.data.changelog
                                    }
                                    absoluteImgPath={`https://raw.githubusercontent.com/${lib.config.githubId}/${lib.config.mainBranch}/`}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col sizes={{all: 12, lg: 4}} orders={{all: 1, lg: 2}}>
                        <div className={b('block', {about: true})}>
                            <div className={b('info')}>
                                <div
                                    className={b('info-title')}
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => {
                                        setIsVisibleInfoListMobile(!isVisibleInfoListMobile);
                                    }}
                                >
                                    <div className={b('info-title-text')}>About library</div>
                                    <div
                                        className={b('info-title-icon', {
                                            'mobile-visible': isVisibleInfoListMobile,
                                        })}
                                    >
                                        <Icon data={arrowIcon} width={10} height={6} />
                                    </div>
                                </div>
                                <div
                                    className={b('info-list', {
                                        'mobile-visible': isVisibleInfoListMobile,
                                    })}
                                >
                                    {infoList.map((item) => {
                                        const content = (
                                            <React.Fragment>
                                                <div className={b('info-item-icon')}>
                                                    <Icon data={item.icon} size={20} />
                                                </div>
                                                <div className={b('info-item-content')}>
                                                    <div className={b('info-item-title')}>
                                                        {item.title}
                                                    </div>
                                                    <div className={b('info-item-value')}>
                                                        {item.value}
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        );

                                        if (item.link) {
                                            return (
                                                <a
                                                    key={item.id}
                                                    className={b('info-item', {link: true})}
                                                    target="_blank"
                                                    href={item.link}
                                                >
                                                    {content}
                                                    <div className={b('info-item-arrow-wrapper')}>
                                                        <div className={b('info-item-arrow')}>
                                                            <Icon
                                                                data={arrowIcon}
                                                                width={10}
                                                                height={6}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            );
                                        }

                                        return (
                                            <div key={item.id} className={b('info-item')}>
                                                {content}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};
