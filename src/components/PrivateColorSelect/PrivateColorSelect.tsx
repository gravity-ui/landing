import {ChevronDown, DiamondExclamation, PencilToLine} from '@gravity-ui/icons';
import {ActionTooltip, Button, Flex, Icon, Popup, TextInput} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {ColorPreview} from '../ColorPreview/ColorPreview';
import {createPrivateColorTitle, isPrivateColorToken, parsePrivateColorToken} from '../Theme/utils';

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
    const isValueDiffersFromDefault = defaultValue && defaultValue !== value;

    const defaultValueToken = React.useMemo(() => {
        if (!defaultValue) {
            return '';
        }

        const result = parsePrivateColorToken(defaultValue);
        if (result) {
            return createPrivateColorTitle(result.mainColorToken, result.privateColorCode);
        }

        return '';
    }, [defaultValue]);

    const resetToDefault = React.useCallback(() => {
        if (defaultValue) {
            onChange(defaultValue);
        }
    }, [onChange, defaultValue]);

    const switchMode = React.useCallback(() => {
        if (isCustomValue) {
            onChange(defaultValue);
        } else {
            onChange('');
        }
    }, [isCustomValue, onChange, defaultValue]);

    const privateColor = React.useMemo(() => {
        const colorGroup = value
            ? groups.find((group) => group.privateColors.some((color) => color.token === value))
            : undefined;

        return value
            ? colorGroup?.privateColors?.find((color) => color.token === value)
            : undefined;
    }, [groups, value]);

    return (
        <Flex className={b()} ref={containerRef} gap={1}>
            {isCustomValue ? (
                <ColorPickerInput value={value} defaultValue={value || ''} onChange={onChange} />
            ) : (
                <TextInput
                    value={privateColor?.title || ''}
                    view="normal"
                    size="l"
                    startContent={
                        <ColorPreview className={b('preview')} color={privateColor?.color} />
                    }
                    endContent={
                        <Flex gap={1}>
                            <Button view="flat-secondary" onClick={toggleShowPopup}>
                                <Icon data={ChevronDown} />
                            </Button>
                            {isValueDiffersFromDefault && (
                                <ActionTooltip
                                    title="The value is overriden"
                                    description={`Effective value is \`var(${defaultValueToken});\``}
                                    placement="bottom-end"
                                >
                                    <Button view="flat-danger" onClick={resetToDefault}>
                                        <Icon data={DiamondExclamation} />
                                    </Button>
                                </ActionTooltip>
                            )}
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
                <PrivateColorSelectPopupContent groups={groups} value={value} onChange={onChange} />
            </Popup>
        </Flex>
    );
};
