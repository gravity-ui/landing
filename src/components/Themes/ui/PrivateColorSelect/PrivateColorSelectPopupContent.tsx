import {List, Select, SelectOption, Text} from 'landing-uikit';
import React from 'react';

import {block} from '../../../../utils';
import {parsePrivateColorToken} from '../../lib/themeCreatorUtils';
import {ColorPreview} from '../ColorPreview/ColorPreview';

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

interface PrivateColorSelectPopupContentProps {
    groups: ColorGroup[];
    value?: string;
    onChange: (token: string) => void;
    version?: 'mobile' | 'desktop';
}

export const PrivateColorSelectPopupContent: React.FC<PrivateColorSelectPopupContentProps> = ({
    value,
    groups,
    onChange,
    version = 'desktop',
}) => {
    const colorsRef = React.useRef<HTMLDivElement>(null);

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

    React.useEffect(() => {
        colorsRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [groupToken]);

    const groupPrivateColors = React.useMemo(
        () => groups.find(({token}) => token === groupToken)?.privateColors || [],
        [groups, groupToken],
    );

    return (
        <div className={b({version})}>
            <div className={b('left')}>
                <ColorsList
                    colors={groups}
                    value={groupToken}
                    onSelect={setCurrentGroupToken}
                    view={version === 'mobile' ? 'select' : 'list'}
                />
            </div>
            <div className={b('right')} ref={colorsRef}>
                <ColorsList colors={groupPrivateColors} value={value} onSelect={onChange} />
            </div>
        </div>
    );
};
