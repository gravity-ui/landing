import type {ChartData} from '@gravity-ui/charts';

export const pieData: ChartData = {
    series: {
        data: [
            {
                type: 'pie',
                borderRadius: 10,
                borderWidth: 0,
                center: ['75%', null],
                innerRadius: '85%',
                radius: '75%',
                dataLabels: {enabled: false},
                data: [
                    {
                        name: 'One 2',
                        value: 30,
                        color: 'rgba(48, 170, 110, 1)',
                    },
                    {
                        name: 'Two 2',
                        value: 70,
                        color: 'var(--g-color-base-positive-light)',
                    },
                ],
            },
        ],
    },
    legend: {enabled: false},
    tooltip: {enabled: false},
};
