import {ChartData} from '@gravity-ui/charts';

export const treemapData: ChartData = {
    series: {
        data: [
            {
                type: 'treemap',
                name: 'Basic Example',
                levels: [
                    {index: 1, padding: 5},
                    {index: 2, padding: 3},
                    {index: 3, padding: 1},
                ],
                data: [
                    {name: 'One', value: 15},
                    {name: 'Two', value: 10},
                    {name: 'Three', value: 15},
                    {name: 'Four'},
                    {name: 'Four first child', value: 5, parentId: 'Four'},
                    {name: 'Four second child', value: 20, parentId: 'Four'},
                ],
            },
        ],
    },
};
