import {HighchartsWidgetData} from '@gravity-ui/chartkit/highcharts';

export const dynamicMock: HighchartsWidgetData = {
    data: {
        graphs: [
            {
                title: 'Dynamic',
                data: [
                    {
                        x: 1643662800000,
                        y: 8,
                    },
                    {
                        x: 1647291600000,
                        y: 6.8,
                    },
                    {
                        x: 1648501200000,
                        y: 8.9,
                    },
                    {
                        x: 1651352400000,
                        y: 5.8,
                    },
                    {
                        x: 1654808400000,
                        y: 4.1,
                    },
                    {
                        x: 1656450000000,
                        y: 8.9,
                    },
                    {
                        x: 1658696400000,
                        y: 7.5,
                    },
                    {
                        x: 1659128400000,
                        y: 8.4,
                    },
                    {
                        x: 1660510800000,
                        y: 6.8,
                    },
                    {
                        x: 1661979600000,
                        y: 7.1,
                    },
                    {
                        x: 1663189200000,
                        y: 6.7,
                    },
                    {
                        x: 1666213200000,
                        y: 7,
                    },
                    {
                        x: 1668459600000,
                        y: 8,
                    },
                    {
                        x: 1668459600000,
                        y: 0,
                    },
                    {
                        x: 1669842000000,
                        y: 7.05,
                    },
                    {
                        x: 1674162000000,
                        y: 6.5,
                    },
                    {
                        x: 1675544400000,
                        y: 8.6,
                    },
                    {
                        x: 1676840400000,
                        y: 8.8,
                    },
                    {
                        x: 1678395600000,
                        y: 7.9,
                    },
                    {
                        x: 1679691600000,
                        y: 8.5,
                    },
                    {
                        x: 1681938000000,
                        y: 8,
                    },
                    {
                        x: 1682715600000,
                        y: 8.7,
                    },
                    {
                        x: 1683666000000,
                        y: 8.1,
                    },
                    {
                        x: 1687208400000,
                        y: 8.5,
                    },
                    {
                        x: 1688158800000,
                        y: 3.2,
                    },
                    {
                        x: 1689627600000,
                        y: 9,
                    },
                ],
                connectNulls: false,
                yAxis: 0,
                color: '#4DA2F1',
                dashStyle: 'Solid',
                type: 'line',
            },
        ],
    },
    config: {
        precision: 2,
        hideHolidaysBands: true,
        enableSum: true,
        hideHolidays: false,
        normalizeDiv: false,
        normalizeSub: false,
        tooltip: {
            pin: {
                enabled: false,
            },
        },
    },
    libraryConfig: {
        chart: {
            type: 'line',
        },
        legend: {
            symbolWidth: 38,
        },
        xAxis: {
            endOnTick: false,

            type: 'datetime',
            dateTimeLabelFormats: {
                month: '%b %y',
            },
        },
        yAxis: {
            opposite: false,
            labels: {
                y: 3,
            },
            type: 'linear',
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
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
