import React from 'react';

import {block} from '../../../../utils';

import './ColorPreview.scss';

export interface ColorPreviewProps {
    color?: string;
    className?: string;
    withBorders?: boolean;
}

const b = block('color-preview');

const isColorWithOpacity = (color?: string) => !color || color?.startsWith('rgba');

export const ColorPreview = ({color, className, withBorders}: ColorPreviewProps) => {
    return (
        <div
            className={b(
                {'with-opacity': isColorWithOpacity(color), 'with-borders': withBorders},
                className,
            )}
        >
            <div className={b('color')} style={{backgroundColor: color}} />
        </div>
    );
};
