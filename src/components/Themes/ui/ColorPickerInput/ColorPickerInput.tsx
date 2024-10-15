import {Palette} from 'landing-icons';
import {Button, Flex, Icon, TextInput, TextInputProps} from 'landing-uikit';
import debounce from 'lodash/debounce';
import {useTranslation} from 'next-i18next';
import React, {ChangeEventHandler, useCallback, useEffect, useRef, useState} from 'react';

import {block} from '../../../../utils';
import {ColorPreview} from '../ColorPreview/ColorPreview';

import './ColorPickerInput.scss';
import {NativeColorPicker} from './NativeColorPicker';
import {getValidColor, isValidColor} from './utils';

const b = block('color-picker');

export interface ColorPickerInputProps {
    defaultValue: string;
    name?: string;
    value?: string;
    onChange: (color: string) => void;
    errorMessage?: string;
    size?: TextInputProps['size'];
    withBorderInPreview?: boolean;
}

export const ColorPickerInput = ({
    name,
    value,
    onChange: onChangeExternal,
    defaultValue,
    errorMessage,
    size = 'l',
    withBorderInPreview,
}: ColorPickerInputProps) => {
    const {t} = useTranslation('themes');

    const debouncedExternalChange = React.useMemo(
        () => debounce(onChangeExternal, 200),
        [onChangeExternal],
    );

    const [color, setColor] = useState<string>(() => {
        const validColor = getValidColor(defaultValue);

        return validColor ?? '';
    });

    const [inputValue, setInputValue] = useState<string>(value ?? defaultValue);
    const [validationError, setValidationError] = useState<TextInputProps['validationState']>();

    const colorInputRef = useRef<HTMLInputElement>(null);

    const validateAndChangeExternal = React.useCallback(
        (newValue: string, formatValueToHex = false) => {
            if (!isValidColor(newValue)) {
                setValidationError('invalid');
                return;
            }

            setValidationError(undefined);

            let formattedValue = newValue;

            if (formatValueToHex) {
                const validColor = getValidColor(newValue);
                if (validColor !== undefined) {
                    formattedValue = validColor;
                }
            }

            setInputValue(formattedValue);
            setColor(formattedValue);
            debouncedExternalChange(formattedValue);
        },
        [debouncedExternalChange],
    );

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        setValidationError(undefined);
    }, []);

    const onNativeInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const newValue = e.target.value.toUpperCase();
            setInputValue(newValue);
            validateAndChangeExternal(newValue, true);
        },
        [validateAndChangeExternal],
    );

    const onBlur = useCallback(() => {
        validateAndChangeExternal(inputValue);
    }, [inputValue, validateAndChangeExternal]);

    const onKeyPress = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                validateAndChangeExternal(inputValue);
            }
        },
        [inputValue, validateAndChangeExternal],
    );

    useEffect(() => {
        // Dont validate if not initial value
        if (!value && !defaultValue) {
            return;
        }

        validateAndChangeExternal(value ?? defaultValue);
    }, [value, defaultValue]);

    return (
        <Flex className={b()} direction="column">
            <TextInput
                className={b('text-input')}
                name={name}
                value={inputValue}
                onKeyPress={onKeyPress}
                errorPlacement="inside"
                errorMessage={errorMessage || t('color-input_validation-format-error')}
                validationState={validationError}
                view="normal"
                size={size}
                onChange={onChange}
                startContent={
                    <ColorPreview
                        className={b('preview', {'with-border': withBorderInPreview})}
                        color={color}
                    />
                }
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
