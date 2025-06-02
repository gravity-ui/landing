import ChartKit, {settings} from '@gravity-ui/chartkit';
import {D3Plugin} from '@gravity-ui/chartkit/d3';
import {Card, Col, Container, Flex, Row, Text} from '@gravity-ui/uikit';
import React, {PropsWithChildren} from 'react';
import {block} from 'src/utils';

import {
    areaDashboardData,
    barXDashboardData,
    dotsDashboardData,
    linesDashboardData,
    pieDashboardData,
} from '../constants';

import './DashboardPreview.scss';

interface StyleCardProps extends PropsWithChildren {}

settings.set({plugins: [D3Plugin]});

const b = block('dashboards-preview');

const StyledCard = ({children}: StyleCardProps) => {
    return (
        <Card view="filled" className={b('card')}>
            {children}
        </Card>
    );
};

export const DashboardPreview = () => {
    return (
        <Flex direction="column" gap={4} className={b()}>
            <Text variant="header-1">Dashboard</Text>
            <Flex direction="column" gap={5} gapRow={5} width="100%">
                <StyledCard>
                    <Flex direction="column" gap={5}>
                        <Text variant="subheader-3">About</Text>

                        <Text variant="body-1">
                            A dashboard is a visual representation of key performance indicators
                            (KPIs) that helps businesses monitor and analyze their performance in
                            real time. It typically includes graphs, charts, and tables that
                            summarize data from multiple sources, such as financial reports,
                            customer surveys, and operational metrics. Dashboards allow businesses
                            to quickly identify trends and opportunities for improvement, making
                            them a valuable tool for decision-making and strategy development.
                        </Text>
                    </Flex>
                </StyledCard>
                <Container style={{width: '100%', padding: 0}} spaceRow={5}>
                    <Row space={5}>
                        {[barXDashboardData, linesDashboardData, areaDashboardData].map(
                            (data, index) => (
                                <Col s="12" m="6" l="4" key={index}>
                                    <StyledCard key={index}>
                                        <div className={b('dashboard-wrapper')}>
                                            <ChartKit type="d3" data={data} />
                                        </div>
                                    </StyledCard>
                                </Col>
                            ),
                        )}
                    </Row>
                    <Row space={5}>
                        {[pieDashboardData, dotsDashboardData].map((data, index) => (
                            <Col s="12" m="6" key={index}>
                                <StyledCard key={index}>
                                    <div className={b('dashboard-wrapper')}>
                                        <ChartKit type="d3" data={data} />
                                    </div>
                                </StyledCard>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Flex>
        </Flex>
    );
};
