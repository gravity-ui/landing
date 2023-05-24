import {getLibById} from '../../../utils';

import buttonContent from './content/button.mdx';
import linkContent from './content/link.mdx';

const {config} = getLibById('uikit');

export const uikit = {
    id: config.id,
    title: config.title,
    description: config.description,
    content: '#UIKit',
    components: [
        {
            id: 'button',
            title: 'Button',
            description: 'Button bla bla bla',
            content: buttonContent,
        },
        {
            id: 'link',
            title: 'Link',
            description: 'Link bla bla bla',
            content: linkContent,
        },
    ],
};
