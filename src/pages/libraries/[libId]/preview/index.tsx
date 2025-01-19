import {GetStaticPaths} from 'next';

import {getLibsList} from '../../../../utils';
import {LibraryPreviewPage, getStaticProps} from '../../../[locale]/libraries/[libId]/preview';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.map((item) => ({params: {libId: item.config.id}})),
        fallback: false,
    };
};

export {LibraryPreviewPage, getStaticProps};

export default LibraryPreviewPage;
