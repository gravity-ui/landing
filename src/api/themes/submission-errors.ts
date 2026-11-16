import {WorkflowInputTooLargeError} from './ci';
import {SubmissionMetadataError, SubmissionValidationError} from './gallery-files';
import {ForkOutdatedError} from './github-pr';
import {getErrorStatus} from './oauth';
import {ReceiptError} from './receipt';
import type {SubmissionFailure} from './types';

export class ThemeNameTakenError extends Error {}

export function submissionError(error: unknown): SubmissionFailure {
    if (error instanceof WorkflowInputTooLargeError) return {code: 'workflow-input-too-large'};
    if (error instanceof ReceiptError)
        return {
            code:
                error.message === 'receipt-expired' || error.message === 'dispatch-expired'
                    ? 'receipt-expired'
                    : 'receipt-invalid',
        };
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
