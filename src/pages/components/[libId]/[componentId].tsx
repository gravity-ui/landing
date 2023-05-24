import {GetStaticPaths, GetStaticProps} from 'next';

import {Component} from '../../../components/Component/Component';
import {ComponentsLayout} from '../../../components/ComponentsLayout/ComponentsLayout';
import {Layout} from '../../../components/Layout/Layout';
import {libComponents} from '../../../content/components';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libComponents.reduce<{params: {libId: string; componentId: string}}[]>(
            (acc, lib) => {
                lib.components.forEach((component) => {
                    acc.push({params: {libId: lib.id, componentId: component.id}});
                });
                return acc;
            },
            [],
        ),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {libId: context.params?.libId, componentId: context.params?.componentId},
    };
};

export const ComponentPage = ({libId, componentId}: {libId: string; componentId: string}) => {
    const lib = libComponents.find((item) => item.id === componentId);

    return (
        <Layout title={lib?.title}>
            <ComponentsLayout libId={libId} componentId={componentId}>
                <Component libId={libId} componentId={componentId} />
            </ComponentsLayout>
        </Layout>
    );
};

export default ComponentPage;
