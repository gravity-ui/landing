import React from 'react';

import {block} from '../../utils';

import {IconButton} from './IconButton/IconButton';
import './IconCollection.scss';
import {IconItem} from './types';

const b = block('icon-collection');

interface IconsProps {
    icons: IconItem[];
}

export const IconCollection: React.FC<IconsProps> = ({icons}) => {
    return (
        <div className={b()}>
            {icons.map((icon) => (
                <IconButton key={icon.name} icon={icon} />
            ))}
        </div>
    );
};
