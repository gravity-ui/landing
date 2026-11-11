import {
    SubmissionValidationError,
    buildGalleryFiles,
    buildThemeMetadata,
    validateThemePayload,
} from './gallery-files';
import {
    ForkOutdatedError,
    commitGalleryFiles,
    isThemeIdTaken,
    openPullRequest,
    prepareFork,
    readUpstreamState,
} from './github-pr';
import {createUserOctokit, fetchGithubProfile, getErrorStatus} from './oauth';
import {renderThemePreviews} from './preview-renderer';
import {reserveSubmissionSlot} from './rate-limit';

export type SubmissionErrorCode =
    | 'name-taken'
    | 'rate-limit'
    | 'github'
    | 'invalid'
    | 'fork-outdated'
    | 'session-expired';

export type SubmissionEvent =
    | {type: 'step'; index: number; count: number}
    | {type: 'done'; pullRequestUrl: string; pullRequestNumber: number}
    | {type: 'error'; code: SubmissionErrorCode; forkUrl?: string};

// Progress steps reported to the form, in order.
const STEPS = ['check', 'render', 'fork', 'commit', 'pull-request'] as const;

class SubmissionError extends Error {
    readonly code: SubmissionErrorCode;

    constructor(code: SubmissionErrorCode) {
        super(code);
        this.name = 'SubmissionError';
        this.code = code;
    }
}

export interface SubmitThemeParams {
    token: string;
    login: string;
    body: unknown;
    /** Origin of this server reachable from the server itself, for the render page. */
    renderBaseUrl: string;
    emit: (event: SubmissionEvent) => void;
}

function mapError(error: unknown): SubmissionErrorCode {
    if (error instanceof SubmissionError) {
        return error.code;
    }
    if (error instanceof SubmissionValidationError) {
        return 'invalid';
    }
    // The user revoked the app or the token expired: they have to sign in again.
    if (getErrorStatus(error) === 401) {
        return 'session-expired';
    }
    // eslint-disable-next-line no-console
    console.error('Theme submission failed:', error);
    return 'github';
}

export async function submitTheme({token, login, body, renderBaseUrl, emit}: SubmitThemeParams) {
    const step = (name: (typeof STEPS)[number]) =>
        emit({type: 'step', index: STEPS.indexOf(name), count: STEPS.length});

    let slot: ReturnType<typeof reserveSubmissionSlot> = null;
    try {
        step('check');
        const {meta, theme} = (body ?? {}) as {meta?: unknown; theme?: unknown};
        const octokit = createUserOctokit(token);
        const profile = await fetchGithubProfile(octokit);
        const metadata = buildThemeMetadata(meta, profile);
        const payload = validateThemePayload(theme);

        const upstreamState = await readUpstreamState(octokit);
        if (await isThemeIdTaken(octokit, upstreamState, metadata.id)) {
            throw new SubmissionError('name-taken');
        }

        slot = reserveSubmissionSlot(login);
        if (!slot) {
            throw new SubmissionError('rate-limit');
        }

        step('render');
        const previews = await renderThemePreviews(payload, renderBaseUrl);
        const files = buildGalleryFiles({
            metadata,
            payload,
            previews,
            upstream: upstreamState.snapshot,
        });

        step('fork');
        const fork = await prepareFork(octokit);

        step('commit');
        const {branch, commitSha} = await commitGalleryFiles({
            octokit,
            fork,
            state: upstreamState,
            metadata,
            files,
        });

        step('pull-request');
        const pullRequest = await openPullRequest({
            octokit,
            fork,
            metadata,
            login: profile.login,
            branch,
            commitSha,
        });

        slot = null;
        emit({
            type: 'done',
            pullRequestUrl: pullRequest.url,
            pullRequestNumber: pullRequest.number,
        });
    } catch (error) {
        slot?.release();
        if (error instanceof ForkOutdatedError) {
            emit({type: 'error', code: 'fork-outdated', forkUrl: error.forkUrl});
            return;
        }
        emit({type: 'error', code: mapError(error)});
    }
}
