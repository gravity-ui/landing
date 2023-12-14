import {Button, ClipboardButton, Icon, Tabs, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';

import './Templates.scss';
import type {Tab} from './types';

const b = block('templates');

interface CommandsProps {
    commands: string[];
}

const Commands: React.FC<CommandsProps> = ({commands}) => {
    return (
        <div className={b('commands-wrapper')}>
            <div className={b('commands')}>
                {commands.map((item, index) => {
                    return (
                        <Text as="div" key={index} variant="body-3">
                            {item}
                        </Text>
                    );
                })}
            </div>
            <ClipboardButton text={commands.join(' && ')} className={b('copy')} size={16} />
        </div>
    );
};

interface TabContentProps {
    data?: Pick<Tab, 'button' | 'commands'>;
}

const TabContent: React.FC<TabContentProps> = ({data}) => {
    if (!data) {
        return null;
    }

    return (
        <>
            {data.commands && <Commands commands={data.commands} />}
            {data.button?.href && (
                <div>
                    <Button {...data.button} pin="circle-circle" view="outlined-action" size="xl">
                        {data.button.title}
                    </Button>
                </div>
            )}
        </>
    );
};

interface TemplatesProps {
    tabs: Tab[];
    className?: string;
}

export const Templates: React.FC<TemplatesProps> = ({tabs, className}) => {
    const [activeTab, setActiveTab] = React.useState(() => tabs[0]?.title);
    const tabsItems = tabs.map(({title, icon}) => ({
        id: title,
        title,
        icon: icon ? <Icon data={icon} size={24} /> : undefined,
    }));
    const activeTabData = tabs.find((el) => el.title === activeTab);

    return (
        <section className={b(null, className)}>
            <Tabs size="xl" items={tabsItems} activeTab={activeTab} onSelectTab={setActiveTab} />
            <TabContent data={activeTabData} />
        </section>
    );
};
