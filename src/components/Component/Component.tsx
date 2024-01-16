import {Button, Icon, Tabs} from '@gravity-ui/uikit';
import {URL} from 'next/dist/compiled/@edge-runtime/primitives/url';
import {useRouter} from 'next/router';
import React, {useMemo} from 'react';
import {CONTENT_WRAPPER_ID} from 'src/constants';

import figmaIcon from '../../assets/icons/figma.svg';
import githubIcon from '../../assets/icons/github.svg';
import {MDXRenderer} from '../../components/MDXRenderer/MDXRenderer';
import {Component as ComponentType} from '../../content/components/types';
import {block, getRouteFromReadmeUrl} from '../../utils';
import {ArticleNavigations} from '../ArticleNavigations';
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
    const router = useRouter();
    const {tabId} = router.query;

    const [activeTab, setActiveTab] = React.useState(
        tabId === Tab.Design ? Tab.Design : Tab.Overview,
    );
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

    const currentSection = useMemo(
        () => sections.find((item) => item.id === libId),
        [libId, sections],
    );

    const currentIndex = useMemo(() => {
        if (!currentSection || !currentSection.subSections || !currentIndex) {
            return null;
        }
        return currentSection.subSections.findIndex((item) => item.id === component.id);
    }, [currentSection, component.id]);

    const nextSection = useMemo(() => {
        if (!currentSection || !currentSection.subSections || !currentIndex) {
            return null;
        }
        const nextIndex = (currentIndex + 1) % currentSection.subSections.length;
        return currentSection.subSections[nextIndex];
    }, [currentIndex, currentSection]);

    const prevSection = useMemo(() => {
        if (!currentSection || !currentSection.subSections || !currentIndex) {
            return null;
        }
        const prevIndex =
            (currentIndex - 1 + currentSection.subSections.length) %
            currentSection.subSections.length;
        return currentSection.subSections[prevIndex];
    }, [currentIndex, currentSection]);

    const scrollTop = React.useCallback(() => {
        const content = document.getElementById(CONTENT_WRAPPER_ID);
        if (content) {
            content.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, []);

    const onNextHandler = () => {
        if (!nextSection) {
            return;
        }
        router.push(nextSection.url);
        scrollTop();
    };

    const onPrevHandler = () => {
        if (!prevSection) {
            return;
        }
        router.push(prevSection.url);
        scrollTop();
    };

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
                    <>
                        {typeof window !== 'undefined' && component.sandbox ? (
                            <SandboxBlock
                                key={`${libId}-${component.id}`}
                                libId={libId}
                                componentId={component.id}
                                sandboxConfig={component.sandbox.props}
                            />
                        ) : null}
                        <MDXRenderer
                            key="overview"
                            text={readmeContent}
                            rewriteLinks={rewriteLinks}
                            withComponents
                        />
                        {typeof window !== 'undefined' && prevSection && nextSection ? (
                            <div className={b('navigation')}>
                                <ArticleNavigations
                                    prevHandler={onPrevHandler}
                                    nextHandler={onNextHandler}
                                    previousTitle={prevSection.title}
                                    nextTitle={nextSection.title}
                                />
                            </div>
                        ) : null}
                    </>
                )}
            </div>
        </div>
    );
};
