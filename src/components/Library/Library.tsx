import {Col, Grid, HTML, Row} from '@gravity-ui/page-constructor';
import {Tabs} from '@gravity-ui/uikit';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import libsData from '../../libs-data.json';
import {libs} from '../../libs.mjs';
import {block} from '../../utils';

import './Library.scss';

const b = block('library');

enum Tab {
    Readme = 'readme',
    Changelog = 'changelog',
}

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

    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={12}>
                        <div className={b('block', {header: true})}>
                            <div className={b('breadcrumbs')}>
                                <Link href="/libraries">
                                    <a className={b('link')}>Libraries</a>
                                </Link>{' '}
                                / <HTML>{libConfig.title}</HTML>
                            </div>
                            <h1 className={b('title')}>
                                <HTML>{libConfig.title}</HTML>
                            </h1>
                            <div>{libConfig.description}</div>
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
                            <ReactMarkdown
                                children={
                                    activeTab === Tab.Readme ? libData.readme : libData.changelog
                                }
                            />
                        </div>
                    </Col>
                    <Col sizes={4}>
                        <div className={b('block')}>
                            <div>About library</div>
                            <div className={b('props')}>
                                <div>Stars: {libData.stars}</div>
                                <div>Version: {libData.version}</div>
                                <div>Last update: {libData.lastUpdate}</div>
                                <div>Repository: github.com/{libConfig.githubId}</div>
                                <div>License: {libData.license || '–'}</div>
                                <div>Issues: {libData.issues}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Library;
