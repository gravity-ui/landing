import {List, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';
import {ColorPreview} from '../ColorPreview/ColorPreview';
import {parsePrivateColorToken} from '../Theme/utils';

import './PrivateColorSelectPopupContent.scss';
import type {BaseColor, ColorGroup} from './types';

const b = block('private-colors-select-popup');

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
}

const ColorsList: React.FC<ColorsListProps> = ({colors, value, onSelect}) => {
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

    return (
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

interface PrivateColorSelectPopupContentProps {
    groups: ColorGroup[];
    value?: string;
    onChange: (token: string) => void;
}

export const PrivateColorSelectPopupContent: React.FC<PrivateColorSelectPopupContentProps> = ({
    value,
    groups,
    onChange,
}) => {
    const [currentGroupToken, setCurrentGroupToken] = React.useState<string | undefined>(() =>
        value ? parsePrivateColorToken(value)?.mainColorToken : undefined,
    );

    React.useEffect(() => {
        const mainColorToken = value ? parsePrivateColorToken(value)?.mainColorToken : undefined;

        if (mainColorToken) {
            setCurrentGroupToken(mainColorToken);
        }
    }, [value]);

    const groupToken = currentGroupToken || groups[0].token;

    const groupPrivateColors = React.useMemo(
        () => groups.find(({token}) => token === groupToken)?.privateColors || [],
        [groups, groupToken],
    );

    return (
        <div className={b()}>
            <div className={b('left')}>
                <ColorsList colors={groups} value={groupToken} onSelect={setCurrentGroupToken} />
            </div>
            <div className={b('right')}>
                <ColorsList colors={groupPrivateColors} value={value} onSelect={onChange} />
            </div>
        </div>
    );
};
