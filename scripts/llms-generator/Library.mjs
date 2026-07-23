import path from 'node:path';

import {cleanMarkdown, parsePackageReadme} from '@gravity-ui/readme-validator';

import {libs} from '../../src/libs.mjs';

import {renderAgentBlock, renderLinks, renderPeerDeps} from './catalog.mjs';
import {
    DOCS_INDEX_PATHS,
    LAST_MAJORS,
    LAST_MINORS,
    NPM_REGISTRY_ORIGIN,
    PATHS,
    SITE_ORIGIN,
    UNPKG_ORIGIN,
} from './constants.mjs';
import {fetchRaw} from './http.mjs';
import {compareVersions} from './library-meta.mjs';

// One instance per package. Resolves its config from src/libs.mjs by id and
// encapsulates all per-library work: metadata accessors, cached network fetches,
// path/URL helpers, and the per-package llms.txt builder.
export class Library {
    constructor(id) {
        const config = libs.find((lib) => lib.id === id);
        if (!config) {
            throw new Error(`[LLMS-GENERATOR] Unknown library id: ${id}`);
        }
        this.config = config;
        this._cache = {};
    }

    static all() {
        return libs.map((lib) => new Library(lib.id));
    }

    // --- synchronous metadata accessors ---
    get id() {
        return this.config.id;
    }
    get title() {
        return this.config.title;
    }
    get npmId() {
        return this.config.npmId;
    }
    get primary() {
        return Boolean(this.config.primary);
    }
    get tags() {
        return this.config.tags;
    }
    get githubId() {
        return this.config.githubId;
    }
    get storybookUrl() {
        return this.config.storybookUrl;
    }
    get changelogUrl() {
        return this.config.changelogUrl;
    }

    // readmeUrl may be a string or {en, ru}; we always target the English readme.
    get readmeUrl() {
        const url = this.config.readmeUrl;
        return typeof url === 'string' ? url : url.en;
    }

    getDescription(descriptions) {
        return (
            descriptions[`description_${this.id}`] || `Documentation for the ${this.title} package.`
        );
    }

    // --- async fetchers (cached on the instance) ---

    // All stable (non-prerelease) versions from the npm registry, semver-descending.
    // Returns [] on failure. As a side effect, caches per-version peerDependencies
    // from the same packument so getPeerDependencies() needs no extra fetch.
    async getAllVersions() {
        if (this._cache.allVersions !== undefined) return this._cache.allVersions;
        let versions = [];
        if (this.npmId) {
            const url = `${NPM_REGISTRY_ORIGIN}/${encodeURIComponent(this.npmId)}`;
            const raw = await fetchRaw(url);
            if (raw) {
                try {
                    const byVersion = JSON.parse(raw).versions || {};
                    versions = Object.keys(byVersion)
                        .filter((v) => !v.includes('-'))
                        .sort(compareVersions);
                    // Stash peerDependencies per version for getPeerDependencies().
                    this._cache.peerDependencies ||= {};
                    for (const v of versions) {
                        const peers = byVersion[v]?.peerDependencies;
                        this._cache.peerDependencies[v] =
                            peers && typeof peers === 'object' ? peers : null;
                    }
                } catch (error) {
                    console.warn(
                        `[LLMS-GENERATOR] Failed to parse npm registry for ${this.id}:`,
                        error.message,
                    );
                }
            }
        }
        this._cache.allVersions = versions;
        return versions;
    }

    // Per-version peerDependencies from the npm packument (extracted in
    // getAllVersions). Returns the {name: range} object, or null when unknown
    // (registry unreachable / the version has no peerDependencies).
    async getPeerDependencies(version) {
        if (this._cache.peerDependencies === undefined) {
            this._cache.peerDependencies = null;
            await this.getAllVersions();
        }
        if (!version) return null;
        return (this._cache.peerDependencies || {})[version] || null;
    }

    async getRecentVersions(limit = 5) {
        const all = await this.getAllVersions();
        return all.slice(0, limit);
    }

    // The newest stable version; falls back to the main-branch package.json version
    // when the registry is unreachable.
    async getLatestVersion() {
        const all = await this.getAllVersions();
        if (all[0]) return all[0];
        return this.getVersion();
    }

