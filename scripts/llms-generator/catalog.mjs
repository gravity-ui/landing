import {cleanMarkdown} from '@gravity-ui/readme-validator';

// Render the agent-facing block, degrading gracefully based on what the
// package's README `## For AI agents` section provided.
export const renderAgentBlock = (extract, readmeUrl) => {
    if (extract && extract.agentProse) {
        return `${cleanMarkdown(extract.agentProse)}\n\n`;
    }
    if (extract && extract.agentPositioning) {
        return `> The positioning paragraph above is the only agent-facing guidance available; see the [README](${readmeUrl}) for full details.\n\n`;
    }
    return `> Note: this package's README does not yet have a \`## For AI agents\` section. See the [README](${readmeUrl}) for full documentation.\n\n`;
};

export const renderLinks = (library, readmeUrl) => {
    let out = `## Links\n\n- [README](${readmeUrl})\n`;
    if (library.storybookUrl) out += `- [Storybook](${library.storybookUrl})\n`;
    if (library.changelogUrl) out += `- [Changelog](${library.changelogUrl})\n`;
    if (library.githubId) out += `- [GitHub](https://github.com/${library.githubId})\n`;
    return out;
};

// From a package's agent prose, pull only the named `###` subsections (e.g.
// "When to use", "When not to use"), dropping the rest (Common pitfalls, Useful
// docs, lead-in text). Headings are bumped one level to nest under `###`.
const ROOT_AI_SECTIONS = ['When to use', 'When not to use'];
const extractAiSections = (prose, titles) => {
    const keep = new Set(titles.map((t) => t.toLowerCase()));
    const sections = cleanMarkdown(prose)
        .split(/^(?=#{1,6}\s)/m)
        .filter((block) => {
            const heading = block.match(/^#{1,6}\s+(.+?)\s*$/m);
            return heading && keep.has(heading[1].trim().toLowerCase());
        });
    return sections
        .map((s) => s.trim().replace(/^(#{1,5})\s/gm, '$1# '))
        .join('\n\n')
        .trim();
};

// Compact routable catalog: lists every library (primary first), each linking
// to its per-package llms.txt.
export const buildRootLlms = async ({libraries, descriptions}) => {
    const sorted = [...libraries].sort((a, b) => {
        if (a.primary && !b.primary) return -1;
        if (!a.primary && b.primary) return 1;
        return a.title.localeCompare(b.title);
    });

    let out = '';
    out += `# Gravity UI\n\n`;
    out += `Gravity UI is a open-source design system and ecosystem of React libraries for building web applications. This file is a compact catalog: pick a package, then fetch its per-package llms.txt for the full agent-facing docs. Read the user's \`package.json\` first and match the installed \`@gravity-ui/*\` versions — peer-version mismatches across the ecosystem are the most common failure.\n\n`;
    out += `> **\`@gravity-ui/uikit\` MUST be installed in every Gravity UI project.** It is the base component and design-token library that every other \`@gravity-ui/*\` package builds on — without it, components render unstyled. Check the user's \`package.json\` first.\n`;
    out += `>\n`;
    out += `> **If it is not installed, stop and have the user install and configure it before doing anything else.** Setup and theming instructions: https://gravity-ui.com/llms/uikit/llms.txt\n\n`;
    out += `> **Per-package docs are versioned.** Each package lives at \`/llms/<package>/<version>/llms.txt\` (exact version), \`/llms/<package>/<major>/llms.txt\` (latest of a major line), and \`/llms/<package>/llms.txt\` (latest). The links below point at \`latest\` — read the user's \`package.json\` and switch the URL to the installed version (or major) when it differs.\n\n`;
    out += `> **Agent skill recommended.** A \`gravity-ui\` skill is available that helps route to the correct package and avoid common API mistakes. Consider installing it when working with Gravity UI:\n`;
    out += `>\n`;
    out += `> \`\`\`bash\n`;
    out += `npx skills add gravity-ui/skills\n`;
    out += `> \`\`\`\n`;
    out += `>\n`;
    out += `> It can help with tasks involving \`@gravity-ui/*\` imports, \`ThemeProvider\`, or \`--g-\` CSS tokens. Details: https://github.com/gravity-ui/skills\n\n`;

    for (const library of sorted) {
        const extract = await library.getAiSection();
        const primary = library.primary ? ' (primary)' : '';
        const url = library.packageLlmsLatestUrl();
        out += `## ${library.title}${primary} — \`${library.npmId}\`\n\n`;
        out += `> If you need this library, read more at package [llms.txt](${url})\n`;

        if (library.githubId) {
            out += `> GitHub: [${library.githubId}](https://github.com/${library.githubId})\n`;
        }

        out += '\n';

        // Keep only the positioning line plus the "When to use" / "When not to
        // use" subsections from the agent prose; the rest lives in the
        // per-package llms.txt. Subsection headings bump one level (under `###`).
        let body = '';
        if (extract && extract.agentPositioning) {
            body += `${cleanMarkdown(extract.agentPositioning).trim()}\n\n`;
        }
        if (extract && extract.agentProse) {
            const sections = extractAiSections(extract.agentProse, ROOT_AI_SECTIONS);
            if (sections) {
                body += `${sections}\n\n`;
            }
        }
        if (!body) {
            body = `${cleanMarkdown(library.getDescription(descriptions)).trim()}\n\n`;
        }
        out += body;
    }

    return `${out.trim()}\n`;
};

export const buildFullLlms = (rootText, packageTexts) => {
    return [rootText, ...packageTexts].join('\n\n---\n\n').trim() + '\n';
};
