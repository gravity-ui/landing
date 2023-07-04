import {Copy, CopyCheck} from '@gravity-ui/icons';
import {CopyToClipboardStatus, Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';

import './ClipboardIcon.scss';

const b = block('clipboard-icon');

interface ClipboardIconProps {
    status: CopyToClipboardStatus;
}

export const ClipboardIcon: React.FC<ClipboardIconProps> = ({status}) => {
    const isCopied = status === CopyToClipboardStatus.Success;

    return (
        <div className={b({copied: isCopied})}>
            <Icon data={isCopied ? CopyCheck : Copy} size={16} />
        </div>
    );
};
