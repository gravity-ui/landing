import React from 'react';

import {block} from '../../../../utils';

import './ColorPreview.scss';

export interface ColorPreviewProps {
    color?: string;
    className?: string;
}

const b = block('color-preview');

const isColorWithOpacity = (color?: string) => !color || color?.startsWith('rgba');

export const ColorPreview = ({color, className}: ColorPreviewProps) => {
    return (
        <div className={b({'with-opacity': isColorWithOpacity(color)}, className)}>
            <div className={b('color')} style={{backgroundColor: color}} />
        </div>
    );
};
