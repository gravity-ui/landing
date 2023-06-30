import React from 'react';

import {block} from '../../../../utils';
import type {IconItem} from '../../IconCollection/types';
import {IconContent} from '../IconContent/IconContent';
import {UsageExample} from '../UsageExample/UsageExample';

import './IconBody.scss';

const b = block('icon-body');

interface IconBodyProps {
    icon: IconItem;
    onClickToKeyword?: (keyword: string) => void;
}

export const IconBody: React.FC<IconBodyProps> = ({icon, onClickToKeyword}) => {
    return (
        <div className={b()}>
            <IconContent icon={icon} onClickToKeyword={onClickToKeyword} />
            <UsageExample variant="react" icon={icon} />
            <UsageExample variant="svg" icon={icon} />
        </div>
    );
};
