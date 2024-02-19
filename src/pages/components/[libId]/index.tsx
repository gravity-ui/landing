import {GetStaticPaths} from 'next';

import {libs} from '../../../content/components';
import {LibraryComponentsPage, getStaticProps} from '../../[locale]/components/[libId]';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = libs.map((libItem) => ({
        params: {libId: libItem.id},
    }));

    return {
        paths,
        fallback: false,
    };
};

export {LibraryComponentsPage, getStaticProps};

export default LibraryComponentsPage;
