import {Tabs, TabsProps} from '@gravity-ui/uikit';
import React from 'react';

type TabsComponentProps = {
    size?: TabsProps['size'];
    disabled?: boolean;
};

export const TabsComponent = ({size, disabled = false}: TabsComponentProps) => {
    const [activeTab, setActiveTab] = React.useState('first');
    return (
        <Tabs
            size={size}
            activeTab={activeTab}
            onSelectTab={(newActiveTab) => {
                setActiveTab(newActiveTab);
            }}
            items={[
                {id: 'first', title: 'First Tab', disabled},
                {id: 'second', title: 'Second Tab', disabled},
                {id: 'third', title: 'Third Tab', disabled},
            ]}
        />
    );
};
