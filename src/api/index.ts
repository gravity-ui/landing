import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

import type {MarkdownItPluginCb} from '@diplodoc/transform/lib/plugins/typings';
import {
    createReadableContent,
    transformPageContent,
    transformPost,
} from '@gravity-ui/blog-constructor/server';
import {createAppAuth} from '@octokit/auth-app';
import {Octokit} from '@octokit/rest';
import {i18n} from 'next-i18next.config';

import {type LibConfig, libs as libsConfigs} from '../libs';

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

export class Api {
    private static _instance: Api;

    private octokit: Octokit;

    private readonly CONTRIBUTORS_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours
    private contributorsCache: {data: Contributor[]; timestamp: number} | null = null;

    private readonly LIBS_CACHE_TTL = 60 * 60 * 1000; // 1 hour
    private libsByIdCache: Record<string, {timestamp: number; lib: LibWithFullData}> = {};

    private readonly COMPONENT_README_CACHE_TTL = 60 * 60 * 1000; // 1 hour
    private componentReadmeCache: Record<string, {content: string; timestamp: number}> = {};

    private readonly CONTRIBUTOR_IGNORE_LIST = [
        'dependabot',
        'dependabot[bot]',
        'gravity-ui-bot',
        'yc-ui-bot',
    ];

    static get instance(): Api {
        if (!Api._instance) {
            Api._instance = new Api();
        }

        return Api._instance;
    }

    constructor() {
        const octokitParams = process.env.GITHUB_APP_ID
            ? {
                  authStrategy: createAppAuth,
                  auth: {
                      appId: process.env.GITHUB_APP_ID,
                      installationId: process.env.GITHUB_APP_INSTALLATION_ID,
                      privateKey: process.env.GITHUB_APP_PRIVATE_KEY,
                  },
              }
            : {auth: process.env.GITHUB_TOKEN};

        this.octokit = new Octokit(octokitParams);
    }

    async getRepositoryContributors(repoOwner: string, repo: string): Promise<Contributor[]> {
        const items = await this.octokit.paginate(this.octokit.rest.repos.listContributors, {
            owner: repoOwner,
            repo,
        });

        const contributors = items
            .filter(({login}) => login && !this.CONTRIBUTOR_IGNORE_LIST.includes(login))
            .map(({login, avatar_url: avatarUrl, html_url: url, contributions}) => ({
                login: login!,
                avatarUrl: avatarUrl!,
                url: url!,
                contributions,
            }));

        return contributors;
    }

    async fetchRepositoryCodeOwners(repoOwner: string, repo: string): Promise<CodeOwners[]> {
        const url = `https://raw.githubusercontent.com/${repoOwner}/${repo}/main/CODEOWNERS`;
        const res = await fetch(url);

        if (!res.ok) {
            return [];
        }

        const codeOwnersText = await res.text();
        const lines = codeOwnersText.split('\n');
        const codeOwners: CodeOwners[] = [];

        for (const line of lines) {
            const trimmed = line.trim();

            if (!trimmed) {
                continue;
            }

            if (trimmed[0] === '#') {
                continue;
            }

            const [pattern, ...owners] = trimmed.split(' ').filter(Boolean);
            const normalizedOwners = owners
                .filter((owner) => owner.length > 1 && owner[0] === '@')
                .map((owner) => owner.slice(1));

            if (normalizedOwners.length) {
                codeOwners.push({
                    pattern,
                    owners: normalizedOwners,
                });
            }
        }

        return codeOwners;
    }

    async getOrganizationRepositories(org: string) {
        return await this.octokit.paginate(this.octokit.rest.repos.listForOrg, {
            org,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });
    }

