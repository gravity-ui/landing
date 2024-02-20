import {CopyToClipboard, CopyToClipboardStatus, Popover} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {useIsMobile} from '../../../../hooks/useIsMobile';
import {block} from '../../../../utils';

import './ClipboardArea.scss';

const b = block('clipboard-area');

const TIMEOUT = 1000;

interface ClipboardAreaProps {
    textToCopy: string;
    tooltipContent?: string;
    children: (status: CopyToClipboardStatus) => React.ReactElement;
}

export const ClipboardArea: React.FC<ClipboardAreaProps> = ({
    textToCopy,
    tooltipContent,
    children,
}) => {
    const {t} = useTranslation();

    const isMobile = useIsMobile();

    return (
        <Popover
            disabled={isMobile}
            tooltipClassName={b('popup')}
            content={tooltipContent ?? t('icons:actions.copyToClipboard')}
            placement="top"
            hasArrow
        >
            <CopyToClipboard text={textToCopy} timeout={TIMEOUT}>
                {(status) => children(status)}
            </CopyToClipboard>
        </Popover>
    );
};
