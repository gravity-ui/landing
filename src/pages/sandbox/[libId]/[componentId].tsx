import {GetStaticPaths, GetStaticProps} from 'next';

import {SandboxComponent} from '../../../components/SandboxComponent';
import {libs} from '../../../content/components';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.reduce<{params: {libId: string; componentId: string}}[]>((acc, lib) => {
            lib.components
                .filter((component) => component.isComingSoon !== true)
                .forEach((component) => {
                    acc.push({
                        params: {
                            libId: lib.id,
                            componentId: component.id,
                        },
                    });
                });
            return acc;
        }, []),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const componentId = context.params?.componentId;
    const libId = context.params?.libId;

    return {
        props: {
            componentId,
            libId,
        },
    };
};

export const SandboxPage = ({componentId, libId}: {componentId: string; libId: string}) => {
    return <SandboxComponent libId={libId} componentId={componentId} />;
};

export default SandboxPage;
