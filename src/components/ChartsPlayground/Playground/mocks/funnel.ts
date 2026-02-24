import {ChartData} from '@gravity-ui/charts';

export const funnelData: ChartData = {
    series: {
        data: [
            {
                type: 'funnel',
                name: 'Series 1',
                data: [
                    {value: 100, name: 'Visit'},
                    {value: 87, name: 'Sign-up'},
                    {value: 63, name: 'Selection'},
                    {value: 27, name: 'Purchase'},
                    {value: 12, name: 'Review'},
                ],
            },
        ],
    },
    legend: {enabled: true},
};
