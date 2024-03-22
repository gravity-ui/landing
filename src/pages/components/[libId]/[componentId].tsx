// Support for default locale without path prefix
import {GetStaticPaths} from 'next';

import {ComponentPage, getStaticProps} from '../../../[locale]/components/[libId]/[componentId]';
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

export {ComponentPage, getStaticProps};

export default ComponentPage;
