import type {PartialOptions} from 'overlayscrollbars';
import {useOverlayScrollbars} from 'overlayscrollbars-react';
import React from 'react';

const CUSTOM_SCROLLBAR_ATTRIBUTE = 'data-custom-scrollbar';
const SCROLLBAR_AXIS_ATTRIBUTE = 'data-scrollbar-axis';
const CUSTOM_SCROLLBAR_SELECTOR = `[${CUSTOM_SCROLLBAR_ATTRIBUTE}]`;
const INITIALIZE_ATTRIBUTE = 'data-overlayscrollbars-initialize';
const UPDATE_ON_TRANSITION_SELECTOR = '[data-custom-scrollbar-update-on-transition]';

const DEFAULT_SCROLLBAR_OPTIONS: PartialOptions = {
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

const HORIZONTAL_SCROLLBAR_OPTIONS: PartialOptions = {
    ...DEFAULT_SCROLLBAR_OPTIONS,
    overflow: {
        x: 'scroll',
        y: 'hidden',
    },
};

const VERTICAL_SCROLLBAR_OPTIONS: PartialOptions = {
    ...DEFAULT_SCROLLBAR_OPTIONS,
    overflow: {
        x: 'hidden',
        y: 'scroll',
    },
};

const elementKeys = new WeakMap<HTMLElement, number>();
let nextElementKey = 0;

type ScrollbarAxis = 'horizontal' | 'vertical' | null;

type ScrollbarTargetItem = {
    axis: ScrollbarAxis;
    element: HTMLElement;
    key: number;
};

const getElementKey = (element: HTMLElement) => {
    const existingKey = elementKeys.get(element);

    if (existingKey !== undefined) {
        return existingKey;
    }

    const key = nextElementKey;

    nextElementKey += 1;
    elementKeys.set(element, key);

    return key;
};

const getScrollbarAxis = (element: HTMLElement): ScrollbarAxis => {
    const axis = element.getAttribute(SCROLLBAR_AXIS_ATTRIBUTE);

    if (axis === 'horizontal') {
        return 'horizontal';
    }

    if (axis === 'vertical') {
        return 'vertical';
    }

    return null;
};

const getScrollbarOptions = (axis: ScrollbarAxis) => {
    if (axis === 'horizontal') {
        return HORIZONTAL_SCROLLBAR_OPTIONS;
    }

    if (axis === 'vertical') {
        return VERTICAL_SCROLLBAR_OPTIONS;
    }

    return DEFAULT_SCROLLBAR_OPTIONS;
};

const getCustomScrollbarTargets = (): ScrollbarTargetItem[] => {
    const root = document.querySelector<HTMLElement>('.g-root') || document.body;

    return Array.from(root.querySelectorAll<HTMLElement>(CUSTOM_SCROLLBAR_SELECTOR)).map(
        (element) => ({
            axis: getScrollbarAxis(element),
            element,
            key: getElementKey(element),
        }),
    );
};

const areTargetsEqual = (left: ScrollbarTargetItem[], right: ScrollbarTargetItem[]) => {
    if (left.length !== right.length) {
        return false;
    }

    return left.every((target, index) => {
        const nextTarget = right[index];

        return target.element === nextTarget.element && target.axis === nextTarget.axis;
    });
};

const useScrollbarTargets = () => {
    const [targets, setTargets] = React.useState<ScrollbarTargetItem[]>([]);

    React.useEffect(() => {
        let scanAnimationFrame: number | undefined;

        const scanScrollbarTargets = () => {
            scanAnimationFrame = undefined;
            setTargets((currentTargets) => {
                const nextTargets = getCustomScrollbarTargets();

                return areTargetsEqual(currentTargets, nextTargets) ? currentTargets : nextTargets;
            });
        };

        const scheduleScan = () => {
            if (scanAnimationFrame) {
                window.cancelAnimationFrame(scanAnimationFrame);
            }

            scanAnimationFrame = window.requestAnimationFrame(scanScrollbarTargets);
        };

        const mutationObserver = new MutationObserver(scheduleScan);

        mutationObserver.observe(document.body, {
            attributes: true,
            attributeFilter: [CUSTOM_SCROLLBAR_ATTRIBUTE, SCROLLBAR_AXIS_ATTRIBUTE],
            childList: true,
            subtree: true,
        });

        scanScrollbarTargets();

        return () => {
            mutationObserver.disconnect();

            if (scanAnimationFrame) {
                window.cancelAnimationFrame(scanAnimationFrame);
            }
        };
    }, []);

    return targets;
};

const ScrollbarTarget = ({axis, element}: ScrollbarTargetItem) => {
    const [initialize] = useOverlayScrollbars({
        defer: true,
        events: {
            scroll: () => {
                element.dispatchEvent(new Event('scroll'));
            },
        },
        options: getScrollbarOptions(axis),
    });

    React.useEffect(() => {
        element.setAttribute(INITIALIZE_ATTRIBUTE, '');
        initialize(element);

        return () => {
            element.removeAttribute(INITIALIZE_ATTRIBUTE);
        };
    }, [element, initialize]);

    return null;
};

export const ScrollbarInitializer = () => {
    const targets = useScrollbarTargets();

    return React.createElement(
        React.Fragment,
        null,
        targets.map((target) =>
            React.createElement(ScrollbarTarget, {
                ...target,
                key: target.key,
            }),
        ),
    );
};
