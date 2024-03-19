// Support for default locale without path prefix
import {GetStaticPaths} from 'next';

import {getLibsList} from '../../utils';
import {LibraryPage, getStaticProps} from '../[locale]/libraries/[libId]';

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
