// Support for default locale without path prefix
import {GetStaticPaths} from 'next';

import {LibraryPage, getStaticProps} from '../../../[locale]/libraries/[libId]';
import {getLibsList} from '../../../utils';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = libs.map((libItem) => ({
        params: {libId: libItem.config.id},
    }));

    return {
        paths,
        fallback: false,
    };
};

export {LibraryPage, getStaticProps};

export default LibraryPage;
