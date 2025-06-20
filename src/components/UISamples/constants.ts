import {ChartData} from '@gravity-ui/charts';
import {dateTime} from '@gravity-ui/date-utils';

import previewCard1 from '../../assets/preview-card-1.png';
import previewCard2 from '../../assets/preview-card-2.png';
import previewCard3 from '../../assets/preview-card-3.png';

export const labels = [
    {title: 'In progress', theme: 'info'},
    {title: 'Open', theme: 'success'},
    {title: 'Testing', theme: 'unknown'},
    {title: 'Some mistakes', theme: 'danger'},
];

export const projects = [
    'WWCC - incorrect - fix',
    'ARC - down lux parameters',
    'ASMR - double',
    'WWCC - store',
    'LUX - programming',
    'DSLL - second screen',
    'ARC - exstamina',
    'ASMR - loader connections',
    'LUX - check',
    'DSLL - second screen with zoom',
];

export const users = [
    'John Smith',
    'David Jones',
    'Michael Johnson',
    'William Wilson',
    'Charles Carter',
    'Robert Rodriguez',
    'Alexander Adams',
];

export const tableData = new Array(10).fill(0).map((_, index) => {
    return {
        user: users[(index + 1) % 7],
        project: projects[(index + 1) % 10],
        updated: dateTime()
            .add(Math.round(Math.random() * 30), 'days')
            .format('DD.MM.YYYY hh:mm'),
        status: labels[(index + 1) % 4],
    };
});

export const cardData = [
    {
        imgSrc: previewCard1.src,
        title: 'Limited availability of Managed service for Elasticsearch',
        text: 'As of July 20, we are suspending the introduction of new functionalities and introducing restrictions on the deployment of clusters for customers new to the service.',
        date: '10 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard2.src,
        title: 'Uploading Audit Trails to Managed Service for OpenSearch',
        text: 'Today, we’ll talk about how to set up the Audit Trails service to upload audit logs to Managed Service for OpenSearch.',
        date: '3 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard3.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '3 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard1.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '3 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard2.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '8 Apr 2023, 10:17',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard3.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '4 Mar 2023, 12:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard1.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '3 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard2.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '8 Apr 2023, 10:17',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard3.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '4 Mar 2023, 12:37',
        user: 'John Smith',
    },
];

