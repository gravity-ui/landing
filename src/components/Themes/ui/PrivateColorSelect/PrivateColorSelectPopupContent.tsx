import {Divider, Flex, List, Select, SelectOption, Text} from '@gravity-ui/uikit';
import {
    type UtilityColor,
    isInternalPrivateColorReference,
    isInternalUtilityColorReference,
    parseInternalPrivateColorReference,
} from '@gravity-ui/uikit-themer';
import {parseInternalUtilityColorReference} from '@gravity-ui/uikit-themer/dist/utils';
import React, {Fragment} from 'react';

import {block} from '../../../../utils';
import type {SemanticColorGroup} from '../../hooks/useThemeSemanticColorOption';
import {ColorPreview} from '../ColorPreview/ColorPreview';

import './PrivateColorSelectPopupContent.scss';
import type {BaseColor, ColorGroup} from './types';

const b = block('private-colors-select-popup');

// TODO: split components for folders
type ColorItemProps = {
    color: string;
    title: string;
};

const ColorItem: React.FC<ColorItemProps> = ({title, color}) => {
    return (
        <div className={b('color-item')}>
            <ColorPreview color={color} />
            <Text>{title}</Text>
        </div>
    );
};

interface ColorsListProps {
    colors: BaseColor[];
    value?: string;
    onSelect: (value: string) => void;
    view?: 'select' | 'list';
}

const ColorsList: React.FC<ColorsListProps> = ({colors, value, onSelect, view = 'list'}) => {
    const selectedIndex = React.useMemo(
        () => colors.findIndex((item) => item.token === value),
        [colors, value],
    );

    const handleSelect = React.useCallback(
        (item: BaseColor) => {
            onSelect(item.token);
        },
        [onSelect],
    );

    const renderItem = React.useCallback(
        (item: BaseColor) => <ColorItem color={item.color} title={item.title} />,
        [],
    );

    const selectOptions = React.useMemo(() => {
        return colors.map((color) => ({data: color, value: color.token}));
    }, [colors]);

    const renderOption = React.useCallback(
        (option: SelectOption<BaseColor>) => {
            return (
                <div key={option.value} className={b('color-option')}>
                    {renderItem(option.data as BaseColor)}
                </div>
            );
        },
        [renderItem],
    );

    const handleSelectChange = React.useCallback(
        (newToken: string[]) => {
            const newColor = colors.find((item) => item.token === newToken[0]);
            if (newColor) {
                handleSelect(newColor);
            }
        },
        [colors, handleSelect],
    );

    return view === 'select' ? (
        <Select<BaseColor>
            className={b('colors-select')}
            size="xl"
            options={selectOptions}
            renderOption={renderOption}
            renderSelectedOption={renderOption}
            popupPlacement={'top-end'}
            value={value ? [value] : undefined}
            onUpdate={handleSelectChange}
            disablePortal
        />
    ) : (
        <List<BaseColor>
            items={colors}
            filterable={false}
            virtualized={false}
            selectedItemIndex={selectedIndex}
            onItemClick={handleSelect}
            renderItem={renderItem}
            className={b('colors-list')}
            itemClassName={b('colors-list-item')}
        />
    );
};

interface SemanticGroupListProps {
    groups: SemanticColorGroup[];
    value?: string;
    onSelect: (value: string) => void;
}

interface SemanticGroupColorsListProps {
    groups: SemanticColorGroup['groups'];
    value?: string;
    privateGroups: ColorGroup[];
    onSelect: (value: string) => void;
}

const SemanticGroupColorsList = ({
    groups,
    value,
    onSelect,
    privateGroups,
}: SemanticGroupColorsListProps) => {
    const selectedColorTokenName = parseInternalUtilityColorReference(value as UtilityColor);

    const handleSelect = React.useCallback(
        (item: BaseColor) => {
            onSelect(item.token);
        },
        [onSelect],
    );

    const renderItem = React.useCallback((item: BaseColor) => {
        if (!item.color) {
            return null;
        }

        let color: string | undefined = item.color;

        if (isInternalPrivateColorReference(item.color)) {
            const parsedPrivateColorToken = parseInternalPrivateColorReference(item.color);

            if (parsedPrivateColorToken) {
                const {mainColorToken, privateColorCode} = parsedPrivateColorToken;

                color = privateGroups
                    .find((group) => group.token === mainColorToken)
                    ?.privateColors.find(
                        (privateColor) => privateColor.token === privateColorCode,
                    )?.color;
            }
        }

        return <ColorItem key={item.token} color={color ?? ''} title={item.title} />;
    }, []);

    return (
        <Flex direction="column" gap={3}>
            {groups.map((group) => {
                const selectedIndex = group.items.findIndex(
                    (item) => item.name === selectedColorTokenName,
                );

                return (
                    <Flex key={group.title} direction="column" gap={1}>
                        <Text>{group.title}</Text>

                        <List<BaseColor>
                            items={group.items}
                            filterable={false}
                            virtualized={false}
                            selectedItemIndex={selectedIndex === -1 ? undefined : selectedIndex}
                            onItemClick={handleSelect}
                            renderItem={renderItem}
                            className={b('colors-list')}
                            itemClassName={b('colors-list-item')}
                        />
                    </Flex>
                );
            })}
        </Flex>
    );
};

const SemanticGroupList = ({groups, value, onSelect}: SemanticGroupListProps) => {
    const selectedIndex = React.useMemo(
        () => groups.findIndex((item) => item.key === value),
        [groups, value],
    );

    const handleSelect = React.useCallback(
        (item: SemanticColorGroup) => {
            onSelect(item.key);
        },
        [onSelect],
    );

    const renderItem = React.useCallback((item: SemanticColorGroup) => {
        return (
            <Flex key={item.key} gap={1} alignItems="center" className={b('color-item')}>
                {item.icon}
                <Text>{item.title}</Text>
            </Flex>
        );
    }, []);

    return (
        <List<SemanticColorGroup>
            items={groups}
            filterable={false}
            virtualized={false}
            selectedItemIndex={selectedIndex}
            onItemClick={handleSelect}
            renderItem={renderItem}
            className={b('colors-list')}
            itemClassName={b('colors-list-item')}
        />
    );
};

interface PrivateColorSelectPopupContentProps {
    privateGroups: ColorGroup[];
    semanticGroups?: SemanticColorGroup[];
    value?: string;
    onChange: (token: string) => void;
    version?: 'mobile' | 'desktop';
}

export const PrivateColorSelectPopupContent: React.FC<PrivateColorSelectPopupContentProps> = ({
    value,
    privateGroups,
    semanticGroups,
    onChange,
    version = 'desktop',
}) => {
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
                <ColorsList
                    colors={privateGroups}
                    value={groupToken}
                    onSelect={(val) => {
                        setCurrentGroupToken(val);
                        setSelectedGroupType('private');
                    }}
                    view={version === 'mobile' ? 'select' : 'list'}
                />

                {semanticGroups && Boolean(semanticGroups?.length) && (
                    <Fragment>
                        <Divider />
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
                    <ColorsList colors={groupPrivateColors} value={value} onSelect={onChange} />
                )}
            </div>
        </div>
    );
};
