import {Contributor, getOrganizationRepositories, getRepositoryContributors} from './github';

interface Cache {
    data: Contributor[];
    timestamp: number;
}

let contributorsCache: Cache | null = null;
const CACHE_TTL = 24 * 60 * 60 * 1000;

export const fetchAllContributors = async (): Promise<Contributor[]> => {
    const now = Date.now();
    if (contributorsCache && now - contributorsCache.timestamp < CACHE_TTL) {
        return contributorsCache.data;
    }

    if (!process.env.GITHUB_TOKEN) {
        console.warn(
            'Cannot fetch contributors. You need to put your GitHub PAT in the "GITHUB_TOKEN" environment variable to get the actual list of contributors.',
        );
        return [];
    }

    try {
        const repos = await getOrganizationRepositories('gravity-ui');

        const rawContributors = await Promise.all(
            repos.map(async (repo) => getRepositoryContributors(repo.owner.login, repo.name)),
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

        contributorsCache = {
            data: sortedContributors,
            timestamp: now,
        };

        return sortedContributors;
    } catch (error) {
        console.error('Error fetching contributors:', error);
        return [];
    }
};
