import {GetStaticPaths, GetStaticProps} from 'next';
import {useMemo} from 'react';
import {Section} from 'src/components/NavigationLayout/types';

import {Component} from '../../../components/Component/Component';
import {ComponentsLayout} from '../../../components/ComponentsLayout/ComponentsLayout';
import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';
import {getLibComponents} from '../../../utils';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.reduce<{params: {libId: string; componentId: string}}[]>((acc, lib) => {
            lib.components
                .filter((component) => component.isComingSoon !== true)
                .forEach((component) => {
                    acc.push({params: {libId: lib.id, componentId: component.id}});
                });
            return acc;
        }, []),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const components = getLibComponents(context.params?.libId as string);
    const component = components.find((item) => item.id === context.params?.componentId);

    if (!component?.content?.readmeUrl) {
        throw new Error(
            `Component "${context.params?.componentId}" in library "${context.params?.libId}" doesn't have url for readme file`,
        );
    }

    let readmeContent = '';

    try {
        const res = await fetch(component.content.readmeUrl);
        readmeContent = await res.text();
    } catch {}

    return {
        props: {
            libId: context.params?.libId,
            componentId: context.params?.componentId,
            readmeContent,
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
    const lib = libs.find((item) => item.id === libId);
    const component = lib?.components.find((item) => item.id === componentId);

    if (!lib || !component) {
        return null;
    }

    const sections = useMemo<Section[]>(() => {
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
        <Layout title={`${lib.title} – ${component.title}`}>
            <ComponentsLayout libId={libId} componentId={componentId} sections={sections}>
                <Component
                    libId={libId}
                    component={component}
                    readmeContent={readmeContent}
                    sections={sections}
                />
            </ComponentsLayout>
        </Layout>
    );
};

export default ComponentPage;
