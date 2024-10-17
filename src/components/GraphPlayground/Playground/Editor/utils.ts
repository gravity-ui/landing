import {TBlockId} from '@gravity-ui/graph';
import {editor} from 'monaco-editor';

export function findBlockPositionsMonaco(model: editor.ITextModel, blockId: TBlockId) {
    const configString = model.getValue();
    const blockSearchStr = `"id": "${String(blockId)}"`;
    const startIndex = configString.indexOf(blockSearchStr);

    const blockStart = configString.lastIndexOf('{', startIndex);
    let blockEnd = configString.indexOf('}', startIndex);

    let braceCount = 1;
    let currentPos = blockEnd + 1;
    while (braceCount > 0 && currentPos < configString.length) {
        if (configString[currentPos] === '{') {
            braceCount++;
        } else if (configString[currentPos] === '}') {
            braceCount--;
        }
        currentPos++;
    }
    blockEnd = currentPos;

    const startPosition = model.getPositionAt(blockStart);
    const endPosition = model.getPositionAt(blockEnd);

    return {
        start: startPosition,
        end: endPosition,
    };
}
