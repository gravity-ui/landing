import {MAX_DESCRIPTION_LENGTH, MAX_TAGS, MAX_THEME_NAME_LENGTH} from '../../../api/themes/config';
import {THEME_TAGS, type ThemeTag, toThemeId} from '../gallery/schema';

export interface SubmissionDraft {
    name: string;
    descriptionEn: string;
    descriptionRu: string;
    tags: ThemeTag[];
}

export type SubmissionFieldErrors = Partial<
    Record<keyof SubmissionDraft, 'required' | 'too-long' | 'invalid-name' | 'invalid-tags'>
>;

// The server and form must validate the same normalized text.
export const cleanSubmissionText = (value: unknown) =>
    // eslint-disable-next-line no-control-regex
    typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim() : '';

export function validateSubmissionDraft(value: unknown): SubmissionFieldErrors {
    const draft = (value && typeof value === 'object' ? value : {}) as Record<string, unknown>;
    const errors: SubmissionFieldErrors = {};
    const name = cleanSubmissionText(draft.name);
    if (!name) {
        errors.name = 'required';
    } else if (name.length > MAX_THEME_NAME_LENGTH) {
        errors.name = 'too-long';
    } else if (!toThemeId(name)) {
        errors.name = 'invalid-name';
    }
    for (const field of ['descriptionEn', 'descriptionRu'] as const) {
        const text = cleanSubmissionText(draft[field]);
        if (field === 'descriptionEn' && !text) {
            errors[field] = 'required';
        } else if (text.length > MAX_DESCRIPTION_LENGTH) {
            errors[field] = 'too-long';
        }
    }
    if (
        !Array.isArray(draft.tags) ||
        draft.tags.length > MAX_TAGS ||
        !draft.tags.every((tag) => THEME_TAGS.includes(tag as ThemeTag))
    ) {
        errors.tags = 'invalid-tags';
    }
    return errors;
}
