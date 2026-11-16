import type {Octokit} from '@octokit/rest';

import type {ThemeMetadata} from '../../components/Themes/gallery/schema';

import {GALLERY_DIR, PREVIEWS_DIR, UPSTREAM_BRANCH, UPSTREAM_OWNER, UPSTREAM_REPO} from './config';
import type {GalleryFile} from './gallery-files';
import {getErrorStatus} from './oauth';

const upstream = {owner: UPSTREAM_OWNER, repo: UPSTREAM_REPO};

const FORK_READY_TIMEOUT_MS = 10000;
const FORK_POLL_INTERVAL_MS = 2000;

// Git's well-known empty tree: a gallery without any commits with files yet.
const EMPTY_TREE_SHA = '4b825dc642cb6eb9a060e54bf8d69288fbee4904';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function readUpstreamFile(octokit: Octokit, ref: string, path: string) {
    try {
        const {data} = await octokit.repos.getContent({...upstream, path, ref});
        if (Array.isArray(data) || data.type !== 'file' || !('content' in data)) {
            throw new Error(`${path} is not a file`);
        }
        return Buffer.from(data.content, 'base64');
    } catch (error) {
        if (getErrorStatus(error) === 404) {
            return null;
        }
        throw error;
    }
}

export interface UpstreamState {
    commitSha: string;
    treeSha: string;
}
export async function readUpstreamState(octokit: Octokit): Promise<UpstreamState> {
    if (!upstream.owner || !upstream.repo)
        throw new Error('Missing configuration: THEMES_REPOSITORY');
    const {data: ref} = await octokit.git.getRef({...upstream, ref: `heads/${UPSTREAM_BRANCH}`});
    const {data: commit} = await octokit.git.getCommit({...upstream, commit_sha: ref.object.sha});
    return {commitSha: ref.object.sha, treeSha: commit.tree.sha};
}

export async function isThemeNameTaken(
    octokit: Octokit,
    state: UpstreamState,
    metadata: Pick<ThemeMetadata, 'id' | 'name'>,
) {
    // GitHub answers 404 for the empty tree.
    if (state.treeSha === EMPTY_TREE_SHA) return false;
    const {data} = await octokit.git.getTree({
        ...upstream,
        tree_sha: state.treeSha,
        recursive: '1',
    });
    if (data.truncated) {
        throw new Error('Upstream tree is incomplete');
    }
    const paths = data.tree
        .map((entry) => entry.path)
        .filter((path): path is string => Boolean(path?.startsWith(`${GALLERY_DIR}/`)));
    if (
        paths.includes(`${GALLERY_DIR}/${metadata.id}.meta.json`) ||
        paths.includes(`${GALLERY_DIR}/${metadata.id}.theme.json`)
    ) {
        return true;
    }
    const names = await Promise.all(
        paths
            .filter((path) => path.endsWith('.meta.json'))
            .map(async (path) => {
                const source = await readUpstreamFile(octokit, state.commitSha, path);
                const meta: unknown = source && JSON.parse(source.toString('utf8'));
                if (
                    !meta ||
                    typeof meta !== 'object' ||
                    !('name' in meta) ||
                    typeof meta.name !== 'string'
                ) {
                    throw new Error(`Invalid upstream metadata: ${path}`);
                }
                return meta.name.trim().toLowerCase();
            }),
    );
    return names.includes(metadata.name.trim().toLowerCase());
}

export interface ForkRef {
    owner: string;
    repo: string;
    defaultBranch: string;
}

// Forks the upstream into the user's account (or reuses the fork) and syncs it.
export async function prepareFork(octokit: Octokit): Promise<ForkRef> {
    const {data} = await octokit.repos.createFork({...upstream, default_branch_only: true});
    const fork = {owner: data.owner.login, repo: data.name, defaultBranch: data.default_branch};

    // Forking is asynchronous on GitHub's side: wait until the branch exists.
    const deadline = Date.now() + FORK_READY_TIMEOUT_MS;
    for (;;) {
        try {
            await octokit.git.getRef({
                owner: fork.owner,
                repo: fork.repo,
                ref: `heads/${fork.defaultBranch}`,
            });
            break;
        } catch (error) {
            const status = getErrorStatus(error);
            if ((status !== 404 && status !== 409) || Date.now() > deadline) {
                throw error;
            }
            await wait(FORK_POLL_INTERVAL_MS);
        }
    }

    // Brings upstream objects into the fork. A diverged fork cannot be fast
    // forwarded; the theme branch is based on upstream anyway, so go on.
    await octokit.repos
        .mergeUpstream({owner: fork.owner, repo: fork.repo, branch: fork.defaultBranch})
        .catch(() => undefined);

    return fork;
}

