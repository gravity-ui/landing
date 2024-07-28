import {ChevronDown, PencilToLine} from '@gravity-ui/icons';
import {Button, Flex, Icon, Popup, TextInput} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {isPrivateColorToken} from '../../lib/themeCreatorUtils';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {ColorPreview} from '../ColorPreview/ColorPreview';

import './PrivateColorSelect.scss';
import {PrivateColorSelectPopupContent} from './PrivateColorSelectPopupContent';
import type {ColorGroup} from './types';

const b = block('private-colors-select');

interface PrivateColorSelectProps {
    value?: string;
    defaultValue: string;
    onChange: (color: string) => void;
    groups: ColorGroup[];
}

export const PrivateColorSelect: React.FC<PrivateColorSelectProps> = ({
    groups,
    value,
    defaultValue,
    onChange,
}) => {
    const containerRef = React.useRef(null);
    const [showPopup, toggleShowPopup] = React.useReducer((prev) => !prev, false);
    const isCustomValue = !isPrivateColorToken(value);

    const handleChange = React.useCallback(
        (newVal: string) => {
            onChange(newVal);
            toggleShowPopup();
        },
        [onChange],
    );

    const switchMode = React.useCallback(() => {
        if (isCustomValue) {
            onChange(defaultValue);
        } else {
            onChange('');
            if (showPopup) {
                toggleShowPopup();
            }
        }
    }, [isCustomValue, onChange, defaultValue, showPopup]);

    const privateColor = React.useMemo(() => {
        const colorGroup = value
            ? groups.find((group) => group.privateColors.some((color) => color.token === value))
            : undefined;

        return value
            ? colorGroup?.privateColors?.find((color) => color.token === value)
            : undefined;
    }, [groups, value]);

    const handleClickArrowButton = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
            event.stopPropagation();
            toggleShowPopup();
        },
        [],
    );

    return (
        <Flex className={b()} ref={containerRef} gap={1}>
            {isCustomValue ? (
                <ColorPickerInput value={value} defaultValue={value || ''} onChange={onChange} />
            ) : (
                <TextInput
                    className={b('input')}
                    value={privateColor?.title || ''}
                    view="normal"
                    size="l"
                    startContent={
                        <ColorPreview className={b('preview')} color={privateColor?.color} />
                    }
                    endContent={
                        <Flex gap={1}>
                            <Button
                                className={b('arrow-button')}
                                view="flat-secondary"
                                onClick={handleClickArrowButton}
                            >
                                <Icon data={ChevronDown} />
                            </Button>
                        </Flex>
                    }
                    controlProps={{
                        readOnly: true,
                    }}
                    onFocus={toggleShowPopup}
                />
            )}
            <Button
                className={b('customize-button')}
                size="l"
                view="flat"
                onClick={switchMode}
                selected={isCustomValue}
            >
                <Icon data={PencilToLine} />
            </Button>
            <Popup
                anchorRef={containerRef}
                open={showPopup}
                modifiers={[{name: 'preventOverflow', enabled: false}]}
                onClose={toggleShowPopup}
            >
                <PrivateColorSelectPopupContent
                    groups={groups}
                    value={value}
                    onChange={handleChange}
                />
            </Popup>
        </Flex>
    );
};
