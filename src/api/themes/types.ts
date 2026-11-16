import type {ThemeMetadata, ThemePayload, ThemeTag} from '../../components/Themes/gallery/schema';

export const MAX_THEME_NAME_LENGTH = 40;
export const MAX_DESCRIPTION_LENGTH = 200;
export const MAX_TAGS = 3;

export interface ThemeInput {
    metadata: ThemeMetadata;
    payload: ThemePayload;
}

export interface SubmissionDraft {
    name: string;
    descriptionEn: string;
    descriptionRu: string;
    tags: ThemeTag[];
}

export type SubmissionFieldErrors = Partial<
    Record<
        keyof SubmissionDraft,
        'required' | 'too-long' | 'invalid-name' | 'name-taken' | 'invalid-tags'
    >
>;

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
