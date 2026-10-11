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
        return undefined;
    }

    return `/components/${match.groups?.repoName}/${toKebabCase(match.groups?.componentName)}${
        match.groups?.hash ?? ''
    }`;
}

export function resolveReadmeLink(link: string, contentReadmeUrl: string): string {
    if (link.startsWith('#')) {
        return link;
    }

    const readmeUrl = new URL(contentReadmeUrl, 'https://gravity-ui.com');
    const url = new URL(link, readmeUrl);

    if (url.origin !== readmeUrl.origin) {
        return link;
    }

    if (link.startsWith('/src/')) {
        const resolved = resolveRepoAbsoluteLink(link, contentReadmeUrl);
        if (resolved) {
            return resolved;
        }
    }

    const componentRoute = getRouteFromReadmeUrl(url.toString());
    if (componentRoute) {
        return componentRoute;
    }

    return link;
}

export function getReadmeAssetsBasePath(contentReadmeUrl: string): string | undefined {
    const url = new URL(contentReadmeUrl);

    if (url.hostname !== 'raw.githubusercontent.com') {
        return undefined;
    }

    return `${url.origin}${url.pathname.slice(0, url.pathname.lastIndexOf('/') + 1)}`;
}

const REPO_BASE_REGEX = /^(https:\/\/raw\.githubusercontent\.com\/([^/]+\/[^/]+)\/([^/]+))/;

export function resolveRepoAbsoluteLink(
    link: string,
    contentReadmeUrl: string,
): string | undefined {
    const repoBaseMatch = contentReadmeUrl.match(REPO_BASE_REGEX);
    if (!repoBaseMatch) {
        return undefined;
    }

    const [, repoBaseUrl, githubId, branch] = repoBaseMatch;
    const fullUrl = repoBaseUrl + link;

    return getRouteFromReadmeUrl(fullUrl) ?? `https://github.com/${githubId}/tree/${branch}${link}`;
}

function toKebabCase(input?: string) {
    if (!input) {
        return input;
    }

    return Array.from(input)
        .map((char, i) => {
            if (char === char.toUpperCase()) {
                return (i === 0 ? '' : '-') + char.toLowerCase();
            } else {
                return char;
            }
        })
        .join('');
}
