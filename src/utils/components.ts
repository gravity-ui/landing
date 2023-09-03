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

const README_REGEX =
    /^https:\/\/raw\.githubusercontent\.com\/gravity-ui\/(?<repoName>[^/]+)\/(?<repoBranch>[^/]+)\/src\/components\/(?<componentName>[^/]+)(\/README\.md)?(?<hash>#.+)?$/;

export function getRouteFromReadmeUrl(readmeUrl: string) {
    const match = readmeUrl.match(README_REGEX);

    if (!match) {
        return;
    }

    return `/components/${match.groups?.repoName}/${match.groups?.componentName.toLowerCase()}${
        match.groups?.hash ?? ''
    }`;
}
