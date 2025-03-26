import {Button, Icon, Tab, TabList, TabProvider} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../../next-i18next.config';
import figmaIcon from '../../assets/icons/figma.svg';
import githubIcon from '../../assets/icons/github.svg';
import {MDXRenderer} from '../../components/MDXRenderer/MDXRenderer';
import {Component as ComponentType} from '../../content/components/types';
import {EnvironmentContext} from '../../contexts';
import {Contributor, block, getLocale, getRouteFromReadmeUrl} from '../../utils';
import {ArticleNavigation} from '../ArticleNavigation/ArticleNavigation';
import {HeaderMaintainerList} from '../HeaderMaintainerList';
import {Section} from '../NavigationLayout/types';
import {SandboxBlock} from '../SandboxBlock';

import './Component.scss';

const b = block('component');

enum TabType {
    Overview = 'overview',
    Design = 'design',
}

const tabs = [
    {
        id: TabType.Overview,
        title: 'Overview',
    },
    {
        id: TabType.Design,
        title: 'Design',
    },
];

export type ComponentProps = {
    libId: string;
    component: ComponentType;
    readmeContent: string;
    sections: Section[];
    maintainers: Contributor[];
};

export const Component: React.FC<ComponentProps> = ({
    libId,
    component,
    readmeContent,
    sections,
    maintainers,
}) => {
    const {t, i18n} = useTranslation();

    const locale = getLocale(i18n.language);

    const {isClient} = React.useContext(EnvironmentContext);

    const router = useRouter();
    const {tabId} = router.query;

    const [activeTab, setActiveTab] = React.useState(
        tabId === TabType.Design ? TabType.Design : TabType.Overview,
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
        setActiveTab(tabId === TabType.Design ? TabType.Design : TabType.Overview);
    }, [tabId]);

    const contentReadmeUrl = component.content?.readmeUrl[i18nextConfig.i18n.defaultLocale as 'en'];

    const rewriteLinks = React.useCallback(
        (link: string) => {
            if (!contentReadmeUrl) {
                return link;
            }

            const readmeUrl = new URL(contentReadmeUrl);
            const url = new URL(link, contentReadmeUrl);

            if (url.origin !== readmeUrl.origin) {
                return link;
            }

            const newLink = getRouteFromReadmeUrl(url.toString());
            return newLink ?? link;
        },
        [contentReadmeUrl],
    );

    return (
        <div className={b()}>
            <div className={b('header')}>
                <h1 className={b('title')}>{component.title}</h1>
                {maintainers.length > 0 || component.githubUrl || component.figmaUrl ? (
                    <div className={b('buttons')}>
                        {maintainers.length > 0 && (
                            <HeaderMaintainerList maintainers={maintainers} />
                        )}
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
                                <span>{t('actions_github')}</span>
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
                                <span>{t('component:actions_openInFigma')}</span>
                            </Button>
                        ) : null}
                    </div>
                ) : null}
            </div>

            {component.content?.design ? (
                <div className={b('tabs')}>
                    <TabProvider
                        value={activeTab}
                        onUpdate={(selectedTab) => {
                            router.replace({
                                pathname: router.asPath.split('?')[0],
                                query: {
                                    ...router.query,
                                    tabId:
                                        selectedTab === TabType.Design ? TabType.Design : undefined,
                                },
                            });
                        }}
                    >
                        <TabList size="xl">
                            {tabs.map((item) => (
                                <Tab key={item.id} value={item.id}>
                                    {item.title}
                                </Tab>
                            ))}
                        </TabList>
                    </TabProvider>
                </div>
            ) : null}

            <div className={b('content')}>
                {tabId === TabType.Design && component.content?.design ? (
                    <React.Fragment>
                        {isClient && (
                            <MDXRenderer
                                key={`${libId}-${component.id}-${locale}-design`}
                                text={component.content?.design}
                            />
                        )}
                    </React.Fragment>
                ) : (
                    <>
                        {isClient && component.sandbox ? (
                            <SandboxBlock
                                key={`${libId}-${component.id}-sandbox`}
                                libId={libId}
                                componentId={component.id}
                                sandboxConfig={component.sandbox.props}
                                isSupportRTL={component.isSupportRTL}
                            />
                        ) : null}
                        {isClient && (
                            <MDXRenderer
                                key={`${libId}-${component.id}-${locale}-overview`}
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
