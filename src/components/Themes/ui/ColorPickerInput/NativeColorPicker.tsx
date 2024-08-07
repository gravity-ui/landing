import React, {ChangeEventHandler, forwardRef} from 'react';

import {block} from '../../../../utils';

import './ColorPickerInput.scss';
import {getValidColor} from './utils';

export interface NativeColorPickerProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const b = block('color-picker__input');

export const NativeColorPicker = forwardRef<HTMLInputElement, NativeColorPickerProps>(
    ({value, onChange}, ref) => {
        const normalizedValue = React.useMemo(() => {
            try {
                return getValidColor(value);
            } catch (_err) {
                return value;
            }
        }, [value]);

        return (
            <input
                className={b()}
                type="color"
                ref={ref}
                value={normalizedValue}
                onChange={onChange}
            />
        );
    },
);
