import {getLibById} from '../../../utils';
import {Lib} from '../types';

import buttonDesign from './content/button/design.mdx';
import buttonOverview from './content/button/overview.mdx';
import linkDesign from './content/link/design.mdx';
import linkOverview from './content/link/overview.mdx';

const {config} = getLibById('uikit');

export const uikit: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    description: config.description,
    components: [
        {
            id: 'button',
            title: 'Button',
            description: 'Button bla bla bla',
            content: {
                overview: buttonOverview,
                design: buttonDesign,
            },
        },
        {
            id: 'link',
            title: 'Link',
            description: 'Link bla bla bla',
            content: {
                overview: linkOverview,
                design: linkDesign,
            },
        },
        {
            id: 'button2',
            title: 'Button without design',
            description: 'Button bla bla bla',
            content: {
                overview: buttonOverview,
            },
        },
    ],
};
