import {GetStaticPaths, GetStaticProps} from 'next';

import {Component} from '../../../components/Component/Component';
import {ComponentsLayout} from '../../../components/ComponentsLayout/ComponentsLayout';
import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';

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
    return {
        props: {
            libId: context.params?.libId,
            componentId: context.params?.componentId,
        },
    };
};

export const ComponentPage = ({libId, componentId}: {libId: string; componentId: string}) => {
    const lib = libs.find((item) => item.id === libId);
    const component = lib?.components.find((item) => item.id === componentId);

    if (!lib || !component) {
        return null;
    }

    return (
        <Layout title={`${lib.title} – ${component.title}`}>
            <ComponentsLayout libId={libId} componentId={componentId}>
                <Component component={component} />
            </ComponentsLayout>
        </Layout>
    );
};

export default ComponentPage;
