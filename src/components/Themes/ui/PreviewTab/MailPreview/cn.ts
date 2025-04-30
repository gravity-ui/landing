export function getBlockName(blockName?: string) {
    return `mail-preview${blockName ? '-' + blockName : ''}`;
}
