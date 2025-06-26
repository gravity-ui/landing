export const fetchChangelogInfo = async (changelogUrl: string): Promise<string> => {
    if (!changelogUrl) return '';

    const headers: Record<string, string> = {'User-Agent': 'request'};
    if (process.env.GITHUB_TOKEN) {
        headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    try {
        const response = await fetch(changelogUrl, {
            headers,
        });
        if (response.ok) {
            return await response.text();
        }
    } catch (err) {
        console.error(err);
    }

    return '';
};
