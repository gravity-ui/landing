import {Chart, ChartData, ChartSeries} from '@gravity-ui/charts';
import {Button, Flex} from '@gravity-ui/uikit';
import React, {useCallback, useState} from 'react';

import {ErrorBoundary} from '../../ErrorBoundary';

import {Editor} from './Editor';
import * as mocks from './mocks';

type ChartType = ChartSeries['type'];
type ChartTypeOption = {value: ChartType; content: string};

const chartTypeOptions: ChartTypeOption[] = [
    {value: 'line', content: 'Line'},
    {value: 'area', content: 'Area'},
    {value: 'bar-x', content: 'Bar-X'},
    {value: 'bar-y', content: 'Bar-Y'},
    {value: 'pie', content: 'Pie'},
    {value: 'scatter', content: 'Scatter'},
    {value: 'funnel', content: 'Funnel'},
    {value: 'heatmap', content: 'Heatmap'},
    {value: 'radar', content: 'Radar'},
    {value: 'sankey', content: 'Sankey'},
    {value: 'treemap', content: 'Treemap'},
    {value: 'waterfall', content: 'Waterfall'},
];

const chartMocks: Record<ChartType, ChartData> = {
    area: mocks.areaData,
    'bar-x': mocks.barXData,
    'bar-y': mocks.barYData,
    funnel: mocks.funnelData,
    heatmap: mocks.heatmapData,
    line: mocks.lineData,
    pie: mocks.pieData,
    radar: mocks.radarData,
    sankey: mocks.sankeyData,
    scatter: mocks.scatterData,
    treemap: mocks.treemapData,
    waterfall: mocks.waterfallData,
};

export const Playground = () => {
    const defaultChartType = chartTypeOptions[0].value;
    const [chartData, setChartData] = useState<ChartData>(chartMocks[defaultChartType]);
    const [chartType, setChartType] = useState<ChartType>(defaultChartType);

    const updateChartType = useCallback((type: ChartType) => {
        setChartType(type);
        setChartData(chartMocks[type]);
    }, []);

    const handleReset = useCallback(() => {
        const newData = chartMocks[chartType];

        setChartData(newData);

        return newData;
    }, [chartType]);

    return (
        <Flex gap={6} direction="column" width="100%" height="100%">
            <Flex justifyContent="center" gap={2} wrap="wrap">
                {chartTypeOptions.map((option) => (
                    <Button
                        key={option.value}
                        size="l"
                        view={chartType === option.value ? 'action' : 'outlined'}
                        onClick={() => updateChartType(option.value)}
                    >
                        {option.content}
                    </Button>
                ))}
            </Flex>
            <Flex gap={8} justifyContent="space-between" height="100%" key={chartType}>
                <Flex width="calc(60% - 16px)">
                    <ErrorBoundary>
                        <Chart data={chartData} />
                    </ErrorBoundary>
                </Flex>
                <Flex width="calc(40% - 16px)">
                    <Editor data={chartData} onApplyChanges={setChartData} onReset={handleReset} />
                </Flex>
            </Flex>
        </Flex>
    );
};
