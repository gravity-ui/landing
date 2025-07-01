import {Octokit} from '@octokit/rest';

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

const CONTRIBUTOR_IGNORE_LIST = ['dependabot', 'dependabot[bot]', 'gravity-ui-bot', 'yc-ui-bot'];

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

export const getRepositoryContributors = async (
    repoOwner: string,
    repo: string,
): Promise<Contributor[]> => {
    const items = await octokit.paginate(octokit.rest.repos.listContributors, {
        owner: repoOwner,
        repo,
    });

    const contributors = items
        .filter(({login}) => login && !CONTRIBUTOR_IGNORE_LIST.includes(login))
        .map(({login, avatar_url: avatarUrl, html_url: url, contributions}) => ({
            login: login!,
            avatarUrl: avatarUrl!,
            url: url!,
            contributions,
        }));

    return contributors;
};

export const fetchRepositoryCodeOwners = async (
    repoOwner: string,
    repo: string,
): Promise<CodeOwners[]> => {
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
};

export const getOrganizationRepositories = async (org: string) => {
    return await octokit.paginate(octokit.rest.repos.listForOrg, {
        org,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
};
