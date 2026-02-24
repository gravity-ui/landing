import {ChartData} from '@gravity-ui/charts';

import nintendoGames from './nintendo-games';

const prepareData = (): ChartData => {
    const gamesByPlatform: Record<string, number> = {};

    for (const game of nintendoGames) {
        const key = game.platform;

        gamesByPlatform[key] = (gamesByPlatform[key] || 0) + 1;
    }

    const categories = Object.keys(gamesByPlatform);

    return {
        series: {
            data: [
                {
                    type: 'bar-y',
                    data: categories.map((key) => ({
                        x: gamesByPlatform[key],
                        y: key,
                    })),
                    name: 'Games released',
                },
            ],
        },
        xAxis: {title: {text: 'Number of games released'}},
        yAxis: [
            {
                type: 'category',
                categories,
                title: {
                    text: 'Game Platforms',
                },
            },
        ],
    };
};

export const barYData = prepareData();
