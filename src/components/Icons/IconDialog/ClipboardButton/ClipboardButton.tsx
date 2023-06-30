import {Copy} from '@gravity-ui/icons';
import {Button, CopyToClipboard, Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';

import './ClipboardButton.scss';

const b = block('clipboard-button');

interface ClipboardButtonProps {
    copyText: string;
}

export const ClipboardButton: React.FC<ClipboardButtonProps> = ({copyText}) => {
    return (
        <CopyToClipboard text={copyText} timeout={0}>
            {() => (
                <Button view="flat" className={b()}>
                    <Icon data={Copy} size={16} />
                </Button>
            )}
        </CopyToClipboard>
    );
};
