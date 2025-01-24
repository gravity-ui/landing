import {GetStaticPaths} from 'next';

import {getLibsList} from '../../../../utils';
import {
    PlaygroundPage,
    availablePlaygrounds,
    getStaticProps,
} from '../../../[locale]/libraries/[libId]/playground';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs
            .filter((lib) => availablePlaygrounds.includes(lib.config.id))
            .map((item) => ({params: {libId: item.config.id}})),
        fallback: false,
    };
};

export {PlaygroundPage, getStaticProps};

export default PlaygroundPage;
