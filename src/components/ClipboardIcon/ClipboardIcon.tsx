import {Copy, CopyCheck} from 'landing-icons';
import {type CopyToClipboardStatus, Icon} from 'landing-uikit';
import React from 'react';

import {block} from '../../utils';

import './ClipboardIcon.scss';

const b = block('clipboard-icon');

interface ClipboardIconProps {
    status: CopyToClipboardStatus;
    className?: string;
}

export const ClipboardIcon: React.FC<ClipboardIconProps> = ({status, className}) => {
    const isCopied = status === 'success';

    return (
        <div className={b({copied: isCopied}, className)}>
            <Icon data={isCopied ? CopyCheck : Copy} size={16} />
        </div>
    );
};
