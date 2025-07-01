import {type LibConfig, libs} from '../../libs';

import {type LibData, fetchLibData} from './fetch-lib-data';

export type Lib = {
    config: LibConfig;
    data: LibData;
};

type Cache = {
    timestamp: number;
    libs: Record<string, Lib>;
};

let libsCache: Cache | null = null;
const CACHE_TTL = 60 * 60 * 1000;

export const fetchLibById = async (id: string): Promise<Lib> => {
    const now = Date.now();

    if (!libsCache || now - libsCache.timestamp > CACHE_TTL) {
        libsCache = {
            timestamp: now,
            libs: {},
        };

        Promise.all(libs.map((lib) => fetchLibById(lib.id))).catch();
    }

    if (libsCache.libs[id]) {
        return libsCache.libs[id];
    }

    const config = libs.find((lib) => lib.id === id);

    if (!config) {
        throw new Error(`Can't find config for lib with id – ${id}`);
    }

    const data = await fetchLibData(config);

    const lib = {
        config,
        data,
    };

    libsCache.libs[id] = lib;

    return lib;
};
