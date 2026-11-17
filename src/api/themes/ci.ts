import {deflateRawSync} from 'zlib';

import {createAppAuth} from '@octokit/auth-app';
import {Octokit} from '@octokit/rest';

import {parseThemeArtifact} from './artifact';
import {getErrorStatus} from './oauth';
import type {ThemeJob} from './receipt';
import {ReceiptError} from './receipt';
import type {ThemeInput} from './types';

export function ciConfig() {
    const names = [
        'THEMES_REPOSITORY',
        'THEMES_RENDERER_REVISION',
        'THEMES_RENDERER_TAG',
        'THEMES_GITHUB_APP_ID',
        'THEMES_GITHUB_APP_INSTALLATION_ID',
        'THEMES_GITHUB_APP_PRIVATE_KEY',
    ];
    const missing = names.filter((name) => !process.env[name]);
    if (missing.length) {
        throw new Error(`Missing configuration: ${missing.join(', ')}`);
    }
    // CI runs where the renderer GitHub App is installed; the gallery PR still targets THEMES_REPOSITORY.
    const ciRepository = process.env.THEMES_CI_REPOSITORY || process.env.THEMES_REPOSITORY!;
    const [owner, repo, extra] = ciRepository.split('/');
    const revision = process.env.THEMES_RENDERER_REVISION!;
    const tag = process.env.THEMES_RENDERER_TAG!;
    if (
        !owner ||
        !repo ||
        extra ||
        !/^[a-f0-9]{40}$/.test(revision) ||
        !/^[a-zA-Z0-9._-]+$/.test(tag)
    ) {
        throw new Error('Invalid theme CI configuration');
    }
    return {owner, repo, revision, tag};
}

export function createCiOctokit() {
    ciConfig();
    return new Octokit({
        authStrategy: createAppAuth,
        auth: {
            appId: process.env.THEMES_GITHUB_APP_ID,
            installationId: process.env.THEMES_GITHUB_APP_INSTALLATION_ID,
            privateKey: Buffer.from(process.env.THEMES_GITHUB_APP_PRIVATE_KEY!, 'base64').toString(
                'utf8',
            ),
        },
        request: {timeout: 15000},
    });
}

export async function findRun(octokit: Octokit, job: ThemeJob) {
    const config = ciConfig();
    assertJobConfiguration(job);
    const {data} = await octokit.actions.listWorkflowRuns({
        owner: config.owner,
        repo: config.repo,
        workflow_id: 'render-submission.yml',
        event: 'workflow_dispatch',
        created: `${new Date(job.createdAt - 60000).toISOString()}..${new Date(
            job.dispatchBefore + 60000,
        ).toISOString()}`,
        per_page: 100,
    });
    if (data.total_count > 100) {
        throw new Error('Workflow search exceeds safe bound');
    }
    const matches = data.workflow_runs.filter(
        (run) =>
            run.display_title === `theme-job:${job.id}` &&
            run.head_sha === job.revision &&
            run.path === '.github/workflows/render-submission.yml' &&
            run.event === 'workflow_dispatch',
    );
    // Concurrent dispatches can race: deterministically reconcile the oldest run.
    return matches.sort((a, b) => a.id - b.id)[0];
}

export function assertJobConfiguration(job: ThemeJob) {
    const config = ciConfig();
    if (
        job.repository !== `${config.owner}/${config.repo}` ||
        job.revision !== config.revision ||
        job.rendererTag !== config.tag
    ) {
        throw new ReceiptError('receipt-configuration');
    }
}

export class WorkflowInputTooLargeError extends Error {}

export function workflowDispatchBody(job: ThemeJob, input: ThemeInput) {
    const json = JSON.stringify(input);
    if (Buffer.byteLength(json) > 1024 * 1024) {
        throw new WorkflowInputTooLargeError('workflow-input-too-large');
    }
    const submission = deflateRawSync(new Uint8Array(Buffer.from(json))).toString('base64');
    const body = {
        ref: job.rendererTag,
        inputs: {
            job_id: job.id,
            revision: job.revision,
            theme_hash: job.themeHash,
            user_id: String(job.userId),
            submission,
        },
    };
    // Count the complete serialized dispatch body, including ref, keys and JSON escaping.
    if (JSON.stringify(body).length > 65535) {
        throw new WorkflowInputTooLargeError('workflow-input-too-large');
    }
    return body;
}

export async function dispatchRun(octokit: Octokit, job: ThemeJob, input: ThemeInput) {
    const config = ciConfig();
    const {data: tag} = await octokit.git.getRef({
        owner: config.owner,
        repo: config.repo,
        ref: `tags/${config.tag}`,
    });
    // Lightweight immutable renderer tags are required. Annotated tags are not accepted.
    if (tag.object.type !== 'commit' || tag.object.sha !== job.revision) {
        throw new Error('Renderer tag does not match pinned revision');
    }
    const body = workflowDispatchBody(job, input);
    try {
        await octokit.request(
            'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches',
            {
                owner: config.owner,
                repo: config.repo,
                workflow_id: 'render-submission.yml',
                ...body,
                headers: {'X-GitHub-Api-Version': '2026-03-10'},
            },
        );
    } catch (error) {
        const status = getErrorStatus(error);
        if (status !== undefined && status >= 400 && status < 500) {
            throw error;
        }
        // Network failures, timeouts and server errors may follow an accepted dispatch.
    }
}

export class RendererWorkflowFailedError extends Error {}

export async function collectResult(octokit: Octokit, job: ThemeJob & {runId: number}) {
    assertJobConfiguration(job);
    const {owner, repo} = ciConfig();
    const {data: run} = await octokit.actions.getWorkflowRun({owner, repo, run_id: job.runId});
    if (
        run.head_sha !== job.revision ||
        run.display_title !== `theme-job:${job.id}` ||
        run.event !== 'workflow_dispatch' ||
        run.path !== '.github/workflows/render-submission.yml'
    ) {
        throw new Error('Workflow correlation mismatch');
    }
    if (run.status !== 'completed') {
        return null;
    }
    if (run.conclusion !== 'success') {
        throw new RendererWorkflowFailedError('Theme renderer workflow failed');
    }
    const artifacts = await octokit.paginate(octokit.actions.listWorkflowRunArtifacts, {
        owner,
        repo,
        run_id: job.runId,
        per_page: 100,
    });
    const matches = artifacts.filter(
        (artifact) => artifact.name === `theme-job-${job.id}` && !artifact.expired,
    );
    if (matches.length !== 1 || matches[0].size_in_bytes > 8 * 1024 * 1024) {
        throw new Error('Unexpected theme artifact');
    }
    const {data} = await octokit.actions.downloadArtifact({
        owner,
        repo,
        artifact_id: matches[0].id,
        archive_format: 'zip',
    });
    const archive = Buffer.from(data as ArrayBuffer);
    if (archive.length > 8 * 1024 * 1024) {
        throw new Error('Artifact download too large');
    }
    return parseThemeArtifact(archive, job);
}
