import {randomUUID} from 'crypto';

import {
    RendererWorkflowFailedError,
    assertJobConfiguration,
    ciConfig,
    collectResult,
    createCiOctokit,
    dispatchRun,
    findRun,
    workflowDispatchBody,
} from './ci';
import {buildGalleryFiles} from './gallery-files';
import {commitGalleryFiles, openPullRequest, prepareFork} from './github-pr';
import {hashJobInput, isJobInputValid} from './job-input';
import {createUserOctokit, fetchGithubProfile} from './oauth';
import {reserveDispatch, submissionJobId} from './quota';
import {ReceiptError, signReceipt, verifyReceipt} from './receipt';
import {validateThemeSubmission} from './submission-validation';
import type {SubmissionEvent, ThemeInput} from './types';

// Preparation has no external write or quota charge: save its response before dispatch.
export async function submitTheme(token: string, body: unknown) {
    const config = ciConfig();
    const {profile, metadata, payload, upstreamState} = await validateThemeSubmission(token, body);
    const createdAt = Date.now();
    const job = {
        id: submissionJobId(profile.id, randomUUID()),
        userId: profile.id,
        createdAt,
        dispatchBefore: createdAt + 120000,
        themeHash: hashJobInput(metadata, payload),
        revision: config.revision,
        repository: `${config.owner}/${config.repo}`,
        rendererTag: config.tag,
        upstream: upstreamState,
    };
    const input = {metadata, payload};
    workflowDispatchBody(job, input);
    return {receipt: await signReceipt(job), input, expiresAt: createdAt + 86400000};
}

async function authenticate(token: string, receipt: unknown) {
    const octokit = createUserOctokit(token);
    const profile = await fetchGithubProfile(octokit);
    const job = await verifyReceipt(receipt, profile.id);
    assertJobConfiguration(job);
    return {octokit, profile, job};
}

export async function dispatchThemeJob(token: string, receipt: unknown, input: ThemeInput) {
    const {job} = await authenticate(token, receipt);
    if (!isJobInputValid(input, job.themeHash)) {
        throw new ReceiptError('receipt-input');
    }
    const ci = createCiOctokit();
    if (await findRun(ci, job)) return {accepted: true};
    if (Date.now() > job.dispatchBefore) throw new ReceiptError('dispatch-expired');
    workflowDispatchBody(job, input);
    await reserveDispatch(ci, job.userId);
    await dispatchRun(ci, job, input);
    return {accepted: true};
}

// No dispatch, quota reservation, fork or PR mutation in status requests.
export async function readThemeJob(token: string, receipt: unknown): Promise<SubmissionEvent> {
    const {job} = await authenticate(token, receipt);
    const ci = createCiOctokit();
    const run = await findRun(ci, job);
    if (!run) {
        if (Date.now() > job.dispatchBefore + 600000) {
            return {type: 'error', code: 'dispatch-unconfirmed', terminal: true};
        }
        return {type: 'step', index: 1, count: 5};
    }
    try {
        const result = await collectResult(ci, {...job, runId: run.id});
        return {type: 'step', index: result ? 3 : 2, count: 5};
    } catch (error) {
        if (error instanceof RendererWorkflowFailedError) {
            return {type: 'error', code: 'preview', terminal: true};
        }
        throw error;
    }
}

export async function finalizeThemeJob(token: string, receipt: unknown): Promise<SubmissionEvent> {
    const {octokit, profile, job} = await authenticate(token, receipt);
    const ci = createCiOctokit();
    const run = await findRun(ci, job);
    if (!run) throw new Error('Workflow not found');
    const result = await collectResult(ci, {...job, runId: run.id});
    if (!result) return {type: 'step', index: 2, count: 5};
    const {metadata, payload} = result.input;
    const fork = await prepareFork(octokit);
    if (fork.owner.toLowerCase() !== profile.login.toLowerCase())
        throw new Error('Fork ownership mismatch');
    const {branch, commitSha} = await commitGalleryFiles({
        octokit,
        fork,
        state: job.upstream,
        metadata,
        files: buildGalleryFiles({metadata, payload, previews: result.previews}),
        jobId: job.id,
    });
    const {data: ref} = await octokit.git.getRef({
        owner: fork.owner,
        repo: fork.repo,
        ref: `heads/${branch}`,
    });
    if (ref.object.sha !== commitSha) throw new Error('Submission branch changed externally');
    const pr = await openPullRequest({
        octokit,
        fork,
        metadata,
        login: profile.login,
        branch,
        commitSha,
    });
    return {type: 'done', pullRequestUrl: pr.url, pullRequestNumber: pr.number};
}
