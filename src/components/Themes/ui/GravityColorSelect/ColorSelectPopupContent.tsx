import {Divider, Text} from '@gravity-ui/uikit';
import {
    type UtilityColor,
    isInternalUtilityColorReference,
    parseInternalPrivateColorReference,
    parseInternalUtilityColorReference,
} from '@gravity-ui/uikit-themer';
import React, {Fragment} from 'react';

import {block} from '../../../../utils';
import type {SemanticColorGroup} from '../../hooks/useThemeSemanticColorOption';

import './ColorSelectPopupContent.scss';
import {
    PrivateColorsList,
    SemanticGroupColorsList,
    SemanticGroupList,
} from './ColorSelectPopupContentItems';
import type {ColorGroup} from './types';

const b = block('private-colors-select-popup');

interface ColorSelectPopupContentProps {
    privateGroups: ColorGroup[];
    semanticGroups?: SemanticColorGroup[];
    value?: string;
    onChange: (token: string, ref?: string) => void;
    version?: 'mobile' | 'desktop';
}

export const ColorSelectPopupContent = ({
    value,
    privateGroups,
    semanticGroups,
    onChange,
    version = 'desktop',
}: ColorSelectPopupContentProps) => {
    const colorsRef = React.useRef<HTMLDivElement>(null);
    const isUtilityColor = isInternalUtilityColorReference(value);

    const [currentGroupToken, setCurrentGroupToken] = React.useState<string | undefined>(() => {
        if (isUtilityColor) {
            const utilityTokenName = parseInternalUtilityColorReference(value as UtilityColor);
            const groupName = semanticGroups?.find((item) =>
                item.groups.some((group) =>
                    group.items.some((item) => item.name === utilityTokenName),
                ),
            );

            return groupName?.key;
        }

        return value ? parseInternalPrivateColorReference(value)?.mainColorToken : undefined;
    });

    const [selectedGroupType, setSelectedGroupType] = React.useState<
        'private' | 'semantic' | undefined
    >(isUtilityColor ? 'semantic' : 'private');

    React.useEffect(() => {
        const mainColorToken = value
            ? parseInternalPrivateColorReference(value)?.mainColorToken
            : undefined;

        if (mainColorToken) {
            setCurrentGroupToken(mainColorToken);
        }
    }, [value]);

    const groupToken = currentGroupToken || privateGroups[0].token;

    React.useEffect(() => {
        colorsRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [groupToken]);

    const groupPrivateColors = React.useMemo(
        () => privateGroups.find(({token}) => token === groupToken)?.privateColors || [],
        [privateGroups, groupToken],
    );

    return (
        <div className={b({version})}>
            <div className={b('left')}>
                <Text variant="caption-2" color="secondary">
                    PRIVATE COLORS
                </Text>
                <PrivateColorsList
                    colors={privateGroups}
                    value={groupToken}
                    onSelect={(item) => {
                        setCurrentGroupToken(item.token);
                        setSelectedGroupType('private');
                    }}
                    view={version === 'mobile' ? 'select' : 'list'}
                />

                {semanticGroups && Boolean(semanticGroups?.length) && (
                    <Fragment>
                        <Divider className={b('divider')} />
                        <Text variant="caption-2" color="secondary">
                            SEMANTIC COLORS
                        </Text>
                        <SemanticGroupList
                            groups={semanticGroups}
                            value={groupToken}
                            onSelect={(val) => {
                                setCurrentGroupToken(val);
                                setSelectedGroupType('semantic');
                            }}
                        />
                    </Fragment>
                )}
            </div>
            <div className={b('right')} ref={colorsRef}>
                {selectedGroupType === 'semantic' ? (
                    <SemanticGroupColorsList
                        groups={
                            semanticGroups?.find((item) => item.key === groupToken)?.groups || []
                        }
                        privateGroups={privateGroups}
                        value={value}
                        onSelect={onChange}
                    />
                ) : (
                    <PrivateColorsList
                        colors={groupPrivateColors}
                        value={value}
                        onSelect={(item) => onChange(item.color, item.token)}
                    />
                )}
            </div>
        </div>
    );
};
