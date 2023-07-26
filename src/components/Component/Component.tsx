import {Button, Icon, Tabs} from '@gravity-ui/uikit';
import {useRouter} from 'next/router';
import React from 'react';

import figmaIcon from '../../assets/icons/figma.svg';
import githubIcon from '../../assets/icons/github.svg';
import {MDXRenderer} from '../../components/MDXRenderer/MDXRenderer';
import {Component as ComponentType} from '../../content/components/types';
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
    component: ComponentType;
};

export const Component: React.FC<ComponentProps> = ({component}) => {
    const router = useRouter();
    const {tabId} = router.query;

    const [activeTab, setActiveTab] = React.useState(
        tabId === Tab.Design ? Tab.Design : Tab.Overview,
    );
    React.useEffect(() => {
        setActiveTab(tabId === Tab.Design ? Tab.Design : Tab.Overview);
    }, [tabId]);

    return (
        <div className={b()}>
            <div className={b('header')}>
                <h1 className={b('title')}>{component.title}</h1>
                {component.githubUrl || component.figmaUrl ? (
                    <div className={b('buttons')}>
                        {component.githubUrl ? (
                            <Button
                                key="github"
                                className={b('button')}
                                view="outlined"
                                size="l"
                                href={component.githubUrl}
                                target="_blank"
                            >
                                <Icon data={githubIcon} size={16} />
                                <span>Github</span>
                            </Button>
                        ) : null}
                        {component.figmaUrl ? (
                            <Button
                                key="figma"
                                className={b('button')}
                                view="outlined"
                                size="l"
                                href={component.figmaUrl}
                                target="_blank"
                            >
                                <Icon data={figmaIcon} size={16} />
                                <span>Open in Figma</span>
                            </Button>
                        ) : null}
                    </div>
                ) : null}
            </div>

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
