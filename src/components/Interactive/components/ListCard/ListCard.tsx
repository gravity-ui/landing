import {List} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

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
            <List
                items={ITEMS}
                itemsHeight={(items) => Math.min(5, items.length) * 14}
                filterPlaceholder="Search"
                emptyPlaceholder="Nobody left here"
            />
        </InteractiveCard>
    );
};
