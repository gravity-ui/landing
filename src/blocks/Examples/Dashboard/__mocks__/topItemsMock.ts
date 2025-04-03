import {HighchartsWidgetData} from '@gravity-ui/chartkit/highcharts';

export const topItemsMock: HighchartsWidgetData = {
    data: {
        graphs: [
            //@ts-ignore
            {
                title: 'Top items',
                data: [
                    {name: 'E', y: 660, label: 660},
                    {name: 'RP', y: 5, label: 5},
                    {name: 'unknown', y: 122, label: 122},
                    {name: 'E10+', y: 142, label: 142},
                    {name: 'T', y: 150, label: 150},
                    {name: 'M', y: 15, label: 15},
                ],
                type: 'pie',
            },
        ],
        categories: ['E', 'RP', 'unknown', 'E10+', 'T', 'M'],
        totals: undefined,
    },
    config: {
        tooltip: {
            pin: {
                enabled: false,
            },
        },
    },
    libraryConfig: {
        chart: {
            type: 'pie',
        },
        plotOptions: {
            pie: {
                innerSize: '50%',
                borderColor: 'null',
                borderRadius: 0,
                borderWidth: 0,
            },
        },
    },
};
