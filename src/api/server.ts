import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

import {createAppAuth} from '@octokit/auth-app';
import {Octokit} from '@octokit/rest';
import {i18n} from 'next-i18next.config';

import {type LibConfig, libs as libsConfigs} from '../libs';

import {CacheQuery} from './cache-query';
import type {
    CodeOwners,
    Contributor,
    GithubInfo,
    LibWithFullData,
    LibWithMetadata,
    NpmInfo,
} from './types';

export class ServerApi {
    private static _instance: ServerApi;

    private octokit: Octokit;

    private contributorsCache: CacheQuery<Contributor[]>;
    private libsCache: Record<string, CacheQuery<LibWithFullData>>;
    private componentsReadmeCache: Record<string, CacheQuery<string>> = {};

    private readonly CONTRIBUTOR_IGNORE_LIST = [
        'dependabot',
        'dependabot[bot]',
        'gravity-ui-bot',
        'yc-ui-bot',
    ];

    static get instance(): ServerApi {
        if (!ServerApi._instance) {
            ServerApi._instance = new ServerApi();
        }

        return ServerApi._instance;
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

        this.libsCache = libsConfigs.reduce<Record<LibConfig['id'], CacheQuery<LibWithFullData>>>(
            (acc, lib) => {
                acc[lib.id] = new CacheQuery<LibWithFullData>({
                    ttl: {hours: 1},
                    queryFn: () => this.fetchLibById(lib.id),
                    onError: (error) =>
                        console.error(`Error updating lib cache for ${lib.id}:`, error),
                });

                return acc;
            },
            {},
        );

        this.contributorsCache = new CacheQuery<Contributor[]>({
            ttl: {hours: 24},
            queryFn: () => this.fetchAllContributors(),
            onError: (error) => console.error('Error updating contributors cache:', error),
        });
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
        const contributors = await this.contributorsCache.getData();

        if (!contributors) {
            return [];
        }

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
        pt: string;
        ja: string;
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

        const getLocalDocsReadPromise = (locale: string) => {
            const filePath = path.join(
                path.dirname(fileURLToPath(import.meta.url)),
                `../../src/content/local-docs/libs/${id}/README-${locale}.md`,
            );

            if (fs.existsSync(filePath)) {
                return fs.promises.readFile(filePath, 'utf8');
            }

            return '';
        };

        const [en, ru, es, zh, fr, de, ko, pt, ja] = await Promise.all([
            fetchReadmeContent(readmeUrl.en),
            fetchReadmeContent(readmeUrl.ru),
            getLocalDocsReadPromise('es'),
            getLocalDocsReadPromise('zh'),
            getLocalDocsReadPromise('fr'),
            getLocalDocsReadPromise('de'),
            getLocalDocsReadPromise('ko'),
            getLocalDocsReadPromise('pt'),
            getLocalDocsReadPromise('ja'),
        ]);

        return {
            en,
            ru,
            es,
            zh,
            fr,
            de,
            ko,
            pt,
            ja,
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
        const libData = await this.libsCache[id].getData();

        if (!libData) {
            throw new Error(`Can't find lib with id – ${id}`);
        }

        return libData;
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
                'aikit',
                'date-components',
                'markdown-editor',
                'graph',
                'navigation',
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

        if (!this.componentsReadmeCache[cacheKey]) {
            this.componentsReadmeCache[cacheKey] = new CacheQuery<string>({
                queryFn: () => this.fetchComponentReadme({readmeUrl, libId, componentId, locale}),
                ttl: {hours: 1},
                onError: (error) =>
                    console.error(`Error updating README cache for ${cacheKey}:`, error),
            });
        }

        const content = await this.componentsReadmeCache[cacheKey].getData();

        if (!content) {
            throw new Error(`Can't find README for ${cacheKey}`);
        }

        return content;
    }
}
