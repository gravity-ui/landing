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
                    type: 'bar-x',
                    data: categories.map((key) => ({
                        x: key,
                        y: gamesByPlatform[key],
                    })),
                    name: 'Games released',
                },
            ],
        },
        xAxis: {
            type: 'category',
            categories,
            title: {
                text: 'Game Platforms',
            },
        },
        yAxis: [{title: {text: 'Number of games released'}}],
    };
};

export const barXData = prepareData();
