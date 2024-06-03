import React from 'react';

import {block} from '../../utils';

import './ColorPickerInput.scss';

export interface ColorPreviewProps {
    color: string;
}

const b = block('color-picker__preview');

export const ColorPreview = ({color}: ColorPreviewProps) => {
    return <div className={b()} style={{backgroundColor: color}} />;
};
