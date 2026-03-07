import {ChartData} from '@gravity-ui/charts';

import nintendoGames from './nintendo-games';

const prepareData = (): ChartData => {
    const data = nintendoGames
        .filter((d) => d.date && d.user_score && d.genres.includes('Puzzle'))
        .map((d) => ({
            x: Number(d.date),
            y: Number(d.user_score),
        }));

    return {
        series: {
            data: [
                {
                    name: 'User score',
                    type: 'area',
                    data,
                },
            ],
        },
        xAxis: {
            type: 'datetime',
        },
    };
};

export const areaData = prepareData();
