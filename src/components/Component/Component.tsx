import {Button, Icon, Tabs} from '@gravity-ui/uikit';
import {useRouter} from 'next/router';
import React from 'react';

import figmaIcon from '../../assets/icons/figma.svg';
import githubIcon from '../../assets/icons/github.svg';
import {MDXRenderer} from '../../components/MDXRenderer/MDXRenderer';
import {Component as ComponentType} from '../../content/components/types';
import {block, getRouteFromReadmeUrl} from '../../utils';
import {ArticleNavigation} from '../ArticleNavigation/ArticleNavigation';
import {Section} from '../NavigationLayout/types';
import {SandboxBlock} from '../SandboxBlock';

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
    component: ComponentType;
    readmeContent: string;
    sections: Section[];
};

export const Component: React.FC<ComponentProps> = ({
    libId,
    component,
    readmeContent,
    sections,
}) => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    const router = useRouter();
    const {tabId} = router.query;

    const [activeTab, setActiveTab] = React.useState(
        tabId === Tab.Design ? Tab.Design : Tab.Overview,
    );

    const currentSection = React.useMemo(
        () => sections.find((item) => item.id === libId),
        [libId, sections],
    );

    const currentIndex = React.useMemo(() => {
        if (!currentSection || !currentSection.subSections) {
            return null;
        }
        return currentSection.subSections.findIndex((item) => item.id === component.id);
    }, [currentSection, component.id]);

    const nextSection = React.useMemo(() => {
        if (
            !currentSection ||
            !currentSection.subSections ||
            (!currentIndex && currentIndex !== 0)
        ) {
            return null;
        }

        const nextIndex = currentIndex + 1;

        if (nextIndex >= currentSection.subSections.length) {
            return null;
        }

        const nextSubSection = currentSection.subSections[nextIndex];

        return nextSubSection.isComingSoon ? null : nextSubSection;
    }, [currentIndex, currentSection]);

    const prevSection = React.useMemo(() => {
        if (
            !currentSection ||
            !currentSection.subSections ||
            (!currentIndex && currentIndex !== 0)
        ) {
            return null;
        }

        const prevIndex = currentIndex - 1;

        if (prevIndex < 0) {
            return null;
        }

        const prevSubSection = currentSection.subSections[prevIndex];

        return prevSubSection.isComingSoon ? null : prevSubSection;
    }, [currentIndex, currentSection]);

    React.useEffect(() => {
        setActiveTab(tabId === Tab.Design ? Tab.Design : Tab.Overview);
    }, [tabId]);

    const rewriteLinks = React.useCallback(
        (link: string) => {
            if (!component.content?.readmeUrl) {
                return link;
            }

            const readmeUrl = new URL(component.content.readmeUrl);
            const url = new URL(link, component.content.readmeUrl);

            if (url.origin !== readmeUrl.origin) {
                return link;
            }

            const newLink = getRouteFromReadmeUrl(url.toString());
            return newLink ?? link;
        },
        [component.content?.readmeUrl],
    );

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
                                pathname: router.asPath.split('?')[0],
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
                    <React.Fragment>
                        {isClient && <MDXRenderer key="design" text={component.content?.design} />}
                    </React.Fragment>
                ) : (
                    <>
                        {isClient && component.sandbox ? (
                            <SandboxBlock
                                key={`${libId}-${component.id}`}
                                libId={libId}
                                componentId={component.id}
                                sandboxConfig={component.sandbox.props}
                            />
                        ) : null}
                        {isClient && (
                            <MDXRenderer
                                key="overview"
                                text={readmeContent}
                                rewriteLinks={rewriteLinks}
                                withComponents
                            />
                        )}
                    </>
                )}
            </div>
            <div className={b('navigation')}>
                <ArticleNavigation prevSection={prevSection} nextSection={nextSection} />
            </div>
        </div>
    );
};
