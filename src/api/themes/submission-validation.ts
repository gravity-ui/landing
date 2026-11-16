import {buildThemeMetadata, validateThemePayload} from './gallery-files';
import {isThemeNameTaken, readUpstreamState} from './github-pr';
import {
    UserSessionExpiredError,
    createUserOctokit,
    fetchGithubProfile,
    getErrorStatus,
} from './oauth';
import {ThemeNameTakenError} from './submission-errors';

// Submit reads a fresh upstream snapshot. No writes or rate-limit slots.
export async function validateThemeSubmission(token: string, body: unknown) {
    const {meta, theme} = (body ?? {}) as {meta?: unknown; theme?: unknown};
    const octokit = createUserOctokit(token);
    try {
        const profile = await fetchGithubProfile(octokit);
        const metadata = buildThemeMetadata(meta, profile);
        const payload = validateThemePayload(theme);
        const upstreamState = await readUpstreamState(octokit);
        if (await isThemeNameTaken(octokit, upstreamState, metadata)) {
            throw new ThemeNameTakenError();
        }
        return {octokit, profile, metadata, payload, upstreamState};
    } catch (error) {
        if (getErrorStatus(error) === 401) throw new UserSessionExpiredError();
        throw error;
    }
}
