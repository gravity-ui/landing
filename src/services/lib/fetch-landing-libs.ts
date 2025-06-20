import {libs as libsConfigs} from '../../libs';

import {type Lib, fetchLibById} from './fetch-lib-by-id';

export const fetchLandingLibs = async (): Promise<Lib[]> => {
    const libs = await Promise.all(
        libsConfigs.filter(({landing}) => landing).map(({id}) => fetchLibById(id)),
    );

    return libs.sort((lib1, lib2) => {
        const order = [
            'uikit',
            'navigation',
            'date-components',
            'markdown-editor',
            'page-constructor',
            'chartkit',
            'dashkit',
        ];

        return order.indexOf(lib1.config.id) - order.indexOf(lib2.config.id);
    });
};
