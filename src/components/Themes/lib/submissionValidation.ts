import {MAX_DESCRIPTION_LENGTH, MAX_TAGS, MAX_THEME_NAME_LENGTH} from '../../../api/themes/types';
import type {SubmissionFieldErrors} from '../../../api/themes/types';
import {THEME_TAGS, type ThemeMetadata, type ThemeTag, toThemeId} from '../gallery/schema';

export type {SubmissionDraft, SubmissionFieldErrors} from '../../../api/themes/types';

// The server and form must validate the same normalized text.
const cleanSubmissionText = (value: unknown) =>
    // eslint-disable-next-line no-control-regex
    typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim() : '';

// `takenThemes` is the gallery the form knows; the server checks the live gallery on submit.
export function validateSubmissionDraft(
    value: unknown,
    takenThemes: readonly Pick<ThemeMetadata, 'id' | 'name'>[] = [],
): SubmissionFieldErrors {
    const draft = (value && typeof value === 'object' ? value : {}) as Record<string, unknown>;
    const errors: SubmissionFieldErrors = {};
    const name = cleanSubmissionText(draft.name);
    if (!name) {
        errors.name = 'required';
    } else if (name.length > MAX_THEME_NAME_LENGTH) {
        errors.name = 'too-long';
    } else if (!toThemeId(name)) {
        errors.name = 'invalid-name';
    } else if (
        takenThemes.some(
            (theme) =>
                theme.id === toThemeId(name) ||
                theme.name.trim().toLowerCase() === name.toLowerCase(),
        )
    ) {
        errors.name = 'name-taken';
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