    async fetchAllContributors(): Promise<Contributor[]> {
        try {
            const repos = await this.getOrganizationRepositories('gravity-ui');

            const rawContributors = await Promise.all(
                repos.map(async (repo) =>
                    this.getRepositoryContributors(repo.owner.login, repo.name),
                ),
            );

            const contributors: Record<string, Contributor> = {};

            for (const list of rawContributors) {
                for (const contributor of list) {
                    const {login, contributions} = contributor;

                    if (contributors[login]) {
                        contributors[login].contributions += contributions;
                    } else {
                        contributors[login] = contributor;
                    }
                }
            }

            const sortedContributors = Object.values(contributors).sort(
                (a, b) => b.contributions - a.contributions,
            );

            return sortedContributors;
        } catch (error) {
            console.error('Error fetching contributors:', error);
            return [];
        }
    }

    async fetchAllContributorsWithCache(): Promise<Contributor[]> {
        const now = Date.now();

        if (this.contributorsCache) {
            const isCacheOutdated =
                now - this.contributorsCache.timestamp > this.CONTRIBUTORS_CACHE_TTL;

            if (isCacheOutdated) {
                this.fetchAllContributors()
                    .then((contributors) => {
                        this.contributorsCache = {
                            data: contributors,
                            timestamp: Date.now(),
                        };
                    })
                    .catch((error) => {
                        console.error('Error updating contributors cache:', error);
                    });
            }

            return this.contributorsCache.data;
        }

        const contributors = await this.fetchAllContributors();

        this.contributorsCache = {
            data: contributors,
            timestamp: now,
        };

        return contributors;
    }

    async fetchNpmInfo(npmId: string): Promise<NpmInfo | null> {
        try {
            const npmApiUrl = 'https://registry.npmjs.org/';
            const response = await fetch(`${npmApiUrl}${npmId}`);

            if (response.ok) {
                return (await response.json()) as NpmInfo;
            }
        } catch (err) {
            console.error(err);
        }

        return null;
    }

    async fetchLibGithubInfo(githubId: string): Promise<GithubInfo | null> {
        try {
            const [repoOwner, repo] = githubId.split('/');

            const [repoData, contributors, codeOwners] = await Promise.all([
                this.octokit.rest.repos
                    .get({
                        owner: repoOwner,
                        repo,
                    })
                    .then((response) => response.data),
                this.getRepositoryContributors(repoOwner, repo),
                this.fetchRepositoryCodeOwners(repoOwner, repo),
            ]);

            const result: GithubInfo = {
                ...repoData,
                contributors,
                codeOwners,
            };

            return result;
        } catch (err) {
            console.error(err);
        }

        return null;
    }

    async fetchChangelogInfo(changelogUrl: string): Promise<string> {
        if (!changelogUrl) return '';

        const headers: Record<string, string> = {'User-Agent': 'request'};

        try {
            const response = await fetch(changelogUrl, {
                headers,
            });
            if (response.ok) {
                return await response.text();
            }
        } catch (err) {
            console.error(err);
        }

        return '';
    }

    async fetchLibReadmeInfo({readmeUrl, id}: LibConfig): Promise<{
        en: string;
        ru: string;
        es: string;
        zh: string;
        fr: string;
        de: string;
        ko: string;
    }> {
        const headers: Record<string, string> = {'User-Agent': 'request'};

        const fetchReadmeContent = async (url: string) => {
            try {
                const response = await fetch(url, {
                    headers,
                });
                if (response.ok) {
                    return await response.text();
                }
            } catch (err) {
                console.error(err);
            }

            return '';
        };

        const getLocalDocsReadPromise = (locale: string) =>
            fs.promises.readFile(
                path.join(
                    path.dirname(fileURLToPath(import.meta.url)),
                    `../../src/content/local-docs/libs/${id}/README-${locale}.md`,
                ),
                'utf8',
            );

        const [en, ru, es, zh, fr, de, ko] = await Promise.all([
            fetchReadmeContent(readmeUrl.en),
            fetchReadmeContent(readmeUrl.ru),
            getLocalDocsReadPromise('es'),
            getLocalDocsReadPromise('zh'),
            getLocalDocsReadPromise('fr'),
            getLocalDocsReadPromise('de'),
            getLocalDocsReadPromise('ko'),
        ]);

        return {
            en,
            ru,
            es,
            zh,
            fr,
            de,
            ko,
        };
    }

