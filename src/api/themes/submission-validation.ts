import {WorkflowInputTooLargeError} from './ci';
import {
    SubmissionMetadataError,
    SubmissionValidationError,
    buildThemeMetadata,
    validateThemePayload,
} from './gallery-files';
import {ForkOutdatedError, isThemeNameTaken, readUpstreamState} from './github-pr';
import {createUserOctokit, fetchGithubProfile, getErrorStatus} from './oauth';
import {ReceiptError} from './receipt';
import type {SubmissionFailure} from './types';

class ThemeNameTakenError extends Error {}

// Both preflight and submit read a fresh upstream snapshot. No writes or rate-limit slots.
export async function validateThemeSubmission(token: string, body: unknown) {
    const {meta, theme} = (body ?? {}) as {meta?: unknown; theme?: unknown};
    const octokit = createUserOctokit(token);
    const profile = await fetchGithubProfile(octokit);
    const metadata = buildThemeMetadata(meta, profile);
    const payload = validateThemePayload(theme);
    const upstreamState = await readUpstreamState(octokit);
    if (await isThemeNameTaken(octokit, upstreamState, metadata)) {
        throw new ThemeNameTakenError();
    }
    return {octokit, profile, metadata, payload, upstreamState};
}

export function submissionValidationError(error: unknown): SubmissionFailure {
    if (error instanceof WorkflowInputTooLargeError) return {code: 'workflow-input-too-large'};
    if (error instanceof ReceiptError)
        return {code: error.message === 'receipt-expired' ? 'receipt-expired' : 'receipt-invalid'};
    if (error instanceof ForkOutdatedError) return {code: 'fork-outdated', forkUrl: error.forkUrl};
    if (error instanceof Error && error.message === 'rate-limit') return {code: 'rate-limit'};
    if (error instanceof ThemeNameTakenError) {
        return {code: 'name-taken'};
    }
    if (error instanceof SubmissionMetadataError) {
        return {code: 'invalid-metadata', fields: error.fields};
    }
    if (error instanceof SubmissionValidationError) {
        return {code: 'invalid'};
    }
    if (getErrorStatus(error) === 401) {
        return {code: 'session-expired'};
    }
    return {code: 'github'};
}
