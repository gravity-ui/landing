import {sha256, validateThemePayload} from './gallery-files';
import type {ThemeInput} from './types';

export const hashJobInput = (metadata: unknown, payload: unknown) =>
    sha256(JSON.stringify({metadata, payload}));

export function isJobInputValid(input: ThemeInput, themeHash: string) {
    return Boolean(
        input &&
            hashJobInput(input.metadata, input.payload) === themeHash &&
            hashJobInput(input.metadata, validateThemePayload(input.payload)) === themeHash,
    );
}