    async fetchLibData(libConfig: LibConfig): Promise<Omit<LibWithFullData, 'config'>> {
        const [npmInfo, githubInfo, readmeInfo, changelogInfo] = await Promise.all([
            libConfig.npmId ? this.fetchNpmInfo(libConfig.npmId) : null,
            libConfig.githubId ? this.fetchLibGithubInfo(libConfig.githubId) : null,
            this.fetchLibReadmeInfo(libConfig),
            libConfig.changelogUrl ? this.fetchChangelogInfo(libConfig.changelogUrl) : '',
        ]);

        const latestVersion = npmInfo?.['dist-tags']?.latest || '';
        let latestReleaseDate = '';

        if (latestVersion && npmInfo?.time?.[latestVersion]) {
            try {
                const date = new Date(npmInfo.time[latestVersion]);
                const day = date.getUTCDate();
                const month = date.getUTCMonth() + 1;
                latestReleaseDate = `${day < 10 ? `0${day}` : day}.${
                    month < 10 ? `0${month}` : month
                }.${date.getUTCFullYear()}`;
            } catch (error) {
                console.error('Error parsing date:', error);
            }
        }

        return {
            metadata: {
                stars: githubInfo?.stargazers_count ?? 0,
                version: latestVersion,
                lastUpdate: latestReleaseDate,
                license: githubInfo?.license?.name ?? '',
                issues: githubInfo?.open_issues_count ?? 0,
            },
            data: {
                readme: readmeInfo,
                changelog: changelogInfo,
                contributors: githubInfo?.contributors ?? [],
                codeOwners: githubInfo?.codeOwners ?? [],
            },
        };
    }

    async fetchLibById(id: string): Promise<LibWithFullData> {
        const config = libsConfigs.find((lib) => lib.id === id);

        if (!config) {
            throw new Error(`Can't find config for lib with id – ${id}`);
        }

        const {metadata, data} = await this.fetchLibData(config);

        return {
            config,
            metadata,
            data,
        };
    }

    async fetchLibByIdWithCache(id: string): Promise<LibWithFullData> {
        const now = Date.now();

        if (this.libsByIdCache[id]) {
            const isCacheOutdated = now - this.libsByIdCache[id].timestamp > this.LIBS_CACHE_TTL;

            if (isCacheOutdated) {
                this.fetchLibById(id)
                    .then((lib) => {
                        this.libsByIdCache[id] = {
                            timestamp: Date.now(),
                            lib,
                        };
                    })
                    .catch((error) => {
                        console.error(`Error updating lib cache for ${id}:`, error);
                    });
            }

            return this.libsByIdCache[id].lib;
        }

        const lib = await this.fetchLibById(id);
        this.libsByIdCache[id] = {
            timestamp: now,
            lib,
        };

        return lib;
    }

    fetchAllLibs(): Promise<LibWithFullData[]> {
        return Promise.all(libsConfigs.map(({id}) => this.fetchLibByIdWithCache(id)));
    }

    fetchAllLibsOnlyWithMetadata(): Promise<LibWithMetadata[]> {
        return Promise.all(
            libsConfigs.map(({id}) =>
                this.fetchLibByIdWithCache(id).then(({config, metadata}) => ({
                    config,
                    metadata,
                })),
            ),
        );
    }

    async fetchLandingLibs(): Promise<LibWithMetadata[]> {
        const libs = await Promise.all(
            libsConfigs
                .filter(({landing}) => landing)
                .map(({id}) =>
                    this.fetchLibByIdWithCache(id).then(({config, metadata}) => ({
                        config,
                        metadata,
                    })),
                ),
        );

        return libs.sort((lib1, lib2) => {
            const order = [
                'uikit',
                'navigation',
                'date-components',
                'markdown-editor',
                'graph',
                'page-constructor',
                'dashkit',
            ];

            return order.indexOf(lib1.config.id) - order.indexOf(lib2.config.id);
        });
    }

