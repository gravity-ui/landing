import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {i18n} from 'next-i18next.config';
import React from 'react';
import {Section} from 'src/components/NavigationLayout/types';

import {Component} from '../../../../components/Component/Component';
import {ComponentsLayout} from '../../../../components/ComponentsLayout/ComponentsLayout';
import {Layout} from '../../../../components/Layout/Layout';
import {libs} from '../../../../content/components';
import {useLocaleRedirect} from '../../../../hooks/useLocaleRedirect';
import {getLibById, getLibComponents, getLocale, getMaintainers} from '../../../../utils';
import {getI18nPaths, getI18nProps} from '../../../../utils/i18next';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getI18nPaths().reduce<GetStaticPathsResult['paths']>((acc, localeItem) => {
        acc.push(
            ...libs.reduce<{params: {locale: string; libId: string; componentId: string}}[]>(
                (libsAcc, lib) => {
                    lib.components
                        .filter((component) => component.isComingSoon !== true)
                        .forEach((component) => {
                            libsAcc.push({
                                params: {
                                    locale: localeItem.params.locale,
                                    libId: lib.id,
                                    componentId: component.id,
                                },
                            });
                        });
                    return libsAcc;
                },
                [],
            ),
        );
        return acc;
    }, []);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const components = getLibComponents(ctx.params?.libId as string);
    const component = components.find((item) => item.id === ctx.params?.componentId);

    if (!component?.content?.readmeUrl) {
        throw new Error(
            `Component "${ctx.params?.componentId}" in library "${ctx.params?.libId}" doesn't have url for readme file`,
        );
    }

    let readmeContent = '';

    const localeParam = ctx?.params?.locale;
    const locale = getLocale(typeof localeParam === 'string' ? localeParam : 'en');

    try {
        const headers: Record<string, string> = {'User-Agent': 'request'};
        if (process.env.GITHUB_TOKEN) {
            headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        // TODO: Preload content
        const res = await fetch(component.content.readmeUrl[locale]);
        if (res.status >= 200 && res.status < 300) {
            readmeContent = await res.text();
        } else if (locale !== i18n.defaultLocale) {
            const fallbackRes = await fetch(
                component.content.readmeUrl[i18n.defaultLocale as 'en'],
            );
            if (fallbackRes.status >= 200 && fallbackRes.status < 300) {
                readmeContent = await fallbackRes.text();
            }
        }
    } catch {}

    return {
        props: {
            libId: ctx.params?.libId,
            componentId: ctx.params?.componentId,
            readmeContent,
            ...(await getI18nProps(ctx, ['component'])),
        },
    };
};

export const ComponentPage = ({
    libId,
    componentId,
    readmeContent,
}: {
    libId: string;
    componentId: string;
    readmeContent: string;
}) => {
    useLocaleRedirect();

    const lib = libs.find((item) => item.id === libId);
    const component = lib?.components.find((item) => item.id === componentId);

    const windowBreakpoint = useWindowBreakpoint();
    const isMobile = windowBreakpoint < BREAKPOINTS.lg;

    if (!lib || !component) {
        return null;
    }

    const maintainers = getMaintainers(getLibById(libId), `/src/components/${component.title}`);

    const sections = React.useMemo<Section[]>(() => {
        return libs.map(({id, title, components}) => {
            return {
                id: id,
                title: title,
                // url: `/components/${lib.id}`, // "Overview" link
                subSections: components.map((componentConfig) => ({
                    id: componentConfig.id,
                    title: componentConfig.title,
                    url:
                        componentConfig.isComingSoon === true
                            ? '#'
                            : `/components/${id}/${componentConfig.id}`,
                    isComingSoon: componentConfig.isComingSoon,
                })),
            };
        });
    }, []);

    return (
        <Layout title={`${lib.title} – ${component.title}`} hideFooter noScroll={!isMobile}>
            <ComponentsLayout libId={libId} componentId={componentId} sections={sections}>
                <Component
                    libId={libId}
                    component={component}
                    readmeContent={readmeContent}
                    sections={sections}
                    maintainers={maintainers}
                />
            </ComponentsLayout>
        </Layout>
    );
};

export default ComponentPage;
