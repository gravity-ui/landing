import {Component, libs} from '../content/components';

export const getLibComponents = (id: string): Component[] | undefined => {
    const config = libs.find((lib) => lib.id === id);

    if (!config) {
        throw new Error(`Can't find config for lib with id – ${id}`);
    }

    const components = config.components;

    if (!components) {
        throw new Error(`Can't find components for lib with id – ${id}`);
    }

    return components;
};