    async fetchComponentReadme({
        readmeUrl,
        libId,
        componentId,
        locale,
    }: {
        readmeUrl: Record<string, string>;
        libId: string;
        componentId: string;
        locale: string;
    }): Promise<string> {
        let readmeContent = '';

        const headers: Record<string, string> = {'User-Agent': 'request'};

        try {
            if (locale !== 'en' && locale !== 'ru') {
                try {
                    readmeContent = await import(
                        `../content/local-docs/components/${libId}/${componentId}/README-${locale}.md`
                    ).then((module) => module.default);
                } catch (err) {
                    console.warn(
                        `Can't find local docs for "${componentId}", library "${libId}", lang "${locale}"`,
                    );
                }
            } else {
                const res = await fetch(readmeUrl[locale], {headers});
                if (res.status >= 200 && res.status < 300) {
                    readmeContent = await res.text();
                }
            }

            if (!readmeContent && locale !== i18n.defaultLocale) {
                const fallbackRes = await fetch(readmeUrl[i18n.defaultLocale], {headers});
                if (fallbackRes.status >= 200 && fallbackRes.status < 300) {
                    readmeContent = await fallbackRes.text();
                }
            }
        } catch (err) {
            console.warn('Error fetching component README:', err);
        }

        return readmeContent;
    }

    async fetchComponentReadmeWithCache({
        readmeUrl,
        libId,
        componentId,
        locale,
    }: {
        readmeUrl: Record<string, string>;
        libId: string;
        componentId: string;
        locale: string;
    }): Promise<string> {
        const cacheKey = `${libId}:${componentId}:${locale}`;
        const now = Date.now();

        if (this.componentReadmeCache[cacheKey]) {
            const isCacheOutdated =
                now - this.componentReadmeCache[cacheKey].timestamp >
                this.COMPONENT_README_CACHE_TTL;

            if (isCacheOutdated) {
                this.fetchComponentReadme({readmeUrl, libId, componentId, locale})
                    .then((content) => {
                        this.componentReadmeCache[cacheKey] = {
                            content,
                            timestamp: Date.now(),
                        };
                    })
                    .catch((error) => {
                        console.error(`Error updating README cache for ${cacheKey}:`, error);
                    });
            }

            return this.componentReadmeCache[cacheKey].content;
        }

        const content = await this.fetchComponentReadme({readmeUrl, libId, componentId, locale});
        this.componentReadmeCache[cacheKey] = {
            content,
            timestamp: now,
        };

        return content;
    }

    // Blog API methods
    // Currently returning mock data. Will be replaced with real API calls later.

    /**
     * Get blog post by slug
     * @param locale - Current locale (not used for now, same data for all locales)
     * @param slug - Full post slug (e.g., "posts/2022/09/review")
     * @returns Blog post with page content
     *
     * TODO: When connecting to real API, parse slug to extract date and post slug
     * Example: "posts/2022/09/review" -> { year: 2022, month: 09, slug: "review" }
     */
    async getBlogPost(locale: string, slug: string): Promise<{post: BlogPost; page: BlogPage}> {
        try {
            const postMock = await import('./.mocks/post.json');
            const pageMock = await import('./.mocks/page.json');

            // Determine lang and region from locale
            const lang = locale.split('-')[0] as 'en' | 'ru';
            const region = locale.includes('-') ? locale : `${locale}-${locale}`;

            // Plugins for markdown transformation (empty array for now)
            const plugins: MarkdownItPluginCb[] = [];

            // Transform post using transformPost from blog-constructor
            const transformedPost = transformPost({
                postData: postMock.default,
                lang,
                region,
                plugins,
            }) as unknown as BlogPost;

            // Transform page content using transformPageContent from blog-constructor
            const transformedPageContent: Parameters<typeof createReadableContent>[number] =
                transformPageContent({
                    content: pageMock.default.content,
                    lang,
                    region,
                    plugins: plugins as MarkdownItPluginCb[],
                });

            return {
                post: {
                    ...transformedPost,
                    locale,
                },
                page: {
                    ...pageMock.default,
                    content: transformedPageContent,
                } as unknown as BlogPage,
            };
        } catch (error) {
            console.error('Error fetching blog post:', error);
            throw new Error(`Failed to fetch blog post: ${slug}`);
        }
    }

