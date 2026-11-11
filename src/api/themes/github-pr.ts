import type {Octokit} from '@octokit/rest';

import type {ThemeMetadata} from '../../components/Themes/gallery/schema';

import {
    GALLERY_DIR,
    GALLERY_INDEX_PATH,
    PREVIEWS_DIR,
    PREVIEWS_MANIFEST_PATH,
    PREVIEW_SOURCE_PATHS,
    type PreviewSourceKey,
    UPSTREAM_BRANCH,
    UPSTREAM_OWNER,
    UPSTREAM_REPO,
} from './config';
import {type GalleryFile, type UpstreamSnapshot, readGalleryIds} from './gallery-files';
import {getErrorStatus} from './oauth';

const upstream = {owner: UPSTREAM_OWNER, repo: UPSTREAM_REPO};

const FORK_READY_TIMEOUT_MS = 60000;
const FORK_POLL_INTERVAL_MS = 2000;

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
    snapshot: UpstreamSnapshot;
}

// Reads everything the new gallery files depend on from one upstream commit,
// so the `themeHash` matches what CI computes on the pull request.
export async function readUpstreamState(octokit: Octokit): Promise<UpstreamState> {
    const {data: ref} = await octokit.git.getRef({...upstream, ref: `heads/${UPSTREAM_BRANCH}`});
    const commitSha = ref.object.sha;
    const {data: commit} = await octokit.git.getCommit({...upstream, commit_sha: commitSha});

    const sourceKeys = Object.keys(PREVIEW_SOURCE_PATHS) as PreviewSourceKey[];
    const [packageJson, indexSource, manifest, ...sources] = await Promise.all([
        readUpstreamFile(octokit, commitSha, 'package.json'),
        readUpstreamFile(octokit, commitSha, GALLERY_INDEX_PATH),
        readUpstreamFile(octokit, commitSha, PREVIEWS_MANIFEST_PATH),
        ...sourceKeys.map((key) => readUpstreamFile(octokit, commitSha, PREVIEW_SOURCE_PATHS[key])),
    ]);
    if (!packageJson || !indexSource) {
        throw new Error('Upstream repository layout is not supported');
    }

    const previewSources = Object.fromEntries(
        sourceKeys.map((key, index) => [key, sources[index]]),
    ) as UpstreamSnapshot['previewSources'];

    return {
        commitSha,
        treeSha: commit.tree.sha,
        snapshot: {
            packageJson: packageJson.toString('utf8'),
            indexSource: indexSource.toString('utf8'),
            manifest: manifest ? manifest.toString('utf8') : '{"entries": {}}',
            previewSources,
        },
    };
}

export async function isThemeIdTaken(octokit: Octokit, state: UpstreamState, id: string) {
    if (readGalleryIds(state.snapshot.indexSource).includes(id)) {
        return true;
    }
    const meta = await readUpstreamFile(octokit, state.commitSha, `${GALLERY_DIR}/${id}.meta.json`);
    return meta !== null;
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

export function getThemeBranchName(id: string) {
    return `theme/${id}`;
}

// One commit with all gallery files on top of the upstream commit, pushed to `theme/<id>`.
export async function commitGalleryFiles({
    octokit,
    fork,
    state,
    metadata,
    files,
}: {
    octokit: Octokit;
    fork: ForkRef;
    state: UpstreamState;
    metadata: ThemeMetadata;
    files: GalleryFile[];
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
    const {data: newTree} = await octokit.git.createTree({...repo, base_tree: state.treeSha, tree});
    const {data: commit} = await octokit.git.createCommit({
        ...repo,
        message: getPullRequestTitle(metadata),
        tree: newTree.sha,
        parents: [state.commitSha],
    });

    const branch = getThemeBranchName(metadata.id);
    try {
        await octokit.git.createRef({...repo, ref: `refs/heads/${branch}`, sha: commit.sha});
    } catch (error) {
        // GitHub answers 404 when the new branch would bring workflow changes
        // the fork does not have yet.
        if (getErrorStatus(error) === 404 && (await isForkBehind(octokit, fork))) {
            throw new ForkOutdatedError(fork);
        }
        if (getErrorStatus(error) !== 422) {
            throw error;
        }
        // A previous submission of the same theme: replace its branch.
        await octokit.git.updateRef({
            ...repo,
            ref: `heads/${branch}`,
            sha: commit.sha,
            force: true,
        });
    }
    return {branch, commitSha: commit.sha};
}

export function getPullRequestTitle(metadata: ThemeMetadata) {
    return `feat(themes): add ${metadata.name} theme`;
}

// Keeps user-provided text from pinging people or issues in the PR body.
const neutralizeMentions = (text: string) => text.replace(/([@#])(?=\w)/g, '$1\u200B');

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
    const name = neutralizeMentions(metadata.name);
    const lines = [
        `Adds the **${name}** theme to the [theme gallery](https://gravity-ui.com/themes).`,
        '',
        `Submitted by @${login} from the Themer.`,
        '',
        `> ${neutralizeMentions(metadata.description.en)}`,
        '',
    ];
    if (metadata.description.ru !== metadata.description.en) {
        lines.push(`> ${neutralizeMentions(metadata.description.ru)}`, '');
    }
    lines.push(
        `Tags: ${metadata.tags.length ? metadata.tags.map((tag) => `\`${tag}\``).join(', ') : '-'}`,
        `Brand color: \`${metadata.brandColor}\``,
        '',
        '| Light | Dark |',
        '| --- | --- |',
        `| ![${name}, light](${imageUrl('light')}) | ![${name}, dark](${imageUrl('dark')}) |`,
        '',
        'Card previews and `previews.manifest.json` were rendered by gravity-ui.com.',
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
        if (getErrorStatus(error) !== 422) {
            throw error;
        }
        // The branch already has an open pull request, which now shows the new commit.
        const {data: existing} = await octokit.pulls.list({...upstream, head, state: 'open'});
        if (!existing.length) {
            throw error;
        }
        return {url: existing[0].html_url, number: existing[0].number};
    }
}
