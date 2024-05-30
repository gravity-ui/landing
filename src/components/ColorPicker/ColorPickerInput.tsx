import {Palette} from '@gravity-ui/icons';
import {Button, Flex, Icon, TextInput} from '@gravity-ui/uikit';
import React, {ChangeEventHandler, forwardRef, useCallback, useRef, useState} from 'react';

import {block} from '../../utils';

import './ColorPickerInput.scss';

const b = block('color-picker');

export interface ColorPickerInputProps {
    defaultValue: string;
    name?: string;
    value?: string;
    onChange?: (color: string) => void;
}

interface NativeColorPickerProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const hexRegexp = /^#[a-fA-F0-9]{6}$/g;
const rgbRegexp = /^rgb\((\d{1,3}, ?){2}(\d{1,3})\)$/g;
const numberRegexp = /\b\d+\b/g;

const NativeColorPicker = forwardRef<HTMLInputElement, NativeColorPickerProps>(
    ({value, onChange}, ref) => {
        return (
            <input
                className={b('input')}
                type="color"
                ref={ref}
                value={value}
                onChange={onChange}
            />
        );
    },
);

export const ColorPickerInput = ({
    name,
    value,
    onChange: onChangeExternal,
    defaultValue,
}: ColorPickerInputProps) => {
    const [color, setColor] = useState<string>(defaultValue);
    const [inputValue, setInputValue] = useState<string>(defaultValue);

    const managedValue = value || inputValue;

    const colorInputRef = useRef<HTMLInputElement>(null);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event) => {
            const newValue = event.target.value.trim();

            setInputValue(newValue);

            if (!newValue) {
                setColor(defaultValue);

                return;
            }

            if (hexRegexp.test(newValue)) {
                setColor(newValue);
                onChangeExternal?.(newValue);

                return;
            }

            if (rgbRegexp.test(newValue)) {
                let hexColor = '#';
                newValue.match(numberRegexp)?.forEach((val) => {
                    const hex = Number(val).toString(16);

                    hexColor += hex?.length === 1 ? `0${hex}` : hex;
                });

                setColor(hexColor);
                onChangeExternal?.(hexColor);
            }
        },
        [onChangeExternal],
    );

    const onNativeInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const newValue = e.target.value.toUpperCase();

        setColor(newValue);
        setInputValue(newValue);
    }, []);

    return (
        <Flex className={b()} direction="column">
            <TextInput
                name={name}
                value={managedValue}
                view="normal"
                size="l"
                onChange={onChange}
                startContent={<div className={b('preview')} style={{backgroundColor: color}} />}
                endContent={
                    <Button
                        view="flat-action"
                        className={b('select-wrapper')}
                        onClick={() => {
                            colorInputRef.current?.click();
                        }}
                    >
                        <Icon data={Palette} />
                    </Button>
                }
            />
            <NativeColorPicker ref={colorInputRef} value={color} onChange={onNativeInputChange} />
        </Flex>
    );
};
