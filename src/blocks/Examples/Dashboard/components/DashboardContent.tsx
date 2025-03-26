'use client';
import {settings} from '@gravity-ui/chartkit';
import {HighchartsPlugin} from '@gravity-ui/chartkit/highcharts';
import {Funnel, Plus} from '@gravity-ui/icons';
import {
    Button,
    Card,
    Col,
    Container,
    Flex,
    HelpMark,
    Icon,
    Loader,
    Row,
    Text,
} from '@gravity-ui/uikit';
import dynamic from 'next/dynamic';
import {block} from 'src/utils';

import {distributionMock} from '../__mocks__/distributionMock';
import {dynamicMock} from '../__mocks__/dynamicMock';
import {topItemsMock} from '../__mocks__/topItemsMock';

import './DashboardContent.scss';

const b = block('dashboard-example-content');

settings.set({plugins: [HighchartsPlugin]});
const ChartKit = dynamic(() => import('@gravity-ui/chartkit'), {
    loading: () => <Loader />,
    ssr: false,
});

const activeUsersInfo: {type: 'Monthly' | 'Weekly' | 'Daily'; info?: string; count: string}[] = [
    {type: 'Monthly', info: 'Average active users in month', count: '120 001'},
    {type: 'Weekly', count: '14 519'},
    {type: 'Daily', count: '713'},
];

export const DashboardContent = () => {
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

            <Container style={{width: '100%', padding: 0, marginBlockStart: 16}} spaceRow={3}>
                <Row space={3}>
                    {activeUsersInfo.map((data, index) => (
                        <Col key={index}>
                            <Card className={b('card')}>
                                <Flex direction="column" gap="2">
                                    <div>
                                        <Text variant="subheader-1">{data.type}</Text>
                                        {data.info ? (
                                            <HelpMark className={b('info')}>{data.info}</HelpMark>
                                        ) : null}
                                    </div>
                                    <Text variant="display-4" color="info">
                                        {data.count}
                                    </Text>
                                </Flex>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row space={2}>
                    <Col style={{maxWidth: '60%'}}>
                        <Card className={b('card')}>
                            <Text className={b('dashboard-title')} as="h1" variant="subheader-1">
                                Dynamic
                            </Text>
                            <ChartKit id="1" type="highcharts" data={dynamicMock} />
                        </Card>
                    </Col>
                    <Col style={{maxWidth: '40%'}}>
                        <Card className={b('card')}>
                            <Text className={b('dashboard-title')} as="h1" variant="subheader-1">
                                Top items
                            </Text>
                            <ChartKit id="2" type="highcharts" data={topItemsMock} />
                        </Card>
                    </Col>
                </Row>
                <Row space={1}>
                    <Col style={{flexBasis: '60%'}}>
                        <Card className={b('card')}>
                            <Text className={b('dashboard-title')} as="h1" variant="subheader-1">
                                Distribution
                            </Text>
                            <ChartKit id="3" type="highcharts" data={distributionMock} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
