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
    wrapperClassName?: string;
};

const cache = new Map();

export const IntersectionLoadComponent = <Component extends React.ComponentType<any>>({
    cacheKey,
    getComponent,
    getComponentProps = () => Promise.resolve({} as React.ComponentProps<Component>),
    loader,
    intersectionOptions,
    onIntersect,
    onLoad,
    wrapperClassName,
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

        return (
            <div className={wrapperClassName} key={cacheKey}>
                <Component {...props} />
            </div>
        );
    }

    if (waitingLoad) {
        return (
            <div className={wrapperClassName} key={cacheKey}>
                <div ref={setIntersectionElementRef} />
                {loader}
            </div>
        );
    }

    return (
        <div className={wrapperClassName} key={cacheKey}>
            <React.Suspense key={cacheKey} fallback={loader}>
                <LazyComponent />
            </React.Suspense>
        </div>
    );
};

IntersectionLoadComponent.clearCache = (key?: string) => (key ? cache.delete(key) : cache.clear());
