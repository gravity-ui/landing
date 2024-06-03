import {Palette} from '@gravity-ui/icons';
import {Button, Flex, Icon, TextInput} from '@gravity-ui/uikit';
import React, {ChangeEventHandler, forwardRef, useCallback, useRef, useState} from 'react';

import {block} from '../../utils';

import './ColorPickerInput.scss';
import {hexRegexp, parseRgbStringToHex, rgbRegexp, rgbaRegexp} from './utils';

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
    const colorInputRef = useRef<HTMLInputElement>(null);

    const managedValue = value || inputValue;

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event) => {
            const newValue = event.target.value.replaceAll(' ', '');
            onChangeExternal?.(newValue);
            setInputValue(newValue);

            if (
                !newValue ||
                new RegExp(hexRegexp, 'g').test(newValue) ||
                new RegExp(rgbaRegexp, 'g').test(newValue)
            ) {
                setColor(newValue);

                return;
            }

            if (new RegExp(rgbRegexp, 'g').test(newValue)) {
                const hexColor = parseRgbStringToHex(newValue);

                setColor(hexColor);
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
