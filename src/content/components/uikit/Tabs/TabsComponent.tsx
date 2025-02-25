import {Tab, TabList, TabListProps, TabProvider} from '@gravity-ui/uikit';
import React from 'react';

type TabsComponentProps = {
    size?: TabListProps['size'];
    disabled?: boolean;
};

export const TabsComponent = ({size, disabled = false}: TabsComponentProps) => {
    const [activeTab, setActiveTab] = React.useState('first');
    return (
        <TabProvider
            value={activeTab}
            onUpdate={(newActiveTab) => {
                setActiveTab(newActiveTab);
            }}
        >
            <TabList size={size}>
                {[
                    {id: 'first', title: 'First Tab'},
                    {id: 'second', title: 'Second Tab'},
                    {id: 'third', title: 'Third Tab'},
                ].map((item) => (
                    <Tab key={item.id} value={item.id} disabled={disabled}>
                        {item.title}
                    </Tab>
                ))}
            </TabList>
        </TabProvider>
    );
};
