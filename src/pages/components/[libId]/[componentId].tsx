import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {i18n} from 'next-i18next.config';
import React from 'react';
import {Section} from 'src/components/NavigationLayout/types';
import {type Lib, fetchLibById} from 'src/services/lib';

import i18nextConfig from '../../../../next-i18next.config';
import {Component} from '../../../components/Component/Component';
import {ComponentsLayout} from '../../../components/ComponentsLayout/ComponentsLayout';
import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';
import {getLibComponents, getLibraryMeta, getMaintainers} from '../../../utils';
import {getI18nProps} from '../../../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const components = getLibComponents(ctx.params?.libId as string);
    const component = components.find((item) => item.id === ctx.params?.componentId);

    if (!component?.content?.readmeUrl) {
        throw new Error(
            `Component "${ctx.params?.componentId}" in library "${ctx.params?.libId}" doesn't have url for readme file`,
        );
    }

    let readmeContent = '';

    const locale = ctx.locale ?? i18nextConfig.i18n.defaultLocale;

    const libId = ctx.params?.libId as string;

    const libPromise = fetchLibById(libId);
    const i18nPropsPromise = getI18nProps(ctx, ['component', 'libraries-info']);

    try {
        const headers: Record<string, string> = {'User-Agent': 'request'};
        if (process.env.GITHUB_TOKEN) {
            headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        if (locale !== 'en' && locale !== 'ru') {
            try {
                readmeContent = await import(
                    `../../../content/local-docs/components/${ctx.params?.libId}/${component.id}/README-${locale}.md`
                ).then((module) => module.default);
            } catch (err) {
                console.warn(
                    `Can't find local docs for "${component.id}", library "${ctx.params?.libId}", lang "${locale}"`,
                );
            }
        } else {
            // TODO: Preload content
            const res = await fetch(component.content.readmeUrl[locale]);
            if (res.status >= 200 && res.status < 300) {
                readmeContent = await res.text();
            }
        }

        if (!readmeContent && locale !== i18n.defaultLocale) {
            const fallbackRes = await fetch(
                component.content.readmeUrl[i18n.defaultLocale as 'en'],
            );
            if (fallbackRes.status >= 200 && fallbackRes.status < 300) {
                readmeContent = await fallbackRes.text();
            }
        }
    } catch (err) {
        console.warn(err);
    }

    const [lib, i18nProps] = await Promise.all([libPromise, i18nPropsPromise]);

    return {
        props: {
            lib,
            componentId: ctx.params?.componentId,
            readmeContent,
            ...i18nProps,
        },
    };
};

export const ComponentPage = ({
    lib,
    componentId,
    readmeContent,
}: {
    lib: Lib;
    componentId: string;
    readmeContent: string;
}) => {
    const {t} = useTranslation();
    const componentsLib = libs.find((item) => item.id === lib.config.id);
    const component = componentsLib?.components.find((item) => item.id === componentId);

    const windowBreakpoint = useWindowBreakpoint();
    const isMobile = windowBreakpoint < BREAKPOINTS.lg;

    if (!lib || !component) {
        return null;
    }

    const maintainers = getMaintainers(lib, `/src/components/${component.title}`);

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
        <Layout
            title={`${lib.config.title} – ${component.title}`}
            hideFooter
            noScroll={!isMobile}
            meta={getLibraryMeta({id: lib.config.id, title: lib.config.title}, t, component.title)}
        >
            <ComponentsLayout libId={lib.config.id} componentId={componentId} sections={sections}>
                <Component
                    libId={lib.config.id}
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