    /**
     * Get list of blog tags
     * @param locale - Current locale (not used for now, same data for all locales)
     * @returns Array of blog tags
     *
     * TODO: When connecting to real API, filter tags by locale
     */
    async getBlogTags(locale: string): Promise<BlogTag[]> {
        try {
            const tagsMock = await import('./.mocks/tags.json');
            return tagsMock.default.filter((tag: BlogTag) => tag.locale === locale);
        } catch (error) {
            console.error('Error fetching blog tags:', error);
            return [];
        }
    }

    /**
     * Get list of blog posts with filtering
     * @param locale - Current locale (not used for now, same data for all locales)
     * @param _query - Query parameters for filtering and pagination
     * @returns Blog posts response with pagination info
     *
     * TODO: When connecting to real API, implement actual filtering and pagination
     */
    async getBlogPosts(
        locale: string,
        _query?: BlogPostsQuery,
    ): Promise<BlogPostsResponse & {page: BlogPage}> {
        try {
            const postsMock = (await import('./.mocks/posts.json')) as {
                default: BlogPostsResponse;
            };
            const blogPageMock = await import('./.mocks/blogPage.json');
            const {preparePost} = await import('../utils/blog');

            // Transform locale string to object with lang property
            const localeObj = {lang: locale};

            // Transform mock data using preparePost
            const transformedPosts = postsMock.default.posts.map((post: any) => {
                const preparedPost = preparePost({
                    postData: {
                        ...post,
                        title: post.textTitle || post.htmlTitle || post.title || 'Untitled',
                    },
                    locale: localeObj,
                    withContent: false,
                });

                return {
                    ...preparedPost,
                    locale,
                } as unknown as BlogPostListItem;
            });

            const transformedPinnedPost = postsMock.default.pinnedPost
                ? (() => {
                      const preparedPost = preparePost({
                          postData: {
                              ...postsMock.default.pinnedPost,
                              title:
                                  (postsMock.default.pinnedPost as any).title ||
                                  (postsMock.default.pinnedPost as any).textTitle ||
                                  'Untitled',
                          },
                          locale: localeObj,
                          withContent: false,
                      });

                      return {
                          ...preparedPost,
                          locale,
                      } as unknown as BlogPostListItem;
                  })()
                : null;

            // For now, return all mock data without filtering
            // TODO: Implement filtering by tags, services, search when connecting to real API
            return {
                posts: transformedPosts,
                count: postsMock.default.count,
                totalCount: postsMock.default.totalCount,
                pinnedPost: transformedPinnedPost,
                page: blogPageMock.default as unknown as BlogPage,
            };
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            throw new Error('Failed to fetch blog posts');
        }
    }

    /**
     * Get suggested posts for a blog post
     * @param locale - Current locale (not used for now, same data for all locales)
     * @param _postId - Current post ID (not used for now, returns mock data)
     * @returns Array of suggested posts
     *
     * TODO: When connecting to real API, get related posts based on postId
     */
    async getSuggestedPosts(_locale: string, _postId?: number): Promise<BlogPostListItem[]> {
        try {
        } catch (error) {
            console.error('Error fetching suggested posts:', error);
            return [];
        }
    }
}
