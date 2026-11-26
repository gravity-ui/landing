import assert from 'node:assert/strict';
import test from 'node:test';

import {protectMarkdown, restoreMarkdown} from './translation-markdown.mjs';

const source = [
    '<!--GITHUB_BLOCK-->\n# Accordion\n<!--/GITHUB_BLOCK-->',
    'Expandable panels',
    '<!--SANDBOX\nexport default function () { return <Accordion/>; }\nSANDBOX-->',
    '<!--LANDING_BLOCK\n<ExampleBlock />\nLANDING_BLOCK-->',
].join('\n\n');

test('keeps renderer directives and executable examples out of the translation input', () => {
    const {text, blocks} = protectMarkdown(source);
    assert.equal(blocks.length, 3);
    assert.doesNotMatch(text, /Accordion|ExampleBlock|<!--/);

    const translated = text.replace('Expandable panels', '折りたたみ可能なパネル');
    assert.equal(
        restoreMarkdown(translated, blocks),
        source.replace('Expandable panels', '折りたたみ可能なパネル'),
    );
});

test('rejects missing, duplicated, reordered, or decorated placeholders', () => {
    const {text, blocks} = protectMarkdown(source);
    const first = 'GRAVITY_TRANSLATION_BLOCK_0_END';
    const second = 'GRAVITY_TRANSLATION_BLOCK_1_END';
    for (const malformed of [
        text.replace(first, ''),
        text.replace(first, `${first}\n${first}`),
        text.replace(first, second),
        text.replace(first, '`' + first + '`'),
        text.replace(first, '```md\n' + first + '\n```'),
        text + '\n<!--/GITHUB_BLOCK-->',
    ]) {
        assert.throws(() => restoreMarkdown(malformed, blocks), /marker|directive/);
    }
    assert.throws(() => protectMarkdown('Inline <!--/GITHUB_BLOCK-->'), /unmatched/);
});

test('preserves an existing standalone unpaired directive in the upstream README', () => {
    const upstream = 'File preview\n\n<!--GITHUB_BLOCK-->\n\n## Properties';
    const {text, blocks} = protectMarkdown(upstream);
    assert.equal(restoreMarkdown(text, blocks), upstream);
});
