/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

const CONTRIBUTOR_IGNORE_LIST = ['dependabot', 'dependabot[bot]', 'gravity-ui-bot', 'yc-ui-bot'];

/**
 * @param {string} repoOwner
 * @param {string} repo
 * @return {Promise<Contributor[]>}
 */
export async function getRepositoryContributors(repoOwner, repo) {
    const items = await octokit.paginate(octokit.rest.repos.listContributors, {
        owner: repoOwner,
        repo,
    });

    const contributors = items
        .filter(({login}) => login && !CONTRIBUTOR_IGNORE_LIST.includes(login))
        .map(({login, avatar_url, html_url, contributions}) => ({
            login,
            avatarUrl: avatar_url,
            url: html_url,
            contributions,
        }));

    return contributors;
}

export async function fetchRepositoryCodeOwners(repoOwner, repo) {
    const url = `https://raw.githubusercontent.com/${repoOwner}/${repo}/main/CODEOWNERS`;
    const res = await fetch(url);

    if (!res.ok) {
        return [];
    }

    const codeOwnersText = await res.text();
    const lines = codeOwnersText.split('\n');
    const codeOwners = [];

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