// The fork lags behind upstream changes that the user's token cannot bring in
// (GitHub requires the `workflow` scope for them); the user syncs the fork on GitHub.
export class ForkOutdatedError extends Error {
    readonly forkUrl: string;

    constructor(fork: ForkRef) {
        super('Fork is behind upstream');
        this.name = 'ForkOutdatedError';
        this.forkUrl = `https://github.com/${fork.owner}/${fork.repo}`;
    }
}

async function isForkBehind(octokit: Octokit, fork: ForkRef) {
    const {data} = await octokit.repos.compareCommitsWithBasehead({
        ...upstream,
        basehead: `${UPSTREAM_BRANCH}...${fork.owner}:${fork.repo}:${fork.defaultBranch}`,
    });
    return data.behind_by > 0;
}

// Built from the sanitized id, not the free-form name: a name like `[skip ci]`
// in the head commit message would make GitHub skip the PR workflows.
function getCommitMessage(metadata: ThemeMetadata) {
    return `feat(themes): add ${metadata.id} theme`;
}

// GitHub reads these directives from commit messages; they are dropped from the
// title too, so squash-merging the PR with its title as the message stays safe.
const CI_SKIP_DIRECTIVE_RE =
    /\[\s*(?:skip\s+ci|ci\s+skip|no\s+ci|skip\s+actions|actions\s+skip)\s*\]/gi;

function getPullRequestTitle(metadata: ThemeMetadata) {
    let name = metadata.name;
    let previousName: string;
    do {
        previousName = name;
        // Removing an inner directive can expose another one, e.g. [skip[skip ci]ci].
        name = name.replace(CI_SKIP_DIRECTIVE_RE, ' ').replace(/\s+/g, ' ').trim();
    } while (name !== previousName);
    return `feat(themes): add ${name || metadata.id} theme`;
}

// A deterministic branch per receipt; never overwrite existing branch contents.
export async function commitGalleryFiles({
    octokit,
    fork,
    state,
    metadata,
    files,
    jobId,
}: {
    octokit: Octokit;
    fork: ForkRef;
    state: UpstreamState;
    metadata: ThemeMetadata;
    files: GalleryFile[];
    jobId: string;
}) {
    const repo = {owner: fork.owner, repo: fork.repo};
    const tree = await Promise.all(
        files.map(async (file) => {
            if (typeof file.content === 'string') {
                return {
                    path: file.path,
                    mode: '100644' as const,
                    type: 'blob' as const,
                    content: file.content,
                };
            }
            const {data: blob} = await octokit.git.createBlob({
                ...repo,
                content: file.content.toString('base64'),
                encoding: 'base64',
            });
            return {path: file.path, mode: '100644' as const, type: 'blob' as const, sha: blob.sha};
        }),
    );
    const {data: newTree} = await octokit.git.createTree({
        ...repo,
        ...(state.treeSha === EMPTY_TREE_SHA ? {} : {base_tree: state.treeSha}),
        tree,
    });
    const {data: commit} = await octokit.git.createCommit({
        ...repo,
        message: getCommitMessage(metadata),
        tree: newTree.sha,
        parents: [state.commitSha],
    });

    // GitHub answers 404 when the branch would bring workflow changes the fork
    // does not have yet.
    const rethrow = async (error: unknown): Promise<never> => {
        if (getErrorStatus(error) === 404 && (await isForkBehind(octokit, fork))) {
            throw new ForkOutdatedError(fork);
        }
        throw error;
    };

    const branch = `theme/${metadata.id}-${jobId}`;
    try {
        await octokit.git.createRef({...repo, ref: `refs/heads/${branch}`, sha: commit.sha});
        return {branch, commitSha: commit.sha};
    } catch (error) {
        if (getErrorStatus(error) !== 422) await rethrow(error);
        const {data: existing} = await octokit.git.getRef({...repo, ref: `heads/${branch}`});
        const {data: existingCommit} = await octokit.git.getCommit({
            ...repo,
            commit_sha: existing.object.sha,
        });
        if (
            existingCommit.tree.sha !== newTree.sha ||
            existingCommit.message !== getCommitMessage(metadata) ||
            existingCommit.parents.length !== 1 ||
            existingCommit.parents[0].sha !== state.commitSha
        ) {
            throw new Error('Submission branch has external changes; refusing to overwrite');
        }
        return {branch, commitSha: existing.object.sha};
    }
}

