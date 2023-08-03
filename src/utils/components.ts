import {Component, libs} from '../content/components';

export const getLibComponents = (libId?: string): Component[] => {
    const config = libs.find((lib) => lib.id === libId);

    if (!config) {
        throw new Error(`Can't find config for lib with id – ${libId}`);
    }

    const components = config.components;

    if (!components) {
        throw new Error(`Can't find components for lib with id – ${libId}`);
    }

    return components;
};
