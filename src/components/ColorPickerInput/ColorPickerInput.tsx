import {Palette} from 'landing-icons';
import {Button, Flex, Icon, TextInput, TextInputProps} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React, {ChangeEventHandler, useCallback, useRef, useState} from 'react';

import {block} from '../../utils';

import './ColorPickerInput.scss';
import {ColorPreview} from './ColorPreview';
import {NativeColorPicker} from './NativeColorPicker';
import {hexRegexp, parseRgbStringToHex, rgbRegexp, rgbaRegexp} from './utils';

const b = block('color-picker');

export interface ColorPickerInputProps {
    defaultValue: string;
    name?: string;
    value?: string;
    onChange?: (color: string) => void;
    errorMessage?: string;
}

export const ColorPickerInput = ({
    name,
    value,
    onChange: onChangeExternal,
    defaultValue,
    errorMessage,
}: ColorPickerInputProps) => {
    const {t} = useTranslation('component');

    const [color, setColor] = useState<string>(defaultValue);
    const [inputValue, setInputValue] = useState<string>(defaultValue);
    const [validationError, setValidationError] = useState<TextInputProps['validationState']>();

    const colorInputRef = useRef<HTMLInputElement>(null);

    const managedValue = value || inputValue;

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event) => {
            const newValue = event.target.value.replaceAll(' ', '');
            onChangeExternal?.(newValue);
            setInputValue(newValue);
            setValidationError(undefined);

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
                return;
            }
        },
        [onChangeExternal],
    );

    const onNativeInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const newValue = e.target.value.toUpperCase();

        setColor(newValue);
        setInputValue(newValue);
    }, []);

    const onBlur = useCallback(() => {
        if (
            !managedValue ||
            (!new RegExp(hexRegexp, 'g').test(managedValue) &&
                !new RegExp(rgbRegexp, 'g').test(managedValue) &&
                !new RegExp(rgbaRegexp, 'g').test(managedValue))
        ) {
            setValidationError('invalid');
        }
    }, [managedValue]);

    return (
        <Flex className={b()} direction="column">
            <TextInput
                name={name}
                value={managedValue}
                errorPlacement="inside"
                errorMessage={errorMessage || t('color-input_validation-format-error')}
                validationState={validationError}
                view="normal"
                size="l"
                onChange={onChange}
                startContent={<ColorPreview color={color} />}
                endContent={
                    <Button
                        view="flat-action"
                        onClick={() => {
                            colorInputRef.current?.click();
                        }}
                    >
                        <Icon data={Palette} />
                    </Button>
                }
                onBlur={onBlur}
            />
            <NativeColorPicker ref={colorInputRef} value={color} onChange={onNativeInputChange} />
        </Flex>
    );
};
