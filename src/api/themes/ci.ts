import {createHash} from 'crypto';
import {deflateRawSync, inflateRawSync} from 'zlib';

import {createAppAuth} from '@octokit/auth-app';
import {Octokit} from '@octokit/rest';
import sharp from 'sharp';

import {sha256, validateThemePayload} from './gallery-files';
import type {ThemeInput, ThemeJob} from './receipt';
import {ReceiptError} from './receipt';

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
    const [owner, repo, extra] = process.env.THEMES_REPOSITORY!.split('/');
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

export const hashJobInput = (metadata: unknown, payload: unknown) =>
    createHash('sha256').update(JSON.stringify({metadata, payload})).digest('hex');

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
    if (data.total_count > 100) throw new Error('Workflow search exceeds safe bound');
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
    )
        throw new ReceiptError('receipt-configuration');
}

export class WorkflowInputTooLargeError extends Error {}

export function workflowDispatchBody(job: ThemeJob, input: ThemeInput) {
    const json = JSON.stringify(input);
    if (Buffer.byteLength(json) > 1024 * 1024)
        throw new WorkflowInputTooLargeError('workflow-input-too-large');
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
    if (JSON.stringify(body).length > 65535)
        throw new WorkflowInputTooLargeError('workflow-input-too-large');
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
    const result = await octokit.request(
        'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches',
        {
            owner: config.owner,
            repo: config.repo,
            workflow_id: 'render-submission.yml',
            ...body,
            headers: {'X-GitHub-Api-Version': '2026-03-10'},
        },
    );
    const data = result.data as unknown as {workflow_run_id?: number};
    if (Number(result.status) !== 200 || !Number.isSafeInteger(data.workflow_run_id)) {
        throw new Error('Dispatch result unconfirmed; reconcile without redispatch');
    }
    return data.workflow_run_id!;
}

// GitHub artifact archives must contain exactly one bounded regular file.
function readArtifactJson(zip: Buffer) {
    if (zip.length < 22) throw new Error('Invalid artifact archive');
    let end = zip.length - 22;
    const lowerBound = Math.max(0, zip.length - 65557);
    while (end >= lowerBound && zip.readUInt32LE(end) !== 0x06054b50) {
        end--;
    }
    if (
        end < lowerBound ||
        zip.readUInt32LE(end) !== 0x06054b50 ||
        zip.readUInt16LE(end + 10) !== 1
    ) {
        throw new Error('Invalid artifact archive');
    }
    const central = zip.readUInt32LE(end + 16);
    if (central + 46 > zip.length || zip.readUInt32LE(central) !== 0x02014b50) {
        throw new Error('Invalid artifact directory');
    }
    const nameLength = zip.readUInt16LE(central + 28);
    const name = zip.subarray(central + 46, central + 46 + nameLength).toString();
    const method = zip.readUInt16LE(central + 10);
    const size = zip.readUInt32LE(central + 20);
    const rawSize = zip.readUInt32LE(central + 24);
    const local = zip.readUInt32LE(central + 42);
    if (
        name !== 'result.json' ||
        rawSize > 8 * 1024 * 1024 ||
        local + 30 > zip.length ||
        zip.readUInt32LE(local) !== 0x04034b50 ||
        (method !== 0 && method !== 8)
    ) {
        throw new Error('Unexpected artifact file');
    }
    const start = local + 30 + zip.readUInt16LE(local + 26) + zip.readUInt16LE(local + 28);
    if (start + size > central) {
        throw new Error('Truncated artifact');
    }
    const compressed = zip.subarray(start, start + size);
    const bytes =
        method === 8
            ? inflateRawSync(new Uint8Array(compressed), {maxOutputLength: 8 * 1024 * 1024})
            : compressed;
    if (bytes.length !== rawSize) {
        throw new Error('Artifact size mismatch');
    }
    return JSON.parse(bytes.toString('utf8')) as Record<string, unknown>;
}

export class RendererWorkflowFailedError extends Error {}

export async function collectResult(octokit: Octokit, job: ThemeJob & {runId: number}) {
    assertJobConfiguration(job);
    const {owner, repo} = ciConfig();
    const {data: run} = await octokit.actions.getWorkflowRun({owner, repo, run_id: job.runId!});
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
        run_id: job.runId!,
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
    if (archive.length > 8 * 1024 * 1024) throw new Error('Artifact download too large');
    const result = readArtifactJson(archive);
    if (
        result.userId !== job.userId ||
        result.jobId !== job.id ||
        result.runId !== job.runId ||
        result.revision !== job.revision ||
        result.themeHash !== job.themeHash ||
        !result.files ||
        !result.hashes
    ) {
        throw new Error('Theme artifact correlation mismatch');
    }
    const input = result.input as ThemeInput;
    if (
        !input ||
        hashJobInput(input.metadata, input.payload) !== job.themeHash ||
        hashJobInput(input.metadata, validateThemePayload(input.payload)) !== job.themeHash
    ) {
        throw new Error('Artifact input hash mismatch');
    }
    const files = result.files as Record<string, string>;
    const hashes = result.hashes as Record<string, string>;
    if (
        Array.isArray(files) ||
        Array.isArray(hashes) ||
        typeof files !== 'object' ||
        typeof hashes !== 'object' ||
        Object.keys(files).sort().join(',') !== 'dark,light' ||
        Object.keys(hashes).sort().join(',') !== 'dark,light'
    ) {
        throw new Error('Unexpected artifact file or hash keys');
    }
    const previews = {} as Record<'light' | 'dark', Buffer>;
    for (const mode of ['light', 'dark'] as const) {
        if (typeof files[mode] !== 'string' || files[mode].length > 4 * 1024 * 1024) {
            throw new Error('Invalid PNG payload');
        }
        const png = Buffer.from(files[mode], 'base64');
        const info = await sharp(png, {limitInputPixels: 740 * 500}).metadata();
        if (
            info.format !== 'png' ||
            info.width !== 740 ||
            info.height !== 500 ||
            sha256(png) !== hashes[mode]
        ) {
            throw new Error('Invalid PNG dimensions or digest');
        }
        previews[mode] = png;
    }
    return {previews, input, artifactId: matches[0].id};
}
