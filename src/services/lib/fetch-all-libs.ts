import {libs as libsConfigs} from '../../libs';

import {type Lib, fetchLibById} from './fetch-lib-by-id';

export const fetchAllLibs = async (): Promise<Lib[]> => {
    const libs = await Promise.all(libsConfigs.map(({id}) => fetchLibById(id)));

    return libs;
};
