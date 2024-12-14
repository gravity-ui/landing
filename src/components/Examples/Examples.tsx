import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Flex} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useMemo, useState} from 'react';

import {block} from '../../utils';
import {TagItem, Tags} from '../Tags/Tags';

import './Examples.scss';
import {Dashboard} from './pages/Dashboard/Dashboard';
import {Email} from './pages/Email/Email';
import {HotelDetails} from './pages/HotelDetails/HotelDetails';
import {Landing} from './pages/Landing/Landing';
import {MarkdownEditor} from './pages/MarkdownEditor/MarkdownEditor';
import {TaskTracker} from './pages/TaskTracker/TaskTracker';
import {VmOverview} from './pages/VmOverview/VmOverview';

const b = block('examples');

enum ExampleTab {
    VmOverview = 'vmOverview',
    Email = 'email',
    HotelDetails = 'hotelDetails',
    TaskTracker = 'taskTracker',
    Dashboard = 'Dashboard',
    LandingPage = 'LandingPage',
    MarkdownEditor = 'MarkdownEditor',
}

const tabToComponent: Record<ExampleTab, React.ComponentType | undefined> = {
    [ExampleTab.VmOverview]: VmOverview,
    [ExampleTab.Email]: Email,
    [ExampleTab.HotelDetails]: HotelDetails,
    [ExampleTab.TaskTracker]: TaskTracker,
    [ExampleTab.Dashboard]: Dashboard,
    [ExampleTab.LandingPage]: Landing,
    [ExampleTab.MarkdownEditor]: MarkdownEditor,
};

interface ExamplesProps {}

export const Examples: React.FC<ExamplesProps> = () => {
    const {t} = useTranslation('examples');
    const [activeTab, setActiveTab] = useState<ExampleTab>(ExampleTab.VmOverview);

    const tags: TagItem<ExampleTab>[] = useMemo(
        () => [
            {
                value: ExampleTab.VmOverview,
                title: t('examples_vm-overview'),
            },
            {
                value: ExampleTab.Email,
                title: t('examples_email'),
            },
            {
                value: ExampleTab.HotelDetails,
                title: t('examples_hotel-details'),
            },
            {
                value: ExampleTab.TaskTracker,
                title: t('examples_task-tracker'),
            },
            {
                value: ExampleTab.Dashboard,
                title: t('examples_dashboard'),
            },
            {
                value: ExampleTab.LandingPage,
                title: t('examples_landing-page'),
            },
            {
                value: ExampleTab.MarkdownEditor,
                title: t('examples_markdown-editor'),
            },
        ],
        [t],
    );

    const TabComponent = tabToComponent[activeTab];

    return (
        <Grid className={b()}>
            <Row>
                <Col sizes={12} className={b('heading')}>
                    <h1 className={b('title')}>{t('examples:title')}</h1>
                </Col>
            </Row>
            <Row>
                <Col sizes={12}>
                    <Flex>
                        <Tags
                            className={b('tags')}
                            items={tags}
                            value={activeTab}
                            onChange={setActiveTab}
                        />
                    </Flex>

                    <Flex className={b('example-wrapper')}>
                        {TabComponent ? <TabComponent /> : null}
                    </Flex>
                </Col>
            </Row>
        </Grid>
    );
};