import {CacheTTL} from './types';

type Params<Data> = {
    ttl: CacheTTL;
    queryFn: () => Promise<Data>;
    autoRevalidate?: boolean;
    onError?: (error: Error) => void;
};

export class CacheQuery<Data> {
    private static calculateTTLms(ttl: CacheTTL) {
        return (
            (ttl?.milliseconds ?? 0) +
                (ttl?.seconds ?? 0) * 1000 +
                (ttl?.minutes ?? 0) * 60_000 +
                (ttl?.hours ?? 0) * 3_600_000 +
                (ttl?.days ?? 0) * 86_400_000 || 0
        );
    }

    private _data: Data | null;
    private _queryFn: () => Promise<Data>;
    private _ttl: number;
    private _cacheTimestamp: number | null;
    private _autoRevalidate: boolean;
    private _autoRevalidateInterval: ReturnType<typeof setInterval> | null;
    private _onError: ((error: Error) => void) | null;
    private _state: 'initial' | 'fresh' | 'stale' | 'fetching' | 'error';
    private _currentQueryPromise: Promise<Data> | null;

    constructor(params: Params<Data>) {
        const {ttl: cacheTTL, queryFn, autoRevalidate = false, onError = null} = params;

        this._state = 'initial';
        this._queryFn = queryFn;
        this._autoRevalidate = autoRevalidate;

        this._ttl = CacheQuery.calculateTTLms(cacheTTL);

        this._data = null;
        this._cacheTimestamp = null;
        this._autoRevalidateInterval = null;
        this._currentQueryPromise = null;

        this.changeAutoRevalidate(autoRevalidate);
        this._onError = onError;
    }

    changeAutoRevalidate(newAutoRevalidate: boolean) {
        if (this._autoRevalidateInterval) {
            clearInterval(this._autoRevalidateInterval);
        }

        this._autoRevalidate = newAutoRevalidate;

        if (newAutoRevalidate) {
            this._autoRevalidateInterval = setInterval(() => {
                this.revalidate();
            }, this._ttl);
        } else {
            this._autoRevalidateInterval = null;
        }
    }

    clear() {
        this._data = null;
        this._cacheTimestamp = null;
        this._state = 'stale';
    }

    reset() {
        this._data = null;
        this._cacheTimestamp = null;
        this._state = 'initial';

        this.changeAutoRevalidate(false);
    }

    changeTTL(newTTL: CacheTTL) {
        this._ttl = CacheQuery.calculateTTLms(newTTL) || 0;

        this.changeAutoRevalidate(this._autoRevalidate);
    }

    async revalidate() {
        try {
            this._state = 'fetching';
            this._cacheTimestamp = Date.now();
            this._currentQueryPromise = this._queryFn();

            const res = await this._currentQueryPromise;
            this._data = res;

            this._state = 'fresh';
        } catch (error) {
            this._state = 'error';
            this._onError?.(error as Error);
        } finally {
            this._currentQueryPromise = null;
        }
    }

    getState() {
        if (this._state === 'fresh') {
            if (this._cacheTimestamp === null || this._data === null) {
                this._state = 'stale';

                return this._state;
            }

            if (Date.now() - this._cacheTimestamp >= this._ttl) {
                this._state = 'stale';

                return this._state;
            }
        }

        if (this._state === 'fetching' && !this._currentQueryPromise) {
            this._state = 'stale';

            return this._state;
        }

        return this._state;
    }

    async getData(withoutRevalidate = false) {
        if (withoutRevalidate) {
            return this._data;
        }

        const state = this.getState();

        if (state === 'fetching') {
            return this._currentQueryPromise;
        }

        if (state === 'fresh') {
            return this._data as Data;
        }

        await this.revalidate();

        return this._data;
    }
}
