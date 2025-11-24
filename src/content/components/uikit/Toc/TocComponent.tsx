import {Toc} from '@gravity-ui/uikit';
import React from 'react';

const items = [
    {
        value: 'vm',
        content: 'Virtual machine creation',
    },
    {
        value: 'info',
        content: 'Getting information about a group of virtual machines',
    },
    {
        value: 'disk',
        content: 'Disk',
        items: [
            {
                value: 'control',
                content: 'Disk controls',
                items: [
                    {
                        value: 'floppy',
                        content: 'Floppy',
                    },
                    {
                        value: 'hard',
                        content: 'Hard',
                        items: [],
                    },
                ],
            },
            {
                value: 'snapshots',
                content: 'Disk snapshots',
                items: [
                    {
                        value: 'standard',
                        content: 'Standard',
                    },
                ],
            },
        ],
    },
    {
        value: 'images',
        content: 'Images with preinstalled software',
    },
];

export const TocComponent = () => {
    const [value, setValue] = React.useState('vm');

    return <Toc items={items} value={value} onUpdate={setValue} />;
};
