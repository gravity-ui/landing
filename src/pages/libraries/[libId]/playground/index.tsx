import {GetStaticPaths} from 'next';
import {
    PlaygroundPage,
    availablePlaygrounds,
    getStaticProps,
} from 'src/[locale]/libraries/[libId]/playground';

import {getLibsList} from '../../../../utils';

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