export const barXDashboardData: ChartData = {
    series: {
        data: [
            {
                type: 'bar-x',
                stacking: 'normal',
                color: 'var(--g-color-text-info)',
                name: 'Switch',
                data: [
                    {
                        x: '2023',
                        y: 25,
                    },
                    {
                        x: '2022',
                        y: 17,
                    },
                    {
                        x: '2021',
                        y: 26,
                    },
                    {
                        x: '2020',
                        y: 37,
                    },
                    {
                        x: '2024',
                        y: 2,
                    },
                ],
            },
            {
                type: 'bar-x',
                stacking: 'normal',
                color: 'var(--g-color-text-utility)',
                name: 'iOS',
                data: [
                    {
                        x: '2023',
                        y: 1,
                    },
                    {
                        x: '2021',
                        y: 1,
                    },
                    {
                        x: '2020',
                        y: 1,
                    },
                    {
                        x: '2019',
                        y: 2,
                    },
                    {
                        x: '2018',
                        y: 2,
                    },
                    {
                        x: '2017',
                        y: 3,
                    },
                    {
                        x: '2016',
                        y: 3,
                    },
                    {
                        x: '2015',
                        y: 1,
                    },
                ],
            },
            {
                type: 'bar-x',
                stacking: 'normal',
                name: 'WIIU',
                color: 'var(--g-color-text-misc)',
                data: [
                    {
                        x: '2020',
                        y: 4,
                    },
                    {
                        x: '2024',
                        y: 14,
                    },
                    {
                        x: '2021',
                        y: 18,
                    },
                ],
            },
            {
                type: 'bar-x',
                stacking: 'normal',
                color: 'var(--g-color-text-danger)',
                name: 'WII',
                data: [
                    {
                        x: '2021',
                        y: 9,
                    },
                    {
                        x: '2022',
                        y: 6,
                    },
                    {
                        x: '2023',
                        y: 6,
                    },
                    {
                        x: '2024',
                        y: 26,
                    },
                ],
            },
            {
                type: 'bar-x',
                stacking: 'normal',
                color: 'var(--g-color-text-brand)',
                name: 'DS',
                data: [
                    {
                        x: '2021',
                        y: 5,
                    },
                    {
                        x: '2022',
                        y: 9,
                    },
                    {
                        x: '2023',
                        y: 43,
                    },
                    {
                        x: '2024',
                        y: 64,
                    },
                ],
            },
        ],
    },
    xAxis: {
        type: 'category',
        categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    legend: {
        enabled: false,
    },
};

export const linesDashboardData: ChartData = {
    legend: {
        enabled: false,
    },
    series: {
        data: [
            {
                type: 'line',
                color: 'var(--g-color-text-info)',
                data: [
                    {
                        x: 1397419200000,
                        y: -81,
                    },
                    {
                        x: 1397332800000,
                        y: -84,
                    },
                    {
                        x: 1397246400000,
                        y: -84,
                    },
                    {
                        x: 1397160000000,
                        y: -84,
                    },
                    {
                        x: 1397073600000,
                        y: -82,
                    },
                    {
                        x: 1396987200000,
                        y: -83,
                    },
                    {
                        x: 1396900800000,
                        y: -83,
                    },
                    {
                        x: 1396814400000,
                        y: -83,
                    },
                    {
                        x: 1396728000000,
                        y: -83,
                    },
                    {
                        x: 1396641600000,
                        y: -82,
                    },
                    {
                        x: 1396555200000,
                        y: -82,
                    },
                    {
                        x: 1396468800000,
                        y: -85,
                    },
                    {
                        x: 1396382400000,
                        y: -84,
                    },
                    {
                        x: 1396296000000,
                        y: -85,
                    },
                    {
                        x: 1396209600000,
                        y: -82,
                    },
                    {
                        x: 1396123200000,
                        y: -83,
                    },
                    {
                        x: 1396036800000,
                        y: -82,
                    },
                    {
                        x: 1395950400000,
                        y: -82,
                    },
                    {
                        x: 1395864000000,
                        y: -84,
                    },
                    {
                        x: 1395777600000,
                        y: -84,
                    },
                    {
                        x: 1395691200000,
                        y: -83,
                    },
                    {
                        x: 1395604800000,
                        y: -82,
                    },
                    {
                        x: 1395432000000,
                        y: -83,
                    },
                    {
                        x: 1395345600000,
                        y: -84,
                    },
                    {
                        x: 1395259200000,
                        y: -84,
                    },
                    {
                        x: 1395172800000,
                        y: -82,
                    },
                    {
                        x: 1395086400000,
                        y: -85,
                    },
                    {
                        x: 1395000000000,
                        y: -84,
                    },
                    {
                        x: 1394913600000,
                        y: -85,
                    },
                    {
                        x: 1394827200000,
                        y: -84,
                    },
                    {
                        x: 1394740800000,
                        y: -84,
                    },
                    {
                        x: 1394654400000,
                        y: -85,
                    },
                    {
                        x: 1394568000000,
                        y: -86,
                    },
                    {
                        x: 1394481600000,
                        y: -86,
                    },
                    {
                        x: 1394395200000,
                        y: -86,
                    },
                    {
                        x: 1394308800000,
                        y: -85,
                    },
                    {
                        x: 1394222400000,
                        y: -86,
                    },
                    {
                        x: 1394136000000,
                        y: -87,
                    },
                    {
                        x: 1394049600000,
                        y: -85,
                    },
                    {
                        x: 1393963200000,
                        y: -85,
                    },
                    {
                        x: 1393876800000,
                        y: -86,
                    },
                    {
                        x: 1393790400000,
                        y: -85,
                    },
                    {
                        x: 1393704000000,
                        y: -85,
                    },
                    {
                        x: 1393617600000,
                        y: -85,
                    },
                    {
                        x: 1393531200000,
                        y: -85,
                    },
                    {
                        x: 1393444800000,
                        y: -85,
                    },
                    {
                        x: 1393358400000,
                        y: -84,
                    },
                    {
                        x: 1393272000000,
                        y: -84,
                    },
                    {
                        x: 1393185600000,
                        y: -86,
                    },
                    {
                        x: 1393099200000,
                        y: -85,
                    },
                    {
                        x: 1393012800000,
                        y: -85,
                    },
                    {
                        x: 1392926400000,
                        y: -87,
                    },
                    {
                        x: 1392840000000,
                        y: -86,
                    },
                    {
                        x: 1392753600000,
                        y: -85,
                    },
                    {
                        x: 1392667200000,
                        y: -85,
                    },
                    {
                        x: 1392580800000,
                        y: -85,
                    },
                    {
                        x: 1392494400000,
                        y: -86,
                    },
                    {
                        x: 1392408000000,
                        y: -84,
                    },
                    {
                        x: 1392235200000,
                        y: -85,
                    },
                    {
                        x: 1392148800000,
                        y: -84,
                    },
                    {
                        x: 1392062400000,
                        y: -84,
                    },
                    {
                        x: 1391976000000,
                        y: -85,
                    },
                    {
                        x: 1391889600000,
                        y: -85,
                    },
                    {
                        x: 1391803200000,
                        y: -83,
                    },
                    {
                        x: 1391716800000,
                        y: -83,
                    },
                    {
                        x: 1391630400000,
                        y: -88,
                    },
                    {
                        x: 1391544000000,
                        y: -86,
                    },
                    {
                        x: 1391457600000,
                        y: -87,
                    },
                    {
                        x: 1391371200000,
                        y: -88,
                    },
                    {
                        x: 1391284800000,
                        y: -87,
                    },
                    {
                        x: 1391198400000,
                        y: -87,
                    },
                    {
                        x: 1391112000000,
                        y: -87,
                    },
                    {
                        x: 1391025600000,
                        y: -86,
                    },
                    {
                        x: 1390939200000,
                        y: -86,
                    },
                    {
                        x: 1390852800000,
                        y: -87,
                    },
                    {
                        x: 1390766400000,
                        y: -87,
                    },
                    {
                        x: 1390680000000,
                        y: -85,
                    },
                    {
                        x: 1390593600000,
                        y: -85,
                    },
                    {
                        x: 1390507200000,
                        y: -85,
                    },
                    {
                        x: 1390420800000,
                        y: -87,
                    },
                    {
                        x: 1390334400000,
                        y: -86,
                    },
                    {
                        x: 1390248000000,
                        y: -86,
                    },
                    {
                        x: 1390161600000,
                        y: -85,
                    },
                    {
                        x: 1390075200000,
                        y: -86,
                    },
                    {
                        x: 1389988800000,
                        y: -86,
                    },
                    {
                        x: 1389902400000,
                        y: -86,
                    },
                    {
                        x: 1389816000000,
                        y: -86,
                    },
                    {
                        x: 1389729600000,
                        y: -86,
                    },
                    {
                        x: 1389643200000,
                        y: -86,
                    },
                    {
                        x: 1389556800000,
                        y: -85,
                    },
                    {
                        x: 1389470400000,
                        y: -85,
                    },
                    {
                        x: 1389384000000,
                        y: -86,
                    },
                    {
                        x: 1389297600000,
                        y: -83,
                    },
                    {
                        x: 1389211200000,
                        y: -85,
                    },
                    {
                        x: 1389124800000,
                        y: -86,
                    },
                    {
                        x: 1388952000000,
                        y: -85,
                    },
                    {
                        x: 1388865600000,
                        y: -85,
                    },
                    {
                        x: 1388779200000,
                        y: -86,
                    },
                    {
                        x: 1388692800000,
                        y: -87,
                    },
                    {
                        x: 1388606400000,
                        y: -86,
                    },
                ],
                name: 'Min Temperature',
                yAxis: 0,
            },
            {
                type: 'line',
                color: 'var(--g-color-text-brand)',
                data: [
                    {
                        x: 1397419200000,
                        y: -25,
                    },
                    {
                        x: 1397332800000,
                        y: -20,
                    },
                    {
                        x: 1397246400000,
                        y: -25,
                    },
                    {
                        x: 1397160000000,
                        y: -26,
                    },
                    {
                        x: 1397073600000,
                        y: -24,
                    },
                    {
                        x: 1396987200000,
                        y: -25,
                    },
                    {
                        x: 1396900800000,
                        y: -22,
                    },
                    {
                        x: 1396814400000,
                        y: -23,
                    },
                    {
                        x: 1396728000000,
                        y: -26,
                    },
                    {
                        x: 1396641600000,
                        y: -26,
                    },
                    {
                        x: 1396555200000,
                        y: -26,
                    },
                    {
                        x: 1396468800000,
                        y: -27,
                    },
                    {
                        x: 1396382400000,
                        y: -24,
                    },
                    {
                        x: 1396296000000,
                        y: -28,
                    },
                    {
                        x: 1396209600000,
                        y: -24,
                    },
                    {
                        x: 1396123200000,
                        y: -26,
                    },
                    {
                        x: 1396036800000,
                        y: -25,
                    },
                    {
                        x: 1395950400000,
                        y: -27,
                    },
                    {
                        x: 1395864000000,
                        y: -27,
                    },
                    {
                        x: 1395777600000,
                        y: -28,
                    },
                    {
                        x: 1395691200000,
                        y: -24,
                    },
                    {
                        x: 1395604800000,
                        y: -22,
                    },
                    {
                        x: 1395432000000,
                        y: -23,
                    },
                    {
                        x: 1395345600000,
                        y: -27,
                    },
                    {
                        x: 1395259200000,
                        y: -26,
                    },
                    {
                        x: 1395172800000,
                        y: -26,
                    },
                    {
                        x: 1395086400000,
                        y: -23,
                    },
                    {
                        x: 1395000000000,
                        y: -27,
                    },
                    {
                        x: 1394913600000,
                        y: -27,
                    },
                    {
                        x: 1394827200000,
                        y: -26,
                    },
                    {
                        x: 1394740800000,
                        y: -26,
                    },
                    {
                        x: 1394654400000,
                        y: -27,
                    },
                    {
                        x: 1394568000000,
                        y: -28,
                    },
                    {
                        x: 1394481600000,
                        y: -28,
                    },
                    {
                        x: 1394395200000,
                        y: -27,
                    },
                    {
                        x: 1394308800000,
                        y: -27,
                    },
                    {
                        x: 1394222400000,
                        y: -27,
                    },
                    {
                        x: 1394136000000,
                        y: -31,
                    },
                    {
                        x: 1394049600000,
                        y: -23,
                    },
                    {
                        x: 1393963200000,
                        y: -23,
                    },
                    {
                        x: 1393876800000,
                        y: -23,
                    },
                    {
                        x: 1393790400000,
                        y: -27,
                    },
                    {
                        x: 1393704000000,
                        y: -26,
                    },
                    {
                        x: 1393617600000,
                        y: -29,
                    },
                    {
                        x: 1393531200000,
                        y: -29,
                    },
                    {
                        x: 1393444800000,
                        y: -31,
                    },
                    {
                        x: 1393358400000,
                        y: -22,
                    },
                    {
                        x: 1393272000000,
                        y: -26,
                    },
                    {
                        x: 1393185600000,
                        y: -29,
                    },
                    {
                        x: 1393099200000,
                        y: -28,
                    },
                    {
                        x: 1393012800000,
                        y: -27,
                    },
                    {
                        x: 1392926400000,
                        y: -23,
                    },
                    {
                        x: 1392840000000,
                        y: -28,
                    },
                    {
                        x: 1392753600000,
                        y: -29,
                    },
                    {
                        x: 1392667200000,
                        y: -34,
                    },
                    {
                        x: 1392580800000,
                        y: -29,
                    },
                    {
                        x: 1392494400000,
                        y: -27,
                    },
                    {
                        x: 1392408000000,
                        y: -26,
                    },
                    {
                        x: 1392235200000,
                        y: -28,
                    },
                    {
                        x: 1392148800000,
                        y: -27,
                    },
                    {
                        x: 1392062400000,
                        y: -29,
                    },
                    {
                        x: 1391976000000,
                        y: -23,
                    },
                    {
                        x: 1391889600000,
                        y: -25,
                    },
                    {
                        x: 1391803200000,
                        y: -28,
                    },
                    {
                        x: 1391716800000,
                        y: -29,
                    },
                    {
                        x: 1391630400000,
                        y: -29,
                    },
                    {
                        x: 1391544000000,
                        y: -29,
                    },
                    {
                        x: 1391457600000,
                        y: -30,
                    },
                    {
                        x: 1391371200000,
                        y: -23,
                    },
                    {
                        x: 1391284800000,
                        y: -22,
                    },
                    {
                        x: 1391198400000,
                        y: -28,
                    },
                    {
                        x: 1391112000000,
                        y: -23,
                    },
                    {
                        x: 1391025600000,
                        y: -26,
                    },
                    {
                        x: 1390939200000,
                        y: -23,
                    },
                    {
                        x: 1390852800000,
                        y: -24,
                    },
                    {
                        x: 1390766400000,
                        y: -29,
                    },
                    {
                        x: 1390680000000,
                        y: -27,
                    },
                    {
                        x: 1390593600000,
                        y: -25,
                    },
                    {
                        x: 1390507200000,
                        y: -26,
                    },
                    {
                        x: 1390420800000,
                        y: -26,
                    },
                    {
                        x: 1390334400000,
                        y: -24,
                    },
                    {
                        x: 1390248000000,
                        y: -25,
                    },
                    {
                        x: 1390161600000,
                        y: -29,
                    },
                    {
                        x: 1390075200000,
                        y: -27,
                    },
                    {
                        x: 1389988800000,
                        y: -25,
                    },
                    {
                        x: 1389902400000,
                        y: -23,
                    },
                    {
                        x: 1389816000000,
                        y: -29,
                    },
                    {
                        x: 1389729600000,
                        y: -29,
                    },
                    {
                        x: 1389643200000,
                        y: -24,
                    },
                    {
                        x: 1389556800000,
                        y: -31,
                    },
                    {
                        x: 1389470400000,
                        y: -31,
                    },
                    {
                        x: 1389384000000,
                        y: -30,
                    },
                    {
                        x: 1389297600000,
                        y: -29,
                    },
                    {
                        x: 1389211200000,
                        y: -25,
                    },
                    {
                        x: 1389124800000,
                        y: -27,
                    },
                    {
                        x: 1388952000000,
                        y: -29,
                    },
                    {
                        x: 1388865600000,
                        y: -29,
                    },
                    {
                        x: 1388779200000,
                        y: -28,
                    },
                    {
                        x: 1388692800000,
                        y: -30,
                    },
                    {
                        x: 1388606400000,
                        y: -28,
                    },
                ],
                name: 'Max Temperature',
                yAxis: 1,
            },
        ],
    },
    yAxis: [{}, {}],
};

export const areaDashboardData: ChartData = {
    series: {
        data: [
            {
                type: 'area',
                stacking: 'normal',
                color: 'var(--g-color-text-utility)',
                name: 'Switch',
                data: [
                    {
                        x: '2017',
                        y: 24,
                    },
                    {
                        x: '2018',
                        y: 35,
                    },
                    {
                        x: '2019',
                        y: 38,
                    },
                    {
                        x: '2020',
                        y: 37,
                    },
                    {
                        x: '2021',
                        y: 26,
                    },
                    {
                        x: '2022',
                        y: 17,
                    },
                    {
                        x: '2023',
                        y: 25,
                    },
                    {
                        x: '2024',
                        y: 2,
                    },
                ],
            },
            {
                type: 'area',
                stacking: 'normal',
                name: 'iOS',
                color: 'var(--g-color-text-positive)',
                data: [
                    {
                        x: '2017',
                        y: 3,
                    },
                    {
                        x: '2018',
                        y: 2,
                    },
                    {
                        x: '2019',
                        y: 2,
                    },
                    {
                        x: '2020',
                        y: 1,
                    },
                    {
                        x: '2021',
                        y: 1,
                    },
                    {
                        x: '2023',
                        y: 1,
                    },
                ],
            },
            {
                type: 'area',
                stacking: 'normal',
                name: '3DS',
                color: 'var(--g-color-text-brand)',
                data: [
                    {
                        x: '2015',
                        y: 22,
                    },
                    {
                        x: '2016',
                        y: 37,
                    },
                    {
                        x: '2017',
                        y: 42,
                    },
                    {
                        x: '2018',
                        y: 12,
                    },
                    {
                        x: '2019',
                        y: 3,
                    },
                    {
                        x: '2024',
                        y: 3,
                    },
                ],
            },
            {
                type: 'area',
                stacking: 'normal',
                name: 'WIIU',
                color: 'var(--g-color-text-utility)',
                data: [
                    {
                        x: '2015',
                        y: 18,
                    },
                    {
                        x: '2016',
                        y: 14,
                    },
                    {
                        x: '2017',
                        y: 4,
                    },
                    {
                        x: '2020',
                        y: 7,
                    },
                ],
            },
            {
                type: 'area',
                stacking: 'normal',
                name: 'WII',
                color: 'var(--g-color-text-danger)',
                data: [
                    {
                        x: '2015',
                        y: 20,
                    },
                    {
                        x: '2016',
                        y: 68,
                    },
                    {
                        x: '2017',
                        y: 27,
                    },
                    {
                        x: '2018',
                        y: 26,
                    },
                    {
                        x: '2019',
                        y: 26,
                    },
                    {
                        x: '2020',
                        y: 6,
                    },
                    {
                        x: '2021',
                        y: 9,
                    },
                ],
            },
        ],
    },
    legend: {
        enabled: false,
    },
    xAxis: {
        type: 'category',
        categories: [
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
            '2022',
            '2023',
            '2024',
        ],
    },
};

export const pieDashboardData: ChartData = {
    series: {
        data: [
            {
                type: 'pie',
                data: [
                    {
                        name: 'Switch',
                        value: 209,
                        color: 'var(--g-color-text-danger)',
                    },
                    {
                        name: 'iOS',
                        value: 14,
                        color: 'var(--g-color-text-utility)',
                    },
                    {
                        name: '3DS',
                        value: 259,
                        color: 'var(--g-color-text-info)',
                    },
                    {
                        name: 'WIIU',
                        value: 80,
                        color: 'var(--g-color-text-positive)',
                    },
                    {
                        name: 'WII',
                        value: 188,
                        color: 'var(--g-color-text-warning)',
                    },
                    {
                        name: 'DS',
                        value: 196,
                        color: 'var(--g-color-text-brand)',
                    },
                ],
            },
        ],
    },
    legend: {
        enabled: false,
    },
};

export const dotsDashboardData: ChartData = {
    legend: {
        enabled: false,
    },
    series: {
        data: [
            {
                color: 'var(--g-color-base-brand)',
                name: 'Min Temp',
                type: 'scatter',
                data: [
                    {
                        x: 1689886800000,
                        y: 9,
                    },
                    {
                        x: 1689109200000,
                        y: 7.6,
                    },
                    {
                        x: 1688072400000,
                        y: 5.4,
                    },
                    {
                        x: 1687294800000,
                        y: 8.4,
                    },
                    {
                        x: 1687294800000,
                        y: 8.6,
                    },
                    {
                        x: 1687294800000,
                        y: 8.5,
                    },
                    {
                        x: 1683838800000,
                        y: 8.2,
                    },
                    {
                        x: 1682370000000,
                        y: 8.8,
                    },
                    {
                        x: 1682024400000,
                        y: 8.1,
                    },
                    {
                        x: 1679004000000,
                        y: 8.6,
                    },
                    {
                        x: 1678312800000,
                        y: 7.8,
                    },
                    {
                        x: 1677189600000,
                        y: 8.8,
                    },
                    {
                        x: 1675807200000,
                        y: 8.7,
                    },
                    {
                        x: 1674165600000,
                        y: 6.6,
                    },
                    {
                        x: 1670364000000,
                        y: 7.3,
                    },
                    {
                        x: 1668722400000,
                        y: 4,
                    },
                    {
                        x: 1668722400000,
                        y: 3.4,
                    },
                    {
                        x: 1668722400000,
                        y: 8,
                    },
                    {
                        x: 1666904400000,
                        y: 7.1,
                    },
                    {
                        x: 1662670800000,
                        y: 6.8,
                    },
                    {
                        x: 1660683600000,
                        y: 7.3,
                    },
                    {
                        x: 1659560400000,
                        y: 6.8,
                    },
                    {
                        x: 1659042000000,
                        y: 8.5,
                    },
                ],
            },
            {
                color: 'var(--g-color-text-danger)',
                name: 'Max Temp',
                type: 'scatter',
                data: [
                    {
                        x: 1687838800000,
                        y: 8.2,
                    },
                    {
                        x: 1678370000000,
                        y: 8.8,
                    },
                    {
                        x: 1685838800000,
                        y: 8.2,
                    },
                    {
                        x: 1672370000000,
                        y: 8.8,
                    },
                    {
                        x: 1662024400000,
                        y: 8.1,
                    },
                    {
                        x: 1679004000000,
                        y: 8.6,
                    },
                    {
                        x: 1678312800000,
                        y: 7.8,
                    },
                    {
                        x: 1687189600000,
                        y: 8.8,
                    },
                    {
                        x: 1671807200000,
                        y: 8.7,
                    },
                    {
                        x: 1645165600000,
                        y: 6.6,
                    },
                    {
                        x: 1667364000000,
                        y: 7.3,
                    },
                    {
                        x: 1670722400000,
                        y: 4,
                    },
                    {
                        x: 1667822400000,
                        y: 3.4,
                    },
                    {
                        x: 1660922400000,
                        y: 8,
                    },
                    {
                        x: 1661204400000,
                        y: 7.1,
                    },
                ],
            },
        ],
    },
    yAxis: [{}, {}],
};
