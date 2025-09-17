'use client';

import {useIntersection} from '@gravity-ui/uikit';
import React from 'react';

type Props<Component extends React.ComponentType> = {
    cacheKey: string;
    getComponent: () => Promise<Component>;
    getComponentProps?: NoInfer<() => Promise<React.ComponentProps<Component>>>;
    loader: React.ReactNode;
    intersectionOptions?: IntersectionObserverInit;
    onIntersect?: () => void;
    onLoad?: NoInfer<(component: Component, props: React.ComponentProps<Component>) => void>;
};

const cache = new Map();

/**
 * HOC for lazy loading component when it reaches viewport
 * @param {string} cacheKey
 * @param {function(): Promise<Component>} getComponent component import function
 * @param {function(): Promise<React.ComponentProps<Component>>} getComponentProps async function for component props; async for loading data from server by demand
 * @param {IntersectionObserverInit} intersectionOptions IntersectionObserver options
 * @param {JSX.Element} loader displaying while component is being loaded
 * @param {function(): void} onIntersect callback, fires when component reaches viewport
 * @param {function(Component, React.ComponentProps<Component>): void} onLoad callback, fires when component is loaded
 * @returns {JSX.Element} loaded component or loader
 */
// unknown/{}/object doesn't work
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IntersectionLoadComponent = <Component extends React.ComponentType<any>>({
    cacheKey,
    getComponent,
    getComponentProps = () => Promise.resolve({} as React.ComponentProps<Component>),
    loader,
    intersectionOptions,
    onIntersect,
    onLoad,
}: Props<Component>) => {
    const [waitingLoad, setWaitingLoad] = React.useState(!cache.has(cacheKey));
    const [intersectionElementRef, setIntersectionElementRef] =
        React.useState<HTMLDivElement | null>(null);

    const getComponentWithPropsCached = React.useCallback(async () => {
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        }

        const [Component, props] = await Promise.all([getComponent(), getComponentProps()]);

        cache.set(cacheKey, {Component, props});

        return {Component, props};
    }, [getComponent]);

    const LazyComponent = React.lazy(async () => {
        const {Component, props} = await getComponentWithPropsCached();

        onLoad?.(Component, props);

        return {default: () => <Component key={cacheKey} {...props} />};
    });

    useIntersection({
        element: intersectionElementRef,
        onIntersect: () => {
            setWaitingLoad(false);
            onIntersect?.();
        },
        options: intersectionOptions,
    });

    if (cache.has(cacheKey)) {
        const {Component, props} = cache.get(cacheKey);

        return <Component key={cacheKey} {...props} />;
    }

    if (waitingLoad) {
        return (
            <div key={cacheKey}>
                <div ref={setIntersectionElementRef} />
                {loader}
            </div>
        );
    }

    return (
        <div key={cacheKey}>
            <React.Suspense fallback={loader}>
                <LazyComponent />
            </React.Suspense>
        </div>
    );
};

IntersectionLoadComponent.clearCache = (key?: string) => (key ? cache.delete(key) : cache.clear());
