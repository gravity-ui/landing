import {GetStaticPaths} from 'next';
import {
    PlaygroundPage,
    availablePlaygrounds,
    getStaticProps,
} from 'src/[locale]/libraries/[libId]/playground';

import {getLibsList} from '../../../../utils';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = libs
        .filter((libItem) => availablePlaygrounds.includes(libItem.config.id))
        .map((libItem) => ({
            params: {libId: libItem.config.id},
        }));

    return {
        paths: paths.length
            ? paths
            : [
                  {
                      params: {libId: ''},
                  },
              ],
        fallback: false,
    };
};

export {PlaygroundPage, getStaticProps};

export default PlaygroundPage;
