import React from 'react';

import {block} from '../../../../utils';
import type {IconItem} from '../../IconCollection/types';

import './UsageExample.scss';

import {ClipboardButton} from '../ClipboardButton/ClipboardButton';

const b = block('icon-usage-example');

interface UsageExampleProps {
    icon: IconItem;
    variant: 'react' | 'svg';
}

export const UsageExample: React.FC<UsageExampleProps> = ({variant}) => {
    return (
        <div className={b()}>
            <div className={b('title')}>{variant === 'react' ? 'React component' : 'SVG'}</div>
            <div className={b('wrapper')}>
                <div
                    className={b('code')}
                >{`import {House} from '@gravity-ui/icons qwr wqr qwr qwr qwrqwr ';`}</div>
                <div className={b('copy-button')}>
                    <ClipboardButton copyText="qwrwqwqr" />
                </div>
            </div>
        </div>
    );
};
