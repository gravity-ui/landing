import React from 'react';

import {block} from '../../../utils';

import {IconButton} from './IconButton/IconButton';
import './IconCollection.scss';
import {IconItem} from './types';

const b = block('icon-collection');

interface IconsProps {
    icons: IconItem[];
    onSelectIcon?: (item: IconItem) => void;
}

export const IconCollection: React.FC<IconsProps> = ({icons, onSelectIcon}) => {
    const handleClick = React.useCallback((item: IconItem) => onSelectIcon?.(item), [onSelectIcon]);

    return (
        <div className={b()}>
            {icons.map((icon) => (
                <IconButton key={icon.name} icon={icon} onClick={handleClick} />
            ))}
        </div>
    );
};
