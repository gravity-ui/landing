import {List} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard';

import './ListCard.scss';

const b = block('list-card');

export const ListCard = () => {
    const ITEMS = [
        'More than ever',
        'Hour after hour',
        'Work is never over',
        'Around the world',
        'Triangle of Sadness',
        'Sell my soul',
    ];

    return (
        <InteractiveCard>
            <div className={b()}>
                <List
                    className={b('list')}
                    filterClassName={b('filter')}
                    itemClassName={b('item')}
                    items={ITEMS}
                    itemsHeight={(items) => Math.min(5, items.length) * 14}
                    filterPlaceholder="Search"
                    emptyPlaceholder="Nobody left here"
                />
            </div>
        </InteractiveCard>
    );
};
