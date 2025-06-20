import type {ChartData} from '@gravity-ui/charts';

export const topItemsMock: ChartData = {
    series: {
        data: [
            {
                type: 'pie',
                innerRadius: '50%',
                data: [
                    {
                        name: 'E',
                        value: 660,
                    },
                    {
                        name: 'RP',
                        value: 5,
                    },
                    {
                        name: 'unknown',
                        value: 122,
                    },
                    {
                        name: 'E10+',
                        value: 142,
                    },
                    {
                        name: 'T',
                        value: 150,
                    },
                    {
                        name: 'M',
                        value: 15,
                    },
                ],
            },
        ],
    },
    legend: {
        enabled: true,
    },
};
