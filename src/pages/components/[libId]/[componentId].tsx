import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {GetServerSideProps} from 'next';
import React from 'react';
import {Section} from 'src/components/NavigationLayout/types';

import i18nextConfig from '../../../../next-i18next.config';
import {Api, type LibWithFullData} from '../../../api';
import {Component} from '../../../components/Component/Component';
import {ComponentsLayout} from '../../../components/ComponentsLayout/ComponentsLayout';
import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';
import {type MetaProps, getComponentMeta, getLibComponents, getMaintainers} from '../../../utils';
import {getI18nProps} from '../../../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const components = getLibComponents(ctx.params?.libId as string);
    const component = components.find((item) => item.id === ctx.params?.componentId);

    if (!component) {
        return {
            notFound: true,
        };
    }

    if (!component.content?.readmeUrl) {
        throw new Error(
            `Component "${ctx.params?.componentId}" in library "${ctx.params?.libId}" doesn't have url for readme file`,
        );
    }

    const locale = ctx.locale ?? i18nextConfig.i18n.defaultLocale;

    const libId = ctx.params?.libId as string;

    const libPromise = Api.instance.fetchLibByIdWithCache(libId);
    const i18nPropsPromise = getI18nProps(ctx, ['component', 'libraries-info']);
    const readmePromise = Api.instance.fetchComponentReadmeWithCache({
        readmeUrl: component.content.readmeUrl,
        componentId: component.id,
        libId,
        locale,
    });

    const [lib, i18nProps, readmeContent] = await Promise.all([
        libPromise,
        i18nPropsPromise,
        readmePromise,
    ]);

    // Generate dynamic meta description from component content
    const componentMeta = getComponentMeta(
        {id: lib.config.id, title: lib.config.title},
        component.title,
        readmeContent,
        // Fallback to component title if no description extracted
        `${component.title} component from ${lib.config.title}`,
    );

    return {
        props: {
            lib,
            componentId: ctx.params?.componentId,
            readmeContent,
            componentMeta,
            ...i18nProps,
        },
    };
};

export const ComponentPage = ({
    lib,
    componentId,
    readmeContent,
    componentMeta,
}: {
    lib: LibWithFullData;
    componentId: string;
    readmeContent: string;
    componentMeta: MetaProps;
}) => {
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
            meta={componentMeta}
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
