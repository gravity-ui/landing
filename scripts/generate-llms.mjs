import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {libs} from '../src/libs.mjs';

const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));
const LLMS_TXT_PATH = path.join(ROOT_DIR, '../public/llms.txt');
const LIBRARIES_INFO_PATH = path.join(ROOT_DIR, '../public/locales/en/libraries-info.json');
const UIKIT_COMPONENTS_DIR = path.join(ROOT_DIR, '../src/content/components/uikit');

const TARGET_PROFILE = 'gravity-ui';

const categorizeLibrary = (lib) => {
    if (lib.tags.includes('infrastructure')) return 'Infrastructure';
    if (lib.tags.includes('nodejs')) return 'Node.js';
    if (lib.tags.includes('ai')) return 'AI';
    return 'UI Components';
};

const loadLibraryDescriptions = async () => {
    try {
        const content = await fs.readFile(LIBRARIES_INFO_PATH, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.warn('Failed to load library descriptions:', error.message);
        return {};
    }
};

const getUikitComponents = async () => {
    try {
        const entries = await fs.readdir(UIKIT_COMPONENTS_DIR, {withFileTypes: true});
        const components = entries
            .filter((entry) => entry.isDirectory() && entry.name !== 'examples')
            .map((entry) => entry.name)
            .sort();
        return components;
    } catch (error) {
        console.warn('Failed to load uikit components:', error.message);
        return [];
    }
};

const getComponentReadmeUrl = (componentName) => {
    const baseUrl = `https://raw.githubusercontent.com/${TARGET_PROFILE}/uikit/refs/heads/main/src/components/${componentName}`;
    return `${baseUrl}/README.md`;
};

const getComponentDescription = async (componentName) => {
    try {
        const url = getComponentReadmeUrl(componentName);
        const res = await fetch(url, {signal: AbortSignal.timeout(3000)});
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const content = await res.text();
        const lines = content.split('\n');

        let inCodeBlock = false;

        for (const line of lines) {
            const trimmed = line.trim();

            if (trimmed.startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                continue;
            }

            if (inCodeBlock) continue;

            if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('!')) {
                const cleaned = trimmed
                    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                    .replace(/`([^`]+)`/g, '$1')
                    .replace(/<[^>]+>/g, '')
                    .replace(/\*\*/g, '')
                    .replace(/\*/g, '')
                    .replace(/!/g, '')
                    .replace(/\|/g, '')
                    .replace(/^-/g, '')
                    .trim();
                if (cleaned.length > 10 && !cleaned.startsWith('npm')) {
                    const tempCleaned = cleaned
                        .replace(/\bi\.e\./g, '___IE___')
                        .replace(/\bi\.e,/g, '___IE___')
                        .replace(/\be\.g\./g, '___EG___')
                        .replace(/\be\.g,/g, '___EG___');
                    const tempFirstSentence = tempCleaned.split('.')[0] + '.';
                    const firstSentence = tempFirstSentence
                        .replace(/___IE___/g, 'i.e.')
                        .replace(/___EG___/g, 'e.g.');
                    return firstSentence;
                }
            }
        }
    } catch (error) {
        return '';
    }
    return '';
};

const generateLlmsTxt = async () => {
    console.log('[LLMS-GENERATOR] Starting llms.txt generation');

    const descriptions = await loadLibraryDescriptions();
    const uikitComponents = await getUikitComponents();

    const componentDescriptions = {};
    const componentPromises = uikitComponents.map(async (component) => {
        const desc = await getComponentDescription(component);
        return {component, desc};
    });

    const results = await Promise.all(componentPromises);
    for (const {component, desc} of results) {
        if (desc) {
            componentDescriptions[component] = desc;
        }
    }

    const categories = {};

    for (const lib of libs) {
        const category = categorizeLibrary(lib);
        if (!categories[category]) {
            categories[category] = [];
        }

        const readmeUrl = typeof lib.readmeUrl === 'string' ? lib.readmeUrl : lib.readmeUrl['en'];
        const githubUrl = lib.githubId ? `https://github.com/${lib.githubId}` : readmeUrl;
        const description =
            descriptions[`description_${lib.id}`] || `Documentation for ${lib.title}`;

        categories[category].push({
            lib,
            url: readmeUrl,
            githubUrl,
            description,
            components: lib.id === 'uikit' ? uikitComponents : [],
            componentDescriptions,
        });
    }

    let index = `# Gravity UI - LLM Documentation\n\n`;
    index += `This index links to Gravity UI library documentation on GitHub.\n`;
    index += `Each link points to the library's README.md file.\n\n`;
    index += `**Last updated:** ${new Date().toISOString().split('T')[0]}\n\n`;
    index += `**Main website:** [https://gravity-ui.com](https://gravity-ui.com)\n\n`;

    for (const [category, docs] of Object.entries(categories)) {
        index += `## ${category}\n\n`;
        const sortedDocs = docs.sort((a, b) => {
            if (a.lib.primary && !b.lib.primary) return -1;
            if (!a.lib.primary && b.lib.primary) return 1;
            return a.lib.title.localeCompare(b.lib.title);
        });

        for (const doc of sortedDocs) {
            const primary = doc.lib.primary ? ' (Primary)' : '';
            index += `### ${doc.lib.title}${primary}\n\n`;
            index += `${doc.description}\n\n`;

            if (doc.lib.npmId) {
                index += `- **npm:** \`${doc.lib.npmId}\`\n`;
            }

            if (doc.githubUrl !== doc.url) {
                index += `- **GitHub:** [${doc.lib.githubId}](${doc.githubUrl})\n`;
            }

            index += `- **Documentation:** [README](${doc.url})\n`;

            if (doc.components.length > 0) {
                index += `- **Components:**\n`;
                for (const component of doc.components) {
                    const readmeUrl = getComponentReadmeUrl(component);
                    const componentDesc = doc.componentDescriptions[component] || '';
                    if (componentDesc) {
                        index += `  - [${component}](${readmeUrl}): ${componentDesc}\n`;
                    } else {
                        index += `  - [${component}](${readmeUrl})\n`;
                    }
                }
            }
            index += '\n';
        }
        index += '\n';
    }

    await fs.writeFile(LLMS_TXT_PATH, index);

    console.log(`[LLMS-GENERATOR] Generated llms.txt with ${libs.length} libraries`);
    console.log(`[LLMS-GENERATOR] UIKit components: ${uikitComponents.length}`);
    console.log(`[LLMS-GENERATOR] Saved to: ${LLMS_TXT_PATH}`);
};

generateLlmsTxt();
