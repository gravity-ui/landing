import {fetchRepositoryCodeOwners, getRepositoryContributors} from './github';
import type {CodeOwners, Contributor} from './github';

export type GithubInfo = {
    stargazers_count?: number;
    license?: {
        name?: string;
    };
    open_issues_count?: number;
    contributors: Contributor[];
    codeOwners: CodeOwners[];
};

export const fetchLibGithubInfo = async (githubId: string): Promise<GithubInfo | null> => {
    try {
        const headers: Record<string, string> = {'User-Agent': 'request'};
        if (process.env.GITHUB_TOKEN) {
            headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        const [repoOwner, repo] = githubId.split('/');
        const [data, contributors, codeOwners] = await Promise.all([
            (async () => {
                const githubApiUrl = 'https://api.github.com/repos/';
                const response = await fetch(`${githubApiUrl}${githubId}`, {
                    headers,
                });

                if (!response.ok) {
                    throw new Error(`failed to fetch github repo info '${githubId}'`);
                }

                return (await response.json()) as Record<string, any>;
            })(),
            getRepositoryContributors(repoOwner, repo),
            fetchRepositoryCodeOwners(repoOwner, repo),
        ]);

        const result: GithubInfo = {
            ...data,
            contributors,
            codeOwners,
        };

        return result;
    } catch (err) {
        console.error(err);
    }

    return null;
};
