import {type LibConfig, libs} from '../../libs';

import {type LibData, fetchLibData} from './fetch-lib-data';

export type Lib = {
    config: LibConfig;
    data: LibData;
};

export const fetchLibById = async (id: string): Promise<Lib> => {
    const config = libs.find((lib) => lib.id === id);

    if (!config) {
        throw new Error(`Can't find config for lib with id – ${id}`);
    }

    const data = await fetchLibData(config);

    return {
        config,
        data,
    };
};
