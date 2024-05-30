import {Palette} from '@gravity-ui/icons';
import {Flex, TextInput} from '@gravity-ui/uikit';
import React, {ChangeEventHandler, forwardRef, useRef, useState} from 'react';

import {block} from '../../utils';

import './BaseColorPicker.scss';

const b = block('color-picker');

export interface BaseColorPickerProps {
    value?: string;
    defaultValue: string;
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

export const BaseColorPicker = ({defaultValue, onChange, value}: BaseColorPickerProps) => {
    const [color, setColor] = useState<string>(defaultValue);

    const managedValue = value || color;

    const colorInputRef = useRef<HTMLInputElement>(null);

    return (
        <Flex className={b()} direction="column">
            <TextInput
                value={managedValue}
                view="normal"
                size="l"
                startContent={
                    <div className={b('preview')} style={{backgroundColor: managedValue}} />
                }
                endContent={
                    <div
                        className={b('select-wrapper')}
                        onClick={() => {
                            colorInputRef.current?.click();
                        }}
                    >
                        <Palette className={b('palette-icon')} />
                    </div>
                }
            />
            <NativeColorPicker
                ref={colorInputRef}
                value={managedValue}
                onChange={(e) => {
                    const newValue = e.target.value.toUpperCase();

                    setColor(newValue);
                    onChange?.(newValue);
                }}
            />
        </Flex>
    );
};
