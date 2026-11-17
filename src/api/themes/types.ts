import type {SubmissionFieldErrors as BaseSubmissionFieldErrors} from '@gravity-ui/themes/draft';

import type {ThemeMetadata, ThemePayload} from '../../components/Themes/gallery/schema';

export type {SubmissionDraft} from '@gravity-ui/themes/draft';

export const MAX_THEME_NAME_LENGTH = 40;
export const MAX_DESCRIPTION_LENGTH = 200;
export const MAX_TAGS = 3;

export interface ThemeInput {
    metadata: ThemeMetadata;
    payload: ThemePayload;
}

export type SubmissionFieldErrors = Omit<BaseSubmissionFieldErrors, 'name'> & {
    name?: BaseSubmissionFieldErrors['name'] | 'name-taken';
};

export type SubmissionErrorCode =
    | 'receipt-expired'
    | 'receipt-invalid'
    | 'dispatch-unconfirmed'
    // The client-supplied run id is malformed or not this job's run: drop it and search again.
    | 'run-invalid'
    | 'workflow-input-too-large'
    | 'name-taken'
    | 'rate-limit'
    | 'github'
    | 'preview'
    | 'invalid'
    | 'invalid-metadata'
    | 'fork-outdated'
    | 'session-expired';

export interface SubmissionFailure {
    code: SubmissionErrorCode;
    forkUrl?: string;
    fields?: SubmissionFieldErrors;
}

export type SubmissionEvent =
    // runId is set once the workflow run is found; later status and finalize calls send it back.
    | {type: 'step'; index: number; count: number; runId?: number}
    | {type: 'done'; pullRequestUrl: string; pullRequestNumber: number}
    | ({type: 'error'; terminal?: boolean} & SubmissionFailure);

export const SUBMIT_RETURN_PARAM = 'submitTheme';
// Added to the return path when GitHub let the user in but the token exchange failed.
export const SIGN_IN_FAILED_PARAM = 'signInFailed';

export const SUBMISSION_STEP = {sending: 0, waiting: 1, rendering: 2, pullRequest: 3} as const;
export const SUBMISSION_STEP_COUNT = 5;
