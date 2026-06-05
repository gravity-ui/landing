import type {OverlayScrollbars, PartialOptions} from 'overlayscrollbars';
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';
import type {OverlayScrollbarsComponentProps} from 'overlayscrollbars-react';
import type {ElementType} from 'react';
import React from 'react';

const UPDATE_ON_TRANSITION_SELECTOR = '[data-custom-scrollbar-update-on-transition]';

const BASE_OPTIONS: PartialOptions = {
    update: {
        elementEvents: [[UPDATE_ON_TRANSITION_SELECTOR, 'transitionend']],
    },
    scrollbars: {
        theme: 'os-theme-landing',
        visibility: 'auto',
        autoHide: 'scroll',
        autoHideDelay: 700,
        dragScroll: true,
        clickScroll: false,
    },
};

type ScrollbarAxis = 'horizontal' | 'vertical';

const AXIS_OVERFLOW: Record<ScrollbarAxis, NonNullable<PartialOptions['overflow']>> = {
    horizontal: {x: 'scroll', y: 'hidden'},
    vertical: {x: 'hidden', y: 'scroll'},
};

export type CustomScrollbarProps<T extends ElementType = 'div'> =
    OverlayScrollbarsComponentProps<T> & {
        axis?: ScrollbarAxis;
        enabled?: boolean;
    };

export const CustomScrollbar = <T extends ElementType = 'div'>({
    axis,
    enabled = true,
    options,
    events,
    element,
    children,
    defer = true,
    ...props
}: CustomScrollbarProps<T>) => {
    const mergedOptions = React.useMemo<PartialOptions>(
        () => ({
            ...BASE_OPTIONS,
            ...(axis ? {overflow: AXIS_OVERFLOW[axis]} : null),
            ...options,
        }),
        [axis, options],
    );

    if (!enabled) {
        const Element = (element ?? 'div') as ElementType;

        return <Element {...props}>{children}</Element>;
    }

    const overlayProps = {
        element,
        defer,
        options: mergedOptions,
        events: {
            scroll: (instance: OverlayScrollbars) => {
                instance.elements().target.dispatchEvent(new Event('scroll'));
            },
            ...events,
        },
        children,
        ...props,
    } as unknown as OverlayScrollbarsComponentProps<T>;

    return <OverlayScrollbarsComponent {...overlayProps} />;
};
