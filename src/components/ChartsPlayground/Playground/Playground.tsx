import {Chart, ChartData, ChartSeries} from '@gravity-ui/charts';
import {Flex, Select} from '@gravity-ui/uikit';
import React, {useCallback, useState} from 'react';

import {Editor} from './Editor';
import * as mocks from './mocks';

type ChartType = ChartSeries['type'];
type SelectOption = {value: ChartType; content: string};

const chartTypeOptions: SelectOption[] = [
    {value: 'area', content: 'Area'},
    {value: 'bar-x', content: 'Bar-X'},
    {value: 'bar-y', content: 'Bar-Y'},
    {value: 'funnel', content: 'Funnel'},
    {value: 'heatmap', content: 'Heatmap'},
    {value: 'line', content: 'Line'},
    {value: 'pie', content: 'Pie'},
    {value: 'radar', content: 'Radar'},
    {value: 'sankey', content: 'Sankey'},
    {value: 'scatter', content: 'Scatter'},
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

    const handleUpdateChartType = useCallback((value: string[]) => {
        const type = value[0] as ChartType;
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
            <Flex justifyContent="center">
                <Select
                    options={chartTypeOptions}
                    defaultValue={[defaultChartType]}
                    onUpdate={handleUpdateChartType}
                    size="xl"
                    width={200}
                />
            </Flex>
            <Flex gap={8} justifyContent="space-between" height="100%" key={chartType}>
                <Flex width="calc(60% - 16px)">
                    <Chart data={chartData} />
                </Flex>
                <Flex width="calc(40% - 16px)">
                    <Editor data={chartData} onApplyChanges={setChartData} onReset={handleReset} />
                </Flex>
            </Flex>
        </Flex>
    );
};
