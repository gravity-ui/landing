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
        pt: string;
        ja: string;
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

<<<<<<< HEAD
export type CacheTTL = {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
};

export type CacheQueryState = 'initial' | 'fresh' | 'stale' | 'fetching' | 'error';
=======
// Blog types
export type BlogTag = {
    id: number;
    slug: string;
    createdAt: string;
    updatedAt: string;
    icon: string | null;
    isDeleted: boolean;
    name: string;
    locale: string;
    blogTagId: number;
    count: number;
};

export type BlogService = {
    id: number;
    name: string;
    slug: string;
};

export type BlogAuthor = {
    id: number;
    firstName: string;
    secondName: string;
    description: string;
    fullDescription?: string;
    shortDescription: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
};

export type BlogPostListItem = {
    id: number;
    slug: string;
    date: string;
    postDate: string;
    blogPostId: number;
    image: string;
    readingTime: number;
    keywords: string[];
    shareTitle: string | null;
    likes: number;
    hasUserLike: boolean;
    services: BlogService[];
    url: string;
    tags: BlogTag[];
    textTitle: string;
    htmlTitle: string;
    metaTitle: string;
    description: string;
    content: string;
};

export type BlogPost = {
    id: number;
    slug: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    pageId: number;
    postDate: string;
    isPinned: boolean;
    migrated: boolean;
    date: string;
    title: string;
    shareTitle: string | null;
    description: string;
    author: string | null;
    sharedImage: string;
    content: string;
    locale: string;
    isPublished: boolean;
    blogPostId: number;
    image: string;
    metaDescription: string | null;
    keywords: string[] | null;
    metaTitle: string | null;
    readingTime: number;
    likes: number;
    hasUserLike: boolean;
    tags: BlogTag[];
    authors: BlogAuthor[];
    shareOptions?: string[];
    textTitle?: string;
    htmlTitle?: string;
};

export type BlogPostsResponse = {
    posts: BlogPostListItem[];
    totalCount: number;
    count: number;
    pinnedPost: BlogPostListItem | null;
};

export type BlogPageContent = {
    blocks: Array<Record<string, any>>;
};

export type BlogPage = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    type: string;
    isDeleted: boolean;
    pageId: number;
    locale: string;
    publishedVersionId: number;
    lastVersionId: number;
    content: BlogPageContent;
    title: string;
    noIndex: boolean;
    shareTitle: string | null;
    shareDescription: string | null;
    shareImage: string | null;
    pageLocaleId: number;
    author: string;
    metaDescription: string | null;
    keywords: string[];
    shareGenImage: string | null;
    shareGenTitle: string | null;
    solution: string | null;
    service: string | null;
    regions?: string[];
    locales?: Array<{locale: string; publishedVersionId: number | null}>;
};

export type BlogPostsQuery = {
    page?: number;
    pageSize?: number;
    search?: string;
    tags?: string[];
    services?: string[];
};
>>>>>>> f9633a5d6f (feat: install next alpha PC and refactor code structure after rebase)
