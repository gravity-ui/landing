import {Tabs} from '@gravity-ui/uikit';
import {useRouter} from 'next/router';
import React from 'react';

import {MDXRenderer} from '../../components/MDXRenderer/MDXRenderer';
import {libComponents} from '../../content/components';
import {block} from '../../utils';

import './Component.scss';

const b = block('component');

export type ComponentProps = {
    libId: string;
    componentId?: string;
};

enum Tab {
    Overview = 'overview',
    Design = 'design',
}

export const Component: React.FC<ComponentProps> = ({libId, componentId}) => {
    const router = useRouter();
    const {tabId} = router.query;

    const tabs = [
        {
            id: Tab.Overview,
            title: 'Overview',
        },
        {
            id: Tab.Design,
            title: 'Design',
        },
    ];

    const [activeTab, setActiveTab] = React.useState(
        tabId === 'design' ? Tab.Design : Tab.Overview,
    );
    React.useEffect(() => {
        setActiveTab(tabId === 'design' ? Tab.Design : Tab.Overview);
    }, [tabId]);

    const lib = libComponents.find((item) => item.id === libId);
    const component = lib?.components.find((item) => item.id === componentId);

    if (!lib || !component) {
        return null;
    }

    return (
        <div className={b()}>
            <h1 className={b('title')}>{component.title}</h1>
            {component.design ? (
                <div className={b('tabs')}>
                    <Tabs
                        size="xl"
                        items={tabs}
                        activeTab={activeTab}
                        onSelectTab={(selectedTab) => {
                            router.replace({
                                pathname: router.pathname,
                                query: {
                                    ...router.query,
                                    tabId: selectedTab === Tab.Design ? 'design' : undefined,
                                },
                            });
                        }}
                    />
                </div>
            ) : null}

            <div className={b('content')}>
                {tabId === 'design' && component.design ? (
                    <MDXRenderer key="design" text={component.design} />
                ) : (
                    <MDXRenderer key="content" text={component.content} withComponents />
                )}
            </div>
        </div>
    );
};
