import type {SubmissionFieldErrors} from '../../components/Themes/lib/submissionValidation';

export type SubmissionErrorCode =
    | 'receipt-expired'
    | 'receipt-invalid'
    | 'dispatch-unconfirmed'
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
    | {type: 'step'; index: number; count: number}
    | {type: 'done'; pullRequestUrl: string; pullRequestNumber: number}
    | ({type: 'error'; terminal?: boolean} & SubmissionFailure);

export type SubmissionPreflightResult = {ok: true} | ({ok: false} & SubmissionFailure);
