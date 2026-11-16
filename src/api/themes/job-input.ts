import {createHash} from 'crypto';

import {validateThemePayload} from './gallery-files';
import type {ThemeInput} from './types';

export const hashJobInput = (metadata: unknown, payload: unknown) =>
    createHash('sha256').update(JSON.stringify({metadata, payload})).digest('hex');

export function isJobInputValid(input: ThemeInput, themeHash: string) {
    return Boolean(
        input &&
            hashJobInput(input.metadata, input.payload) === themeHash &&
            hashJobInput(input.metadata, validateThemePayload(input.payload)) === themeHash,
    );
}
