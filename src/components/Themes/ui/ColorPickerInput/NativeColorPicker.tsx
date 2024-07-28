import React, {ChangeEventHandler, forwardRef} from 'react';

import {block} from '../../../../utils';

import './ColorPickerInput.scss';

export interface NativeColorPickerProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const b = block('color-picker__input');

export const NativeColorPicker = forwardRef<HTMLInputElement, NativeColorPickerProps>(
    ({value, onChange}, ref) => {
        return <input className={b()} type="color" ref={ref} value={value} onChange={onChange} />;
    },
);
