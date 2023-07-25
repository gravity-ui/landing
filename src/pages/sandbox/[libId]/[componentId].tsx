import {GetStaticPaths, GetStaticProps} from 'next';
import {FC} from 'react';

import {SandboxComponent} from '../../../components/SandboxComponent';
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

export const SandboxPage = ({
    libId,
    componentId,
}: {
    libId: string;
    componentId: string;
    component: FC;
}) => {
    return <SandboxComponent libId={libId} componentId={componentId} />;
};

export default SandboxPage;
