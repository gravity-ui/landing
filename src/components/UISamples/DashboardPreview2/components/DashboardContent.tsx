'use client';
import {Funnel, Plus} from '@gravity-ui/icons';
import {Button, Card, Col, Container, Flex, HelpMark, Icon, Row, Text} from '@gravity-ui/uikit';
import dynamic from 'next/dynamic';
import {useIsMobile} from 'src/hooks/useIsMobile';
import {block} from 'src/utils';

import {distributionMock} from '../data/distributionMock';
import {dynamicMock} from '../data/dynamicMock';
import {performanceMock} from '../data/performanceMock';
import {topItemsMock} from '../data/topItemsMock';

import './DashboardContent.scss';

const b = block('dashboard-example-content');

const Chart = dynamic(() => import('@gravity-ui/charts').then((mod) => mod.Chart), {ssr: false});

const activeUsersInfo: {type: 'Monthly' | 'Weekly' | 'Daily'; info?: string; count: string}[] = [
    {type: 'Monthly', info: 'Average active users in month', count: '120 001'},
    {type: 'Weekly', count: '14 519'},
    {type: 'Daily', count: '713'},
];

export const DashboardContent = () => {
    const isMobile = useIsMobile();

    return (
        <div className={b()}>
            <Flex direction="row">
                <Flex grow="1" direction="column">
                    <Text variant="subheader-3">Dashboard</Text>
                    <Text>Track the performance</Text>
                </Flex>
                <Flex gap="3">
                    <Button size="l" view="outlined">
                        <Icon size={16} data={Funnel} /> Filters
                    </Button>
                    <Button size="l" view="normal-contrast">
                        <Icon size={16} data={Plus} /> Add Widget
                    </Button>
                </Flex>
            </Flex>

            <Container style={{width: '100%', padding: 0, marginBlockStart: 20}} spaceRow={3}>
                <Row space={3}>
                    {activeUsersInfo.map((data, index) => (
                        <Col key={index}>
                            <Card className={b('card', {small: true})}>
                                <Flex direction="column" gap="2">
                                    <Flex alignItems="center">
                                        <Text variant="subheader-1">{data.type}</Text>
                                        {data.info ? (
                                            <HelpMark className={b('info')}>{data.info}</HelpMark>
                                        ) : null}
                                    </Flex>
                                    <Text
                                        variant={isMobile ? 'display-1' : 'display-3'}
                                        color="info"
                                    >
                                        {data.count}
                                    </Text>
                                </Flex>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row space={3}>
                    <Col style={{maxWidth: '60%'}}>
                        <Card className={b('card', {big: true})}>
                            <Text className={b('dashboard-title')} as="h1" variant="subheader-1">
                                Dynamic
                            </Text>
                            <div className={b('chart')}>
                                <Chart data={dynamicMock} />
                            </div>
                        </Card>
                    </Col>
                    <Col style={{maxWidth: '40%'}}>
                        <Card className={b('card', {big: true})}>
                            <Text className={b('dashboard-title')} as="h1" variant="subheader-1">
                                Performance
                            </Text>
                            <div className={b('chart')}>
                                <Chart data={performanceMock} />
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row space={3}>
                    <Col style={{maxWidth: '40%'}}>
                        <Card className={b('card', {big: true})}>
                            <Text className={b('dashboard-title')} as="h1" variant="subheader-1">
                                Top Items
                            </Text>
                            <div className={b('chart')}>
                                <Chart data={topItemsMock} />
                            </div>
                        </Card>
                    </Col>
                    <Col style={{maxWidth: '60%'}}>
                        <Card className={b('card', {big: true})}>
                            <Text className={b('dashboard-title')} as="h1" variant="subheader-1">
                                Distribution
                            </Text>
                            <div className={b('chart')}>
                                <Chart data={distributionMock} />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
