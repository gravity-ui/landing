import {CopyToClipboardStatus, Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import type {IconItem} from '../../types';
import {ClipboardArea} from '../ClipboardArea/ClipboardArea';
import {ClipboardIcon} from '../ClipboardIcon/ClipboardIcon';

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
                <ClipboardArea textToCopy={icon.name}>
                    {(status) => (
                        <div
                            className={b('title', {
                                copied: status === CopyToClipboardStatus.Success,
                            })}
                        >
                            <span className={b('name')}>{icon.name}</span>
                            <ClipboardIcon status={status} />
                        </div>
                    )}
                </ClipboardArea>
                {icon.meta.keywords.length ? (
                    <div className={b('keywords')}>
                        <div className={b('keywords-title')}>Keywords</div>
                        <div className={b('keywords-items')}>
                            {icon.meta.keywords.map((keyword) => (
                                <div
                                    key={keyword}
                                    className={b('keywords-item')}
                                    onClick={createKeywordClickHandler(keyword)}
                                >
                                    {keyword}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
