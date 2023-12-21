import {Button, ClipboardButton, Icon, Tabs} from '@gravity-ui/uikit';
import Prism from 'prismjs';
import React from 'react';

require('prismjs/components/prism-bash');

import {block} from '../../utils';

import './Templates.scss';
import type {Tab} from './types';

const b = block('templates');

interface CommandsProps {
    commands: string[];
}

const Commands: React.FC<CommandsProps> = ({commands}) => {
    const html = Prism.highlight(commands.join('\n'), Prism.languages.bash, 'bash');
    return (
        <div className={b('commands-wrapper')}>
            <pre>
                <code className={b('commands')} dangerouslySetInnerHTML={{__html: html}} />
            </pre>
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
}

export const Templates: React.FC<TemplatesProps> = ({tabs}) => {
    const [activeTab, setActiveTab] = React.useState(() => tabs[0]?.title);
    const tabsItems = tabs.map(({title, icon}) => ({
        id: title,
        title,
        icon: icon ? <Icon data={icon} size={24} /> : undefined,
    }));
    const activeTabData = tabs.find((el) => el.title === activeTab);

    return (
        <section className={b(null)}>
            <div className={b('tabs-wrapper')}>
                <Tabs
                    size="xl"
                    items={tabsItems}
                    activeTab={activeTab}
                    onSelectTab={setActiveTab}
                    className={b('tabs')}
                />
            </div>
            <TabContent data={activeTabData} />
        </section>
    );
};
