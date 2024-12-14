// import type {Completion} from '@gravity-ui/markdown-editor/cm/autocomplete';
import type {MarkdownEditorMarkupConfig} from '@gravity-ui/markdown-editor';

// emoji data from https://github.com/gravity-ui/markdown-editor/blob/main/src/bundle/emoji.ts
export type EmojiDefs = Record<string, string>;

// how to connect to editor: https://github.com/gravity-ui/markdown-editor/blob/dac5314615c3808a086ba33ebe19b0063fdb6ffd/src/bundle/types.ts#L130

export function buildEmojiSuggestLanguageData(
    _emojiDefs: EmojiDefs,
): NonNullable<MarkdownEditorMarkupConfig['languageData']> {
    // todo: implement autocompletion for emoji suggest
    // see example https://github.com/gravity-ui/markdown-editor/blob/dac5314615c3808a086ba33ebe19b0063fdb6ffd/src/markup/codemirror/yfm.ts#L94

    return [];
}
