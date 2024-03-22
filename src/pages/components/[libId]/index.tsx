// Support for default locale without path prefix
import {GetStaticPaths} from 'next';

import {LibraryComponentsPage, getStaticProps} from '../../../[locale]/components/[libId]';
import {libs} from '../../../content/components';

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
