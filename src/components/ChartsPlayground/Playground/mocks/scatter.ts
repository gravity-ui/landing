import {ChartData} from '@gravity-ui/charts';

import nintendoGames from './nintendo-games';

const prepareData = (): ChartData => {
    const data = nintendoGames
        .filter((d) => d.date && d.user_score)
        .map((d) => ({
            x: d.date,
            y: d.user_score,
        }));

    return {
        series: {
            data: [
                {
                    type: 'scatter',
                    data,
                    name: 'Nintendo games',
                },
            ],
        },
        yAxis: [
            {
                title: {
                    text: 'User score',
                },
            },
        ],
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Release dates',
            },
        },
    };
};

export const scatterData = prepareData();