    // The concrete versions to generate a per-package llms.txt for:
    //   - all patches of the latest minor (the only place patches are collected),
    //   - the `.0` of each of the last LAST_MINORS minor tracks (older minors →
    //     one version per minor; earliest available patch if `.0` is missing),
    //   - the latest version of each of the last LAST_MAJORS major tracks.
    // Unioned and sorted descending.
    async getTargetVersions() {
        if (this._cache.targetVersions !== undefined) return this._cache.targetVersions;
        const all = await this.getAllVersions();
        const targets = new Set();

        // Group by minor track. all[] is semver-descending, so each track's list
        // is patches-descending (first = newest patch, last = `.0`/earliest).
        const minorTracks = new Map();
        for (const v of all) {
            const [maj, min] = v.split('.');
            const key = `${maj}.${min}`;
            if (!minorTracks.has(key)) minorTracks.set(key, []);
            minorTracks.get(key).push(v);
        }
        const tracks = [...minorTracks.entries()]
            .map(([key, versions]) => ({key, versions}))
            .sort((a, b) => compareVersions(a.key, b.key)); // minor tracks descending

        // 1. All patches of the latest minor.
        if (tracks[0]) {
            for (const v of tracks[0].versions) targets.add(v);
        }

        // 2. `.0` of each of the last LAST_MINORS minor tracks.
        for (const track of tracks.slice(0, LAST_MINORS)) {
            const zero = `${track.key}.0`;
            targets.add(
                track.versions.includes(zero) ? zero : track.versions[track.versions.length - 1],
            );
        }

        // 3. Latest version of each of the last LAST_MAJORS major tracks.
        const latestByMajor = new Map();
        for (const v of all) {
            const maj = v.split('.')[0];
            if (!latestByMajor.has(maj)) latestByMajor.set(maj, v); // all[] is desc
        }
        [...latestByMajor.entries()]
            .sort((a, b) => Number(b[0]) - Number(a[0]))
            .slice(0, LAST_MAJORS)
            .forEach(([, v]) => targets.add(v));

        // Registry unreachable — fall back to whatever the main branch reports.
        if (targets.size === 0) {
            const fallback = await this.getVersion();
            if (fallback) targets.add(fallback);
        }

        this._cache.targetVersions = [...targets].sort(compareVersions);
        return this._cache.targetVersions;
    }

    // Full version string from the package's main-branch package.json (e.g. `7.46.0`).
    // Used only as a fallback when the npm registry is unreachable. Returns null on failure.
    async getVersion() {
        if (this._cache.version !== undefined) return this._cache.version;
        const packageJsonUrl = this.readmeUrl.replace(/\/README(-ru)?\.md$/, '/package.json');
        const raw = await fetchRaw(packageJsonUrl);
        if (!raw) {
            this._cache.version = null;
            return null;
        }
        try {
            const version = JSON.parse(raw).version;
            this._cache.version = typeof version === 'string' ? version : null;
        } catch (error) {
            console.warn(
                `[LLMS-GENERATOR] Failed to parse package.json for ${this.id}:`,
                error.message,
            );
            this._cache.version = null;
        }
        return this._cache.version;
    }

    // Fetch the published per-component INDEX.md from unpkg for a concrete version.
    // Builds ship it under build/docs/ or dist/docs/, so we try both. Returns text or null.
    async getDocsIndex(version) {
        this._cache.docsIndex ||= {};
        this._cache.docsIndexBase ||= {};
        if (this._cache.docsIndex[version] !== undefined) return this._cache.docsIndex[version];
        if (!this.npmId || !version) {
            this._cache.docsIndex[version] = null;
            return null;
        }
        const base = `${UNPKG_ORIGIN}/${this.npmId}@${version}`;
        for (const docPath of DOCS_INDEX_PATHS) {
            const content = await fetchRaw(`${base}/${docPath}`, {silent: true});
            if (content) {
                this._cache.docsIndex[version] = content;
                // Directory the INDEX.md lives in — used to resolve its relative links.
                this._cache.docsIndexBase[version] = `${base}/${path.posix.dirname(docPath)}`;
                return content;
            }
        }
        this._cache.docsIndex[version] = null;
        return null;
    }

    // unpkg directory the INDEX.md for `version` was fetched from, or null.
    getDocsIndexBase(version) {
        return (this._cache.docsIndexBase || {})[version] || null;
    }

