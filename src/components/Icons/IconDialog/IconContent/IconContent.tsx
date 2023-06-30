import {Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import type {IconItem} from '../../IconCollection/types';
import {ClipboardButton} from '../ClipboardButton/ClipboardButton';

import './IconContent.scss';

const b = block('icon-content');

const ICON_SIZE = 40;

interface IconContentProps {
    icon: IconItem;
    onClickToKeyword?: (keyword: string) => void;
}

export const IconContent: React.FC<IconContentProps> = ({icon, onClickToKeyword}) => {
    const createKeywordClickHandler = React.useCallback(
        (keyword: string) => () => {
            onClickToKeyword?.(keyword);
        },
        [onClickToKeyword],
    );

    return (
        <div className={b()}>
            <div className={b('preview')}>
                <Icon data={icon.data} size={ICON_SIZE} />
            </div>
            <div className={b('info')}>
                <div className={b('title')}>
                    <span className={b('name')}>{icon.name}</span>
                    <ClipboardButton copyText={icon.name} />
                </div>
                <div className={b('keywords')}>
                    <div className={b('keywords-title')}>Keywords</div>
                    <div className={b('keywords-items')}>
                        <div
                            className={b('keywords-item')}
                            onClick={createKeywordClickHandler('home')}
                        >
                            home
                        </div>
                        <div
                            className={b('keywords-item')}
                            onClick={createKeywordClickHandler('building')}
                        >
                            building
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
