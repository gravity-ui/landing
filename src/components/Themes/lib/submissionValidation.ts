import {
    cleanSubmissionText,
    validateSubmissionDraft as validateBaseSubmissionDraft,
} from '@gravity-ui/themes/draft';

import type {SubmissionFieldErrors} from '../../../api/themes/types';
import {type ThemeMetadata, toThemeId} from '../gallery/schema';

export type {SubmissionDraft, SubmissionFieldErrors} from '../../../api/themes/types';

// `takenThemes` is the gallery the form knows; the server checks the live gallery on submit.
export function validateSubmissionDraft(
    value: unknown,
    takenThemes: readonly Pick<ThemeMetadata, 'id' | 'name'>[] = [],
): SubmissionFieldErrors {
    const errors: SubmissionFieldErrors = validateBaseSubmissionDraft(value);
    if (!errors.name) {
        const draft = value as Record<string, unknown>;
        const name = cleanSubmissionText(draft.name);
        if (
            takenThemes.some(
                (theme) =>
                    theme.id === toThemeId(name) ||
                    theme.name.trim().toLowerCase() === name.toLowerCase(),
            )
        ) {
            errors.name = 'name-taken';
        }
    }
    return errors;
}
