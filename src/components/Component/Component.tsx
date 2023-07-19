import {Tabs} from '@gravity-ui/uikit';
import {useRouter} from 'next/router';
import React from 'react';

import {MDXRenderer} from '../../components/MDXRenderer/MDXRenderer';
import {libs} from '../../content/components';
import {block} from '../../utils';

import './Component.scss';

const b = block('component');

enum Tab {
    Overview = 'overview',
    Design = 'design',
}

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

export type ComponentProps = {
    libId: string;
    componentId?: string;
};

export const Component: React.FC<ComponentProps> = ({libId, componentId}) => {
    const router = useRouter();
    const {tabId} = router.query;

    const [activeTab, setActiveTab] = React.useState(
        tabId === Tab.Design ? Tab.Design : Tab.Overview,
    );
    React.useEffect(() => {
        setActiveTab(tabId === Tab.Design ? Tab.Design : Tab.Overview);
    }, [tabId]);

    const lib = libs.find((item) => item.id === libId);
    const component = lib?.components.find((item) => item.id === componentId);

    if (!lib || !component) {
        return null;
    }

    return (
        <div className={b()}>
            <h1 className={b('title')}>{component.title}</h1>

            {component.content?.design ? (
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
                                    tabId: selectedTab === Tab.Design ? Tab.Design : undefined,
                                },
                            });
                        }}
                    />
                </div>
            ) : null}

            <div className={b('content')}>
                {tabId === Tab.Design && component.content?.design ? (
                    <MDXRenderer key="design" text={component.content?.design} />
                ) : (
                    <MDXRenderer
                        key="overview"
                        text={component.content?.overview ?? ''}
                        withComponents
                    />
                )}
            </div>
        </div>
    );
};
