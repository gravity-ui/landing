import {
    parseInternalPrivateColorReference,
    parseInternalUtilityColorReference,
} from '@gravity-ui/uikit-themer';

import type {SemanticColorGroup} from '../../hooks/useThemeSemanticColorOption';

import type {BaseColor, ColorGroup} from './types';

export const getColorFromUtilityColor = (color: string, groups: SemanticColorGroup['groups']) => {
    const tokenName = parseInternalUtilityColorReference(color);
    let semanticItem: BaseColor | undefined;

    groups.forEach((nestedGroup) =>
        nestedGroup.items.forEach((item) => {
            if (item.name === tokenName) {
                semanticItem = item;
                return;
            }
        }),
    );

    return semanticItem;
};

export const getColorFromPrivateColor = (color: string, privateGroups: ColorGroup[]) => {
    const parsedPrivateColorToken = parseInternalPrivateColorReference(color);

    if (parsedPrivateColorToken) {
        const {mainColorToken} = parsedPrivateColorToken;

        return privateGroups
            .find((group) => group.token === mainColorToken)
            ?.privateColors.find((privateColor) => privateColor.token === color);
    }

    return undefined;
};
