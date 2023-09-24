import {Tabs} from '@gravity-ui/uikit';
import React from 'react';

import {InteractiveCard} from '../InteractiveCard';

const TAB_CHANGE_TIMEOUT = 3000;

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
    const [activeTab, setActiveTab] = React.useState(tabItems[0].id);

    React.useEffect(() => {
        let currentTabIndex = 0;
        const intervalId = setInterval(() => {
            if (currentTabIndex === 3) {
                currentTabIndex = 0;
            } else {
                currentTabIndex += 1;
            }
            setActiveTab(tabItems[currentTabIndex].id);
        }, TAB_CHANGE_TIMEOUT);

        return () => {
            clearInterval(intervalId);
        };
    }, [setActiveTab]);

    return (
        <InteractiveCard>
            <Tabs activeTab={activeTab} items={tabItems} />
        </InteractiveCard>
    );
};
