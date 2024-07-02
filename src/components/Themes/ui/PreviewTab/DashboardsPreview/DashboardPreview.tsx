import ChartKit, {settings} from '@gravity-ui/chartkit';
import {YagrPlugin} from '@gravity-ui/chartkit/yagr';
import {Card, Flex, Text} from '@gravity-ui/uikit';
import React, {PropsWithChildren} from 'react';

import {block} from '../../../../../utils';
import {
    areaDashboardData,
    columnDashboardData,
    dotsDashboardData,
    lineDashboardData,
} from '../constants';

import './DashboardPreview.scss';

interface StyleCardProps extends PropsWithChildren {}

settings.set({plugins: [YagrPlugin]});

const b = block('dashboards-preview');

const StyledCard = ({children}: StyleCardProps) => {
    return (
        <Card view="filled" className={b('card')}>
            {children}
        </Card>
    );
};

export const DashboardPreview = ({justify}: {justify: string}) => {
    return (
        <Flex direction="column" alignItems={justify} gap={4} className={b()}>
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
                <Flex gap={5} wrap="wrap">
                    {[lineDashboardData, areaDashboardData, columnDashboardData].map(
                        (data, index) => (
                            <StyledCard key={index}>
                                <div className={b('dashboard-wrapper')}>
                                    <ChartKit type="yagr" data={data} />
                                </div>
                            </StyledCard>
                        ),
                    )}
                </Flex>

                <StyledCard>
                    <div className={b('dashboard-wrapper')}>
                        <ChartKit type="yagr" data={dotsDashboardData} />
                    </div>
                </StyledCard>
            </Flex>
        </Flex>
    );
};
