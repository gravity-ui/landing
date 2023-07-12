import {GetStaticPaths} from 'next';

import {getLibsList} from '../../utils';
import {LibraryPage, getStaticProps} from '../[locale]/libraries/[id]';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = libs.map((libItem) => ({
        params: {id: libItem.config.id},
    }));

    return {
        paths,
        fallback: false,
    };
};

export {LibraryPage, getStaticProps};

export default LibraryPage;
