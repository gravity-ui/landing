import type {SubmissionErrorCode} from './useThemeSubmission';

export const ERROR_KEYS: Record<SubmissionErrorCode, {title: string; message: string}> = {
    'receipt-expired': {
        title: 'submit_theme_error_receipt_title',
        message: 'submit_theme_error_receipt_message',
    },
    'receipt-invalid': {
        title: 'submit_theme_error_receipt_title',
        message: 'submit_theme_error_receipt_message',
    },
    'dispatch-unconfirmed': {
        title: 'submit_theme_error_receipt_title',
        message: 'submit_theme_error_receipt_message',
    },
    'workflow-input-too-large': {
        title: 'submit_theme_error_invalid_title',
        message: 'submit_theme_error_invalid_message',
    },
    'name-taken': {
        title: 'submit_theme_error_name_taken_title',
        message: 'submit_theme_error_name_taken_message',
    },
    'rate-limit': {
        title: 'submit_theme_error_rate_limit_title',
        message: 'submit_theme_error_rate_limit_message',
    },
    'submissions-busy': {
        title: 'submit_theme_error_rate_limit_title',
        message: 'submit_theme_error_rate_limit_message',
    },
    preview: {
        title: 'submit_theme_error_preview_title',
        message: 'submit_theme_error_preview_message',
    },
    github: {
        title: 'submit_theme_error_github_title',
        message: 'submit_theme_error_github_message',
    },
    invalid: {
        title: 'submit_theme_error_invalid_title',
        message: 'submit_theme_error_invalid_message',
    },
    'invalid-metadata': {
        title: 'submit_theme_error_metadata_title',
        message: 'submit_theme_error_metadata_message',
    },
    storage: {
        title: 'submit_theme_error_storage_title',
        message: 'submit_theme_error_storage_message',
    },
    'sign-in': {
        title: 'submit_theme_error_sign_in_title',
        message: 'submit_theme_error_sign_in_message',
    },
    'fork-outdated': {
        title: 'submit_theme_error_fork_outdated_title',
        message: 'submit_theme_error_fork_outdated_message',
    },
    'session-expired': {
        title: 'submit_theme_error_session_expired_title',
        message: 'submit_theme_error_session_expired_message',
    },
};