    // Rewrite relative markdown links/images to absolute unpkg URLs so they stay
    // resolvable when the file is served from gravity-ui.com. Absolute URLs and
    // anchors are left alone; fenced code blocks are skipped.
    _rewriteRelativeLinks(content, baseUrl) {
        if (!baseUrl) return content;
        const resolver = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
        const isExternal = (href) =>
            /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('#') || href.startsWith('//');
        const rewriteLine = (line) =>
            line.replace(/(!?\[[^\]]*\]\()([^)\s]+)(\))/g, (m, pre, href, post) => {
                if (isExternal(href)) return m;
                try {
                    return `${pre}${new URL(href, resolver).href}${post}`;
                } catch {
                    return m;
                }
            });
        let inFence = false;
        return content
            .split('\n')
            .map((line) => {
                if (/^\s*```/.test(line)) inFence = !inFence;
                return inFence ? line : rewriteLine(line);
            })
            .join('\n');
    }

    // Parse the `## For AI agents` section of the package README via the
    // canonical validator. Degrades field-by-field when not adopted yet.
    async getAiSection() {
        if (this._cache.aiSection !== undefined) return this._cache.aiSection;
        const content = await fetchRaw(this.readmeUrl);
        if (!content) {
            this._cache.aiSection = {
                agentPositioning: null,
                agentProse: null,
                install: null,
                usage: null,
                hasSection: false,
            };
            return this._cache.aiSection;
        }
        const extract = parsePackageReadme(content);
        this._cache.aiSection = {
            ...extract,
            hasSection: extract.agentPositioning !== null || extract.agentProse !== null,
        };
        return this._cache.aiSection;
    }

    // --- path / URL helpers ---

    packageLlmsUrl(version) {
        return `${SITE_ORIGIN}/llms/${this.id}/${version}/llms.txt`;
    }

    packageLlmsRelPath(version) {
        return path.join(PATHS.packagesLlmsDir, this.id, version, 'llms.txt');
    }

    // Stable, version-less alias that always mirrors the latest version's file.
    packageLlmsLatestUrl() {
        return `${SITE_ORIGIN}/llms/${this.id}/llms.txt`;
    }

    packageLlmsLatestRelPath() {
        return path.join(PATHS.packagesLlmsDir, this.id, 'llms.txt');
    }

    // Per-major alias: mirrors the latest generated version within a major line.
    packageLlmsMajorUrl(major) {
        return `${SITE_ORIGIN}/llms/${this.id}/${major}/llms.txt`;
    }

    packageLlmsMajorRelPath(major) {
        return path.join(PATHS.packagesLlmsDir, this.id, String(major), 'llms.txt');
    }

    // --- per-package llms.txt builder ---

    // Banner naming the exact version this file was generated for.
    _versionBanner(version) {
        const target = this.npmId ? `${this.npmId}@${version}` : `version ${version}`;
        return `> Generated for \`${target}\`\n\n`;
    }

    // Brief footnote explaining the versioned URL scheme, so an agent that finds a
    // version mismatch knows to switch to the matching URL.
    _versionFootnote(version) {
        const major = String(version).split('.')[0];
        return [
            '---',
            '',
            `> Docs for \`${this.npmId}@${version}\`. Versioned at: \`${this.packageLlmsUrl(
                version,
            )}\` (exact), \`${this.packageLlmsMajorUrl(
                major,
            )}\` (latest of major ${major}), \`${this.packageLlmsLatestUrl()}\` (latest). If the version installed in the project differs, fetch the matching URL instead.`,
            '',
        ].join('\n');
    }

    // Place a pre-rendered block right after the ## Install section (i.e. before
    // the next heading). When the body has no Install section, place it right
    // after the opening header, before the first ## subsection. peerBlock is '' if
    // there is nothing to insert, in which case the body is returned unchanged.
    _insertAfterInstall(body, peerBlock) {
        if (!peerBlock) return body;
        const installMatch = body.match(/^## Install[^\n]*\n/m);
        let at;
        if (installMatch) {
            const start = installMatch.index + installMatch[0].length;
            const next = body.slice(start).match(/\n(?=#{1,6}\s)/);
            at = next ? start + next.index + 1 : body.length;
        } else {
            const firstSub = body.match(/^## /m);
            at = firstSub ? firstSub.index : body.length;
        }
        return body.slice(0, at) + peerBlock + body.slice(at);
    }

    // When the package ships a published INDEX.md for this version, use it as the
    // authoritative per-component reference (substituting the concrete version for
    // the `**installed**` placeholder). Otherwise fall back to assembling a page
    // from the README's `## For AI agents` section. Either way the file is
    // prefixed with the version it was generated for, includes the package's
    // peerDependencies for this version (after the Install section), and ends
    // with a URL footnote.
    async buildPackageLlms({descriptions, version}) {
        const banner = this._versionBanner(version);
        const footnote = this._versionFootnote(version);
        const docsIndex = await this.getDocsIndex(version);
        const body = docsIndex
            ? `${this._rewriteRelativeLinks(docsIndex, this.getDocsIndexBase(version))
                  .replace(/\*\*installed\*\*/g, `**${version}**`)
                  .trim()}\n`
            : await this._buildAssembledPackageLlms({descriptions});
        const peers = await this.getPeerDependencies(version);
        const bodyWithPeers = this._insertAfterInstall(body, renderPeerDeps(peers));
        return `${banner}${bodyWithPeers}\n${footnote}`;
    }

    async _buildAssembledPackageLlms({descriptions}) {
        const extract = await this.getAiSection();
        const positioning =
            (extract && (extract.agentPositioning || extract.agentProse)) ||
            this.getDescription(descriptions);
        const readmeUrl = this.readmeUrl;

        let out = '';
        out += `# ${this.title}\n\n`;
        out += `> ${positioning.replace(/\s+/g, ' ').trim()}\n`;
        if (this.npmId) {
            out += `>\n> **npm:** \`${this.npmId}\` — check the installed major version in the user's \`package.json\` and read docs matching it.\n`;
        }
        out += '\n';

        if (extract && extract.install) {
            out += `## Install\n\n${cleanMarkdown(extract.install)}\n\n`;
        }
        if (extract && extract.usage) {
            out += `## Usage\n\n${cleanMarkdown(extract.usage)}\n\n`;
        }

        out += renderAgentBlock(extract, readmeUrl);
        out += renderLinks(this, readmeUrl);

        return `${out.trim()}\n`;
    }
}
