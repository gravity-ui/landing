import {Tabs} from '@gravity-ui/uikit';

import {InteractiveCard} from '../InteractiveCard';

const TABS = {
    FIRST: 'Harder',
    SECOND: 'Better',
    THIRD: 'Faster',
    FOURTH: 'Stronger',
} as const;

const tabItems = [
    {
        id: TABS.FIRST,
        hint: TABS.FIRST,
        title: TABS.FIRST,
    },
    {
        id: TABS.SECOND,
        hint: TABS.SECOND,
        title: TABS.SECOND,
    },
    {
        id: TABS.THIRD,
        hint: TABS.THIRD,
        title: TABS.THIRD,
    },
    {
        id: TABS.FOURTH,
        hint: TABS.FOURTH,
        title: TABS.FOURTH,
    },
];

export const TabsCard = () => {
    return (
        <InteractiveCard>
            <Tabs items={tabItems} />
        </InteractiveCard>
    );
};
