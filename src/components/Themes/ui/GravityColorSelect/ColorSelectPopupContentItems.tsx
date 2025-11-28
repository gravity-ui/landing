import {Flex, HelpMark, List, Select, SelectOption, Text} from '@gravity-ui/uikit';
import {
    type UtilityColor,
    isInternalPrivateColorReference,
    isInternalUtilityColorReference,
    parseInternalUtilityColorReference,
} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils';
import type {
    SemanticColorGroup,
    SemanticColorGroupItem,
} from '../../hooks/useThemeSemanticColorOption';
import {ColorPreview} from '../ColorPreview/ColorPreview';

import './ColorSelectPopupContent.scss';
import type {BaseColor, ColorGroup} from './types';
import {getColorFromPrivateColor, getColorFromUtilityColor} from './utils';

type ColorItemProps = {
    color: string;
    title: string;
    disabled?: boolean;
};

const b = block('private-colors-select-popup');

const ColorItem: React.FC<ColorItemProps> = ({title, color, disabled}) => {
    return (
        <div className={b('color-item', {disabled})}>
            <ColorPreview color={color} />
            <Text>{title}</Text>
        </div>
    );
};

interface PrivateColorsListProps {
    colors: BaseColor[];
    value?: string;
    onSelect: (item: BaseColor) => void;
    view?: 'select' | 'list';
}

export const PrivateColorsList = ({
    colors,
    value,
    onSelect,
    view = 'list',
}: PrivateColorsListProps) => {
    const selectedIndex = React.useMemo(
        () => colors.findIndex((item) => item.token === value),
        [colors, value],
    );

    const handleSelect = React.useCallback(
        (item: BaseColor) => {
            onSelect(item);
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
    onSelect: (value: string, ref?: string) => void;
}

export const SemanticGroupColorsList = ({
    groups,
    value,
    onSelect,
    privateGroups,
}: SemanticGroupColorsListProps) => {
    const {t} = useTranslation('themes');
    const selectedColorTokenName = parseInternalUtilityColorReference(value as UtilityColor);

    const handleSelect = React.useCallback(
        (item: SemanticColorGroupItem) => {
            onSelect(item.color, item.token);
        },
        [onSelect],
    );

    const renderItem = React.useCallback(
        (item: SemanticColorGroupItem) => {
            if (!item.color) {
                return null;
            }

            let color: string | undefined = item.color;

            if (isInternalUtilityColorReference(item.color)) {
                color = getColorFromUtilityColor(item.color, groups)?.color;
            }

            if (isInternalPrivateColorReference(item.color)) {
                color = getColorFromPrivateColor(item.color, privateGroups)?.color;
            }

            return (
                <Flex gap={1} alignItems="center">
                    <ColorItem
                        key={item.token}
                        color={color ?? ''}
                        title={item.title}
                        disabled={item.disabled}
                    />
                    {item.disabled && (
                        <HelpMark iconSize="s">
                            <Text variant="body-1" color="secondary">
                                {t('text_utility-color_disabled_description')}
                            </Text>
                        </HelpMark>
                    )}
                </Flex>
            );
        },
        [t],
    );

    return (
        <Flex direction="column" gap={3}>
            {groups.map((group) => {
                const selectedIndex = group.items.findIndex(
                    (item) => item.name === selectedColorTokenName,
                );

                return (
                    <Flex key={group.title} direction="column" gap={1}>
                        <Text>{group.title}</Text>

                        <List<SemanticColorGroupItem>
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

export const SemanticGroupList = ({groups, value, onSelect}: SemanticGroupListProps) => {
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
