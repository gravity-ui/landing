import React from 'react';

import {block} from '../../../../utils';
import type {IconItem} from '../../types';
import {ClipboardButton} from '../ClipboardButton/ClipboardButton';

import './UsageExample.scss';
import {buildIconImportLine, buildIconSvgPath} from './helpers';

const b = block('icon-usage-example');

interface UsageExampleProps {
    icon: IconItem;
    variant: 'react' | 'svg';
}

export const UsageExample: React.FC<UsageExampleProps> = ({icon, variant}) => {
    const importCode =
        variant === 'react'
            ? buildIconImportLine(icon.meta.componentName)
            : buildIconSvgPath(icon.meta.svgName, icon.meta.componentName);

    return (
        <div className={b()}>
            <div className={b('title')}>{variant === 'react' ? 'React component' : 'SVG'}</div>
            <div className={b('wrapper')}>
                <div className={b('code')}>{importCode}</div>
                <div className={b('copy-button')}>
                    <ClipboardButton copyText={importCode} />
                </div>
            </div>
        </div>
    );
};
