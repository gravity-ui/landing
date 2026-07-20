// Compare two semver-ish version strings; prerelease/parse-failures sort last.
export const compareVersions = (a, b) => {
    const parse = (v) => {
        const [main] = String(v).split('-');
        const parts = main.split('.').map((n) => Number.parseInt(n, 10));
        if (parts.some((n) => Number.isNaN(n))) return null;
        return parts;
    };
    const pa = parse(a);
    const pb = parse(b);
    if (!pa || !pb) {
        if (!pa && !pb) return 0;
        return pa ? -1 : 1;
    }
    for (let i = 0; i < 3; i += 1) {
        const da = pa[i] ?? 0;
        const db = pb[i] ?? 0;
        if (da !== db) return db - da; // descending
    }
    const ap = String(a).includes('-');
    const bp = String(b).includes('-');
    if (ap !== bp) return ap ? 1 : -1; // prereleases last
    return 0;
};
