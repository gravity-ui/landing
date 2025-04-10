import type {ChartData} from '@gravity-ui/charts';

export const barXData: ChartData = {
    series: {
        data: [
            {
                type: 'bar-x',
                data: [
                    {
                        x: 'Switch',
                        y: 100,
                        color: 'rgba(48, 170, 110, 1)',
                    },
                    {
                        x: 'iOS',
                        y: 100,
                        color: 'rgba(48, 170, 110, 1)',
                    },
                    {
                        x: '3DS',
                        y: 100,
                        color: 'rgba(48, 170, 109, 0.65)',
                    },
                    {
                        x: 'WIIU',
                        y: 80,
                        color: 'rgba(48, 170, 110, 1)',
                    },
                    {
                        x: 'WII',
                        y: 80,
                        color: 'rgba(48, 170, 109, 0.31)',
                    },
                    {
                        x: 'DS',
                        y: 60,
                        color: 'rgba(48, 170, 109, 0.12)',
                    },
                    {
                        x: 'TG16)',
                        y: 60,
                        color: 'rgba(48, 170, 109, 0.12)',
                    },
                ],
                name: '',
                borderRadius: 4,
            },
        ],
    },
    xAxis: {
        type: 'category',
        categories: ['Switch', 'iOS', '3DS', 'WIIU', 'WII', 'DS', 'TG16)', 'GBA', 'GC', 'N64'],
        labels: {
            enabled: false,
        },
        grid: {
            enabled: false,
        },
        lineColor: 'transparent',
        maxPadding: 0.6,
    },
    yAxis: [
        {
            type: 'linear',
            timestamps: [12312],
            labels: {
                enabled: false,
            },
            grid: {
                enabled: false,
            },
            ticks: {
                pixelInterval: 2,
            },
            lineColor: 'transparent',
            maxPadding: 0.4,
        },
    ],
    tooltip: {enabled: false},
};