// Keeps user-provided text from pinging people or issues in the PR body.
const neutralizeMentions = (text: string) => text.replace(/([@#])(?=\w)/g, '$1\u200B');
const escapeMarkdown = (text: string) =>
    neutralizeMentions(text).replace(/[\\`*_{}[\]()#+.!|<>~-]/g, '\\$&');

function getPullRequestBody({
    metadata,
    login,
    fork,
    commitSha,
}: {
    metadata: ThemeMetadata;
    login: string;
    fork: ForkRef;
    commitSha: string;
}) {
    const imageUrl = (mode: 'light' | 'dark') =>
        `https://github.com/${fork.owner}/${fork.repo}/blob/${commitSha}/${PREVIEWS_DIR}/${metadata.id}-${mode}.png?raw=true`;
    const name = escapeMarkdown(metadata.name);
    const lines = [
        `Adds the **${name}** theme to the [theme gallery](https://gravity-ui.com/themes).`,
        '',
        `Submitted by @${login} from the Themer.`,
        '',
        `> ${escapeMarkdown(metadata.description.en)}`,
        '',
    ];
    if (metadata.description.ru !== metadata.description.en) {
        lines.push(`> ${escapeMarkdown(metadata.description.ru)}`, '');
    }
    lines.push(
        `Tags: ${metadata.tags.length ? metadata.tags.map((tag) => `\`${tag}\``).join(', ') : '-'}`,
        `Brand color: \`${metadata.brandColor}\``,
        '',
        '| Light | Dark |',
        '| --- | --- |',
        `| ![${name}, light](${imageUrl('light')}) | ![${name}, dark](${imageUrl('dark')}) |`,
        '',
        'Card previews were generated by the pinned theme repository CI renderer.',
    );
    return lines.join('\n');
}

export async function openPullRequest({
    octokit,
    fork,
    metadata,
    login,
    branch,
    commitSha,
}: {
    octokit: Octokit;
    fork: ForkRef;
    metadata: ThemeMetadata;
    login: string;
    branch: string;
    commitSha: string;
}) {
    const head = `${fork.owner}:${branch}`;
    const reconcile = async () => {
        const existing = await octokit.paginate(octokit.pulls.list, {
            ...upstream,
            head,
            base: UPSTREAM_BRANCH,
            state: 'all',
            per_page: 100,
        });
        const matches = existing.filter(
            (pr) =>
                pr.head.ref === branch &&
                pr.head.repo?.full_name.toLowerCase() ===
                    `${fork.owner}/${fork.repo}`.toLowerCase(),
        );
        if (matches.length > 1) throw new Error('Multiple submission pull requests');
        const pr = matches[0];
        if (!pr) return null;
        if (pr.head.sha !== commitSha)
            throw new Error('Submission pull request changed externally');
        return {url: pr.html_url, number: pr.number};
    };
    const existing = await reconcile();
    if (existing) return existing;
    try {
        const {data} = await octokit.pulls.create({
            ...upstream,
            base: UPSTREAM_BRANCH,
            head,
            title: getPullRequestTitle(metadata),
            body: getPullRequestBody({metadata, login, fork, commitSha}),
            maintainer_can_modify: true,
        });
        return {url: data.html_url, number: data.number};
    } catch (error) {
        // Includes accepted writes whose HTTP response was lost and concurrent creators.
        const recovered = await reconcile();
        if (recovered) return recovered;
        throw error;
    }
}
