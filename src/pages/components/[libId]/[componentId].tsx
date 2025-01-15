// Support for default locale without path prefix
import {GetStaticPaths} from 'next';

import {libs} from '../../../content/components';
import {ComponentPage, getStaticProps} from '../../[locale]/components/[libId]/[componentId]';

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
