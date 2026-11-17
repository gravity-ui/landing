import {InvalidRunIdError, WorkflowInputTooLargeError} from './ci';
import {SubmissionMetadataError, SubmissionValidationError} from './gallery-files';
import {ForkOutdatedError} from './github-pr';
import {UserSessionExpiredError} from './oauth';
import {QuotaSearchExhaustedError} from './quota';
import {ReceiptError} from './receipt';
import {ThemeNameTakenError} from './submission-validation';
import type {SubmissionFailure} from './types';

export function submissionError(error: unknown): SubmissionFailure {
    if (error instanceof WorkflowInputTooLargeError) {
        return {code: 'workflow-input-too-large'};
    }
    if (error instanceof InvalidRunIdError) {
        return {code: 'run-invalid'};
    }
    if (error instanceof ReceiptError) {
        return {
            code:
                error.message === 'receipt-expired' || error.message === 'dispatch-expired'
                    ? 'receipt-expired'
                    : 'receipt-invalid',
        };
    }
    if (error instanceof ForkOutdatedError) {
        return {code: 'fork-outdated', forkUrl: error.forkUrl};
    }
    if (error instanceof Error && error.message === 'rate-limit') {
        return {code: 'rate-limit'};
    }
    if (error instanceof QuotaSearchExhaustedError) {
        return {code: 'submissions-busy'};
    }
    if (error instanceof ThemeNameTakenError) {
        return {code: 'name-taken'};
    }
    if (error instanceof SubmissionMetadataError) {
        return {code: 'invalid-metadata', fields: error.fields};
    }
    if (error instanceof SubmissionValidationError) {
        return {code: 'invalid'};
    }
    if (error instanceof UserSessionExpiredError) {
        return {code: 'session-expired'};
    }
    // Unexpected failures reach the user as a generic GitHub error; keep the cause for the operators.
    console.error('Theme submission failed:', error);
    return {code: 'github'};
}
