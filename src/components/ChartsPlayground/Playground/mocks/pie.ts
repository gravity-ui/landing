import {ChartData} from '@gravity-ui/charts';

import nintendoGames from './nintendo-games';

const prepareData = (): ChartData => {
    const gamesByPlatform: Record<string, number> = {};

    for (const game of nintendoGames) {
        const key = game.platform;

        gamesByPlatform[key] = (gamesByPlatform[key] || 0) + 1;
    }

    return {
        series: {
            data: [
                {
                    type: 'pie',
                    data: Object.keys(gamesByPlatform).map((key) => ({
                        name: key,
                        value: gamesByPlatform[key],
                    })),
                    minRadius: 0,
                },
            ],
        },
        legend: {enabled: true},
        title: {
            text: 'Platforms',
            style: {fontSize: '12px', fontWeight: 'normal'},
        },
    };
};

export const pieData = prepareData();
