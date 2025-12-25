import type {LibConfig} from '../libs';

export type Contributor = {
    login: string;
    url: string;
    avatarUrl: string;
    contributions: number;
};

export type CodeOwners = {
    pattern: string;
    owners: string[];
};

export type LibMetadata = {
    stars: number;
    version: string;
    lastUpdate: string;
    license: string;
    issues: number;
};

export type LibData = {
    readme: {
        en: string;
        ru: string;
        es: string;
        zh: string;
        fr: string;
        de: string;
        ko: string;
    };
    changelog: string;
    contributors: Contributor[];
    codeOwners: CodeOwners[];
};

export type LibBase = {
    config: LibConfig;
};

export type LibWithMetadata = LibBase & {
    metadata: LibMetadata;
};

export type LibWithFullData = LibBase & LibWithMetadata & {data: LibData};

export type NpmInfo = {
    'dist-tags'?: {
        latest?: string;
    };
    time?: {
        [version: string]: string;
    };
};

export type GithubInfo = {
    stargazers_count?: number;
    license?: {
        name?: string;
    } | null;
    open_issues_count?: number;
    contributors: Contributor[];
    codeOwners: CodeOwners[];
};
