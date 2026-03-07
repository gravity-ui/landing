import {ChartData} from '@gravity-ui/charts';

export const sankeyData: ChartData = {
    title: {
        text: 'Average user score by platform',
    },
    tooltip: {
        enabled: true,
    },
    series: {
        data: [
            {
                type: 'sankey',
                data: [
                    {
                        name: 'Switch',
                        links: [
                            {
                                name: '3',
                                value: 2,
                            },
                            {
                                name: '4',
                                value: 3,
                            },
                            {
                                name: '5',
                                value: 7,
                            },
                            {
                                name: '6',
                                value: 16,
                            },
                            {
                                name: '7',
                                value: 44,
                            },
                            {
                                name: '8',
                                value: 63,
                            },
                            {
                                name: '9',
                                value: 34,
                            },
                        ],
                    },
                    {
                        name: 'iOS',
                        links: [
                            {
                                name: '3',
                                value: 1,
                            },
                            {
                                name: '4',
                                value: 3,
                            },
                            {
                                name: '6',
                                value: 4,
                            },
                            {
                                name: '7',
                                value: 4,
                            },
                            {
                                name: '8',
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: '3DS',
                        links: [
                            {
                                name: '4',
                                value: 2,
                            },
                            {
                                name: '5',
                                value: 4,
                            },
                            {
                                name: '6',
                                value: 20,
                            },
                            {
                                name: '7',
                                value: 65,
                            },
                            {
                                name: '8',
                                value: 86,
                            },
                            {
                                name: '9',
                                value: 14,
                            },
                        ],
                    },
                    {
                        name: 'WIIU',
                        links: [
                            {
                                name: '4',
                                value: 1,
                            },
                            {
                                name: '5',
                                value: 4,
                            },
                            {
                                name: '6',
                                value: 4,
                            },
                            {
                                name: '7',
                                value: 13,
                            },
                            {
                                name: '8',
                                value: 27,
                            },
                            {
                                name: '9',
                                value: 18,
                            },
                        ],
                    },
                    {
                        name: 'WII',
                        links: [
                            {
                                name: '5',
                                value: 3,
                            },
                            {
                                name: '6',
                                value: 4,
                            },
                            {
                                name: '7',
                                value: 21,
                            },
                            {
                                name: '8',
                                value: 64,
                            },
                            {
                                name: '9',
                                value: 48,
                            },
                        ],
                    },
                    {
                        name: 'DS',
                        links: [
                            {
                                name: '10',
                                value: 1,
                            },
                            {
                                name: '4',
                                value: 2,
                            },
                            {
                                name: '5',
                                value: 1,
                            },
                            {
                                name: '6',
                                value: 9,
                            },
                            {
                                name: '7',
                                value: 29,
                            },
                            {
                                name: '8',
                                value: 69,
                            },
                            {
                                name: '9',
                                value: 19,
                            },
                        ],
                    },
                    {
                        name: 'GBA',
                        links: [
                            {
                                name: '4',
                                value: 1,
                            },
                            {
                                name: '5',
                                value: 1,
                            },
                            {
                                name: '6',
                                value: 2,
                            },
                            {
                                name: '7',
                                value: 2,
                            },
                            {
                                name: '8',
                                value: 25,
                            },
                            {
                                name: '9',
                                value: 32,
                            },
                        ],
                    },
                    {
                        name: 'GC',
                        links: [
                            {
                                name: '5',
                                value: 1,
                            },
                            {
                                name: '6',
                                value: 1,
                            },
                            {
                                name: '7',
                                value: 2,
                            },
                            {
                                name: '8',
                                value: 28,
                            },
                            {
                                name: '9',
                                value: 20,
                            },
                        ],
                    },
                    {
                        name: 'N64',
                        links: [
                            {
                                name: '6',
                                value: 1,
                            },
                            {
                                name: '7',
                                value: 2,
                            },
                            {
                                name: '8',
                                value: 15,
                            },
                            {
                                name: '9',
                                value: 13,
                            },
                        ],
                    },
                    {
                        name: '3',
                        links: [],
                    },
                    {
                        name: '4',
                        links: [],
                    },
                    {
                        name: '5',
                        links: [],
                    },
                    {
                        name: '6',
                        links: [],
                    },
                    {
                        name: '7',
                        links: [],
                    },
                    {
                        name: '8',
                        links: [],
                    },
                    {
                        name: '9',
                        links: [],
                    },
                    {
                        name: '10',
                        links: [],
                    },
                ],
                name: 'Series 1',
            },
        ],
    },
};
