import {Breadcrumbs, Flex} from 'landing-uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

const firstItems = [
    {
        text: 'Harder',
        action: () => {},
    },
    {
        text: 'Better',
        action: () => {},
    },
];

const secondItems = [
    {
        text: 'Harder',
        action: () => {},
    },
    {
        text: 'Better',
        action: () => {},
    },
    {
        text: 'Faster',
        action: () => {},
    },
];

const thirdItems = [
    {
        text: 'Harder',
        action: () => {},
    },
    {
        text: 'Better',
        action: () => {},
    },
    {
        text: 'Faster',
        action: () => {},
    },
    {
        text: 'Stronger',
        action: () => {},
    },
];

export const BreadcrumbsCard = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <InteractiveCard>
            <Flex direction="column" space={3} width={290}>
                <Breadcrumbs
                    firstDisplayedItemsCount={1}
                    lastDisplayedItemsCount={2}
                    items={firstItems}
                />
                <Breadcrumbs
                    firstDisplayedItemsCount={1}
                    lastDisplayedItemsCount={2}
                    items={secondItems}
                />
                <Breadcrumbs
                    firstDisplayedItemsCount={1}
                    lastDisplayedItemsCount={2}
                    items={thirdItems}
                />
            </Flex>
        </InteractiveCard>
    );
};
