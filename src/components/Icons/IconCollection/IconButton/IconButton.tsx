import {Button, Icon} from 'landing-uikit';
import React from 'react';

import {block} from '../../../../utils';
import type {IconItem} from '../../types';

import './IconButton.scss';

const b = block('icon-button');

const ICON_SIZE = 20;

interface IconsProps {
    icon: IconItem;
    onClick?: (item: IconItem) => void;
}

export const IconButton = ({icon, onClick}: IconsProps) => {
    const handleClick = React.useCallback(() => {
        onClick?.(icon);
    }, [icon, onClick]);

    return (
        <Button view="flat" size="xl" pin="round-round" className={b()} onClick={handleClick}>
            <Icon data={icon.data} size={ICON_SIZE} />
        </Button>
    );
};
