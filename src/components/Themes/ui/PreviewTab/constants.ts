import {YagrWidgetData} from '@gravity-ui/chartkit/build/plugins/yagr';
import {dateTime} from '@gravity-ui/date-utils';

import previewCard1 from '../../../../assets/preview-card-1.png';
import previewCard2 from '../../../../assets/preview-card-2.png';
import previewCard3 from '../../../../assets/preview-card-3.png';

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

const getLibraryConfig = (
    seriesType: 'dots' | 'column' | 'area' | 'line',
    title: string,
): Partial<YagrWidgetData['libraryConfig']> => ({
    title: {
        text: title,
    },
    chart: {
        series: {
            type: seriesType,
        },
        select: {
            zoom: false,
        },
    },
    axes: {
        x: {},
    },
    scales: {
        x: {},
        y: {
            type: 'linear',
            range: 'nice',
        },
    },
    cursor: {
        x: {
            visible: true,
            style: 'solid 2px var(--g-color-base-brand)',
        },
    },
    tooltip: {
        show: true,
        tracking: 'sticky',
    },
    legend: {},
    processing: {},
});

export const lineDashboardData: YagrWidgetData = {
    data: {
        timeline: [
            1636838612441, 1636925012441, 1637011412441, 1637097812441, 1637184212441,
            1637270612441, 1637357012441, 1637443412441, 1637529812441, 1637616212441,
        ],
        graphs: [
            {
                id: '0',
                name: 'Serie 1',
                color: 'var(--g-color-base-info-heavy)',
                data: [45, 52, 89, 72, 39, 49, 82, 59, 36, 5],
            },
            {
                id: '1',
                name: 'Serie 2',
                color: 'var(--g-color-base-positive-heavy)',
                data: [37, 6, 51, 10, 65, 35, 72, 0, 94, 54],
            },
            {
                id: '2',
                name: 'Serie 3',
                color: 'var(--g-color-base-danger-heavy)',
                data: [26, 54, 15, 40, 43, 18, 65, 46, 51, 33],
            },
        ],
    },
    libraryConfig: getLibraryConfig('line', 'Fancy line chart'),
};

export const areaDashboardData: YagrWidgetData = {
    data: {
        timeline: [
            1636838612441, 1636925012441, 1637011412441, 1637097812441, 1637184212441,
            1637270612441, 1637357012441, 1637443412441, 1637529812441, 1637616212441,
        ],
        graphs: [
            {
                id: '0',
                name: 'Serie 1',
                color: 'var(--g-color-base-info-medium)',
                data: [45, 52, 89, 72, 39, 49, 82, 59, 36, 5],
            },
            {
                id: '1',
                name: 'Serie 2',
                color: 'var(--g-color-base-positive-medium)',
                data: [37, 6, 51, 10, 65, 35, 72, 0, 94, 54],
            },
            {
                id: '2',
                name: 'Serie 3',
                color: 'var(--g-color-base-danger-medium)',
                data: [26, 54, 15, 40, 43, 18, 65, 46, 51, 33],
            },
        ],
    },
    libraryConfig: getLibraryConfig('area', 'Fancy area chart'),
};

export const columnDashboardData: YagrWidgetData = {
    data: {
        timeline: [
            1722114000000, 1722114000100, 1722114000200, 1722114000300, 1722114000400,
            1722114000500, 1722114000600,
        ],
        graphs: [
            {
                id: '0',
                name: 'Serie 1',
                color: 'var(--g-color-base-info-heavy)',
                data: [600, 470, 120, 250, 70, 250, 200],
            },
            {
                id: '1',
                name: 'Serie 2',
                color: 'var(--g-color-base-danger-heavy)',
                data: [1000, 700, 330, 370, 170, 450, 340],
            },
        ],
    },
    libraryConfig: getLibraryConfig('column', 'Fancy column chart'),
};

export const dotsDashboardData: YagrWidgetData = {
    data: {
        timeline: [
            1722114000000, 1722114000100, 1722114000200, 1722114000300, 1722114000400,
            1722114000500, 1722114000600,
        ],
        graphs: [
            {
                id: '0',
                name: 'Serie 1',
                color: 'var(--g-color-base-info-heavy)',
                data: [600, 470, 120, 250, 70, 250, 200],
            },
            {
                id: '1',
                name: 'Serie 2',
                color: 'var(--g-color-base-danger-heavy)',
                data: [1000, 700, 330, 370, 170, 450, 340],
            },
        ],
    },
    libraryConfig: getLibraryConfig('dots', 'Fancy dots chart'),
};
