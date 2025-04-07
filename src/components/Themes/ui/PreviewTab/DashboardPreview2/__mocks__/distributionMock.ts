import {HighchartsWidgetData} from '@gravity-ui/chartkit/highcharts';

export const distributionMock: HighchartsWidgetData = {
    data: {
        graphs: [
            {
                title: 'Sales',
                data: [
                    {
                        y: 167387.5003761053,
                    },
                    {
                        y: 107532.49998930097,
                    },
                    {
                        y: 27119.399931907654,
                    },
                    {
                        y: 203415.90024918318,
                    },
                    {
                        y: 114882.00052642822,
                    },
                    {
                        y: 328452.60130500793,
                    },
                    {
                        y: 149529.49963378906,
                    },
                    {
                        y: 16477.799976468086,
                    },
                    {
                        y: 3024.2000015974045,
                    },
                    {
                        y: 91708.29990947247,
                    },
                    {
                        y: 12485.399973154068,
                    },
                    {
                        y: 189239.5000743866,
                    },
                    {
                        y: 78483.89996623993,
                    },
                    {
                        y: 330018.3997364044,
                    },
                    {
                        y: 223844.49978113174,
                    },
                    {
                        y: 46673.600484371185,
                    },
                    {
                        y: 206966.50039672852,
                    },
                ],
                connectNulls: false,
                yAxis: 0,
                color: '#8AD554',
                type: 'area',
            },
            {
                title: 'Profit',
                data: [
                    {
                        y: 41615,
                    },
                    {
                        y: 17927,
                    },
                    {
                        y: 6156,
                    },
                    {
                        y: 29550,
                    },
                    {
                        y: -3568,
                    },
                    {
                        y: 26316,
                    },
                    {
                        y: 55618,
                    },
                    {
                        y: 6849,
                    },
                    {
                        y: 850,
                    },
                    {
                        y: 12649,
                    },
                    {
                        y: 5367,
                    },
                    {
                        y: 3353,
                    },
                    {
                        y: 33437,
                    },
                    {
                        y: 44171,
                    },
                    {
                        y: 20907,
                    },
                    {
                        y: -1262,
                    },
                    {
                        y: -17865,
                    },
                ],
                connectNulls: false,
                yAxis: 0,
                color: '#FF3D64',
                type: 'area',
            },
            {
                title: 'Px2',
                data: [
                    {
                        y: 83230,
                    },
                    {
                        y: 35854,
                    },
                    {
                        y: 12312,
                    },
                    {
                        y: 59100,
                    },
                    {
                        y: -7136,
                    },
                    {
                        y: 52632,
                    },
                    {
                        y: 111236,
                    },
                    {
                        y: 13698,
                    },
                    {
                        y: 1700,
                    },
                    {
                        y: 25298,
                    },
                    {
                        y: 10734,
                    },
                    {
                        y: 6706,
                    },
                    {
                        y: 66874,
                    },
                    {
                        y: 88342,
                    },
                    {
                        y: 41814,
                    },
                    {
                        y: -2524,
                    },
                    {
                        y: -35730,
                    },
                ],
                connectNulls: false,
                yAxis: 0,
                color: '#4DA2F1',
                type: 'area',
            },
        ],
        categories: [
            'Accessories',
            'Appliances',
            'Art',
            'Binders',
            'Bookcases',
            'Chairs',
            'Copiers',
            'Envelopes',
            'Fasteners',
            'Furnishings',
            'Labels',
            'Machines',
            'Paper',
            'Phones',
            'Storage',
            'Supplies',
            'Tables',
        ],
    },
    config: {
        withoutLineLimit: true,
        hideHolidaysBands: true,
        enableSum: true,
        tooltip: {
            pin: {
                enabled: false,
            },
        },
    },
    libraryConfig: {
        chart: {
            type: 'area',
            zooming: {type: 'x'},
        },
        tooltip: {
            enabled: false,
        },
        xAxis: {
            endOnTick: false,
            type: 'linear',
            labels: {
                enabled: true,
            },
        },
        yAxis: {
            opposite: false,
            labels: {
                y: 3,
                enabled: true,
            },
            type: 'linear',
        },
        plotOptions: {
            area: {
                stacking: 'normal',
            },
            series: {
                dataGrouping: {
                    enabled: false,
                },
                dataLabels: {
                    allowOverlap: false,
                },
            },
        },
    },
};
