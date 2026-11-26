import {readFile, writeFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';

const markerPrefix = 'GRAVITY_TRANSLATION_BLOCK_';
const protectedBlock =
    /<!--GITHUB_BLOCK[\s\S]*?\/GITHUB_BLOCK-->|<!--SANDBOX[\s\S]*?SANDBOX-->|<!--LANDING_BLOCK[\s\S]*?LANDING_BLOCK-->|^[ \t]*(?:<!--\/?GITHUB_BLOCK-->|<!--(?:SANDBOX|LANDING_BLOCK)|(?:SANDBOX|LANDING_BLOCK)-->)[ \t]*(?=\r?$)/gm;
const rendererDirective =
    /<!--\/?(?:GITHUB_BLOCK|SANDBOX|LANDING_BLOCK)|(?:SANDBOX|LANDING_BLOCK)-->/;
const marker = (index) => `${markerPrefix}${index}_END`;

export function protectMarkdown(source) {
    if (source.includes(markerPrefix)) {
        throw new Error('README already contains a reserved translation marker');
    }

    const blocks = [];
    const text = source.replace(protectedBlock, (block) => {
        const placeholder = marker(blocks.length);
        blocks.push(block);
        return placeholder;
    });
    if (rendererDirective.test(text)) {
        throw new Error('README contains an unmatched renderer directive');
    }
    return {text, blocks};
}

export function restoreMarkdown(translation, blocks) {
    if (rendererDirective.test(translation)) {
        throw new Error('Translation contains a generated renderer directive');
    }

    const fencedCode = /^ {0,3}(`{3,}|~{3,})[^\n]*\n[\s\S]*?(?:^ {0,3}\1[ \t]*\r?$|(?![\s\S]))/gm;
    if ([...translation.matchAll(fencedCode)].some(([code]) => code.includes(markerPrefix))) {
        throw new Error('Translation put a protected block marker inside a code fence');
    }

    let next = 0;
    const restored = translation.replace(
        /^(GRAVITY_TRANSLATION_BLOCK_\d+_END)(?=\r?$)/gm,
        (placeholder) => {
            if (next >= blocks.length || placeholder !== marker(next)) {
                throw new Error(`Unexpected translation marker: ${placeholder}`);
            }
            return blocks[next++];
        },
    );
    if (next !== blocks.length || restored.includes(markerPrefix)) {
        throw new Error('Translation lost or modified a protected block marker');
    }
    if (!translation.replace(/^\s*GRAVITY_TRANSLATION_BLOCK_\d+_END\s*$/gm, '').trim()) {
        throw new Error('Translation contains no documentation text');
    }
    return restored;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    const [mode, source, destination] = process.argv.slice(2);
    const {text, blocks} = protectMarkdown(await readFile(source, 'utf8'));
    if (mode === 'protect') {
        await writeFile(destination, text);
    } else if (mode === 'restore') {
        const translation = await readFile(destination, 'utf8');
        await writeFile(destination, restoreMarkdown(translation, blocks));
    } else {
        throw new Error(`Unknown Markdown translation command: ${mode}`);
    }
}
