import {getLibById} from '../../../utils';

import buttonDesignContent from './content/button-design.mdx';
import buttonContent from './content/button.mdx';
import linkDesignContent from './content/link-design.mdx';
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
            design: buttonDesignContent,
        },
        {
            id: 'link',
            title: 'Link',
            description: 'Link bla bla bla',
            content: linkContent,
            design: linkDesignContent,
        },
        {
            id: 'button2',
            title: 'Button without design',
            description: 'Button bla bla bla',
            content: buttonContent,
        },
        // {
        //     id: 'button3',
        //     title: 'Button3',
        //     description: 'Button bla bla bla',
        //     content: buttonContent,
        // },
        // {
        //     id: 'button4',
        //     title: 'Button4',
        //     description: 'Button bla bla bla',
        //     content: buttonContent,
        // },
    ],
};
