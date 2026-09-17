import componentCatalog from '../../data/component-catalog.json';
import {Repos} from '../../types/common';

import {Component} from './types';

const COMPONENT_CATALOG_SCHEMA_VERSION = 2;

type PublishedComponent = {
    id: string;
    name: string;
    title: string;
    githubUrl: string;
    readmeUrl: {
        en: string;
        ru: string;
    };
};

type PublishedLibrary = {
    packageName: string;
    version: string;
    components: PublishedComponent[];
};

type ComponentCatalog = {
    schemaVersion: number;
    libraries: Record<string, PublishedLibrary>;
};

const catalog = componentCatalog as ComponentCatalog;

if (catalog.schemaVersion !== COMPONENT_CATALOG_SCHEMA_VERSION) {
    throw new Error(
        `Unsupported component catalog schema ${catalog.schemaVersion}; expected ${COMPONENT_CATALOG_SCHEMA_VERSION}`,
    );
}

export const getPublishedComponentConfigs = (repoName: Repos): Component[] => {
    const library = catalog.libraries[repoName];

    if (!library) {
        throw new Error(`Published component catalog does not contain library "${repoName}"`);
    }

    return library.components.map(({id, title, githubUrl, readmeUrl}) => ({
        id,
        title,
        githubUrl,
        content: {
            readmeUrl,
        },
    }));
};

export const mergeComponentConfigs = (
    publishedComponents: Component[],
    manualOverrides: Component[],
): Component[] => {
    const componentsById = new Map(
        publishedComponents.map((component) => [component.id, component] as const),
    );

    for (const component of manualOverrides) {
        componentsById.set(component.id, component);
    }

    return Array.from(componentsById.values());
};
