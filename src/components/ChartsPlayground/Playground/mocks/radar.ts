import {ChartData} from '@gravity-ui/charts';

export const radarData: ChartData = {
    series: {
        data: [
            {
                categories: [
                    {
                        key: 'Attack',
                        maxValue: 50,
                    },
                    {
                        key: 'Defence',
                        maxValue: 50,
                    },
                    {
                        key: 'Health',
                        maxValue: 1000,
                    },
                    {
                        key: 'Speed',
                        maxValue: 21,
                    },
                    {
                        key: 'AI_Value',
                        maxValue: 78845,
                    },
                ],
                data: [
                    {
                        value: 17,
                    },
                    {
                        value: 15,
                    },
                    {
                        value: 150,
                    },
                    {
                        value: 9,
                    },
                    {
                        value: 3388,
                    },
                ],
                name: 'BoneDragon',
                type: 'radar',
                visible: false,
            },
            {
                categories: [],
                data: [
                    {
                        value: 19,
                    },
                    {
                        value: 17,
                    },
                    {
                        value: 200,
                    },
                    {
                        value: 14,
                    },
                    {
                        value: 4696,
                    },
                ],
                name: 'GhostDragon',
                type: 'radar',
                visible: false,
            },
            {
                categories: [],
                data: [
                    {
                        value: 19,
                    },
                    {
                        value: 19,
                    },
                    {
                        value: 180,
                    },
                    {
                        value: 11,
                    },
                    {
                        value: 4702,
                    },
                ],
                name: 'RedDragon',
                type: 'radar',
                visible: false,
            },
            {
                categories: [],
                data: [
                    {
                        value: 25,
                    },
                    {
                        value: 25,
                    },
                    {
                        value: 300,
                    },
                    {
                        value: 15,
                    },
                    {
                        value: 8721,
                    },
                ],
                name: 'BlackDragon',
                type: 'radar',
                visible: true,
            },
            {
                categories: [],
                data: [
                    {
                        value: 20,
                    },
                    {
                        value: 20,
                    },
                    {
                        value: 500,
                    },
                    {
                        value: 15,
                    },
                    {
                        value: 19580,
                    },
                ],
                name: 'FaerieDragon',
                type: 'radar',
                visible: true,
            },
            {
                categories: [],
                data: [
                    {
                        value: 30,
                    },
                    {
                        value: 30,
                    },
                    {
                        value: 750,
                    },
                    {
                        value: 17,
                    },
                    {
                        value: 26433,
                    },
                ],
                name: 'RustDragon',
                type: 'radar',
                visible: false,
            },
            {
                categories: [],
                data: [
                    {
                        value: 40,
                    },
                    {
                        value: 40,
                    },
                    {
                        value: 800,
                    },
                    {
                        value: 16,
                    },
                    {
                        value: 39338,
                    },
                ],
                name: 'CrystalDragon',
                type: 'radar',
                visible: false,
            },
            {
                categories: [],
                data: [
                    {
                        value: 50,
                    },
                    {
                        value: 50,
                    },
                    {
                        value: 1000,
                    },
                    {
                        value: 19,
                    },
                    {
                        value: 78845,
                    },
                ],
                name: 'AzureDragon',
                type: 'radar',
                visible: false,
            },
        ],
    },
    title: {
        text: 'Heroes of Might and Magic 3 Units (dragons)',
    },
    tooltip: {
        valueFormat: {
            type: 'number',
        },
    },
};
