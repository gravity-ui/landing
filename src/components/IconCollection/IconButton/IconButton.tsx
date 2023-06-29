import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../utils';
import type {IconItem} from '../types';

import './IconButton.scss';

const b = block('icon-button');

const ICON_SIZE = 20;

interface IconsProps {
    icon: IconItem;
}

export const IconButton: React.FC<IconsProps> = ({icon}) => {
    return (
        <div className={b()}>
            <Icon data={icon.data} size={ICON_SIZE} />
        </div>
    );
};
