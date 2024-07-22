import {GetStaticPaths} from 'next';
import {LibraryPreviewPage, getStaticProps} from 'src/[locale]/libraries/[libId]/preview';

import {getLibsList} from '../../../../utils';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.map((item) => ({params: {libId: item.config.id}})),
        fallback: false,
    };
};

export {LibraryPreviewPage, getStaticProps};

export default LibraryPreviewPage;
