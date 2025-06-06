import {CopyToClipboard, CopyToClipboardStatus, Popover} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {useIsMobile} from '../../hooks/useIsMobile';
import {block} from '../../utils';

import './ClipboardArea.scss';

const b = block('clipboard-area');

const TIMEOUT = 1000;

interface ClipboardAreaProps {
    textToCopy: string;
    tooltipContent?: string;
    children: (status: CopyToClipboardStatus) => React.ReactElement;
    isNeedPopup?: boolean;
}

export const ClipboardArea: React.FC<ClipboardAreaProps> = ({
    textToCopy,
    tooltipContent,
    children,
    isNeedPopup = true,
}) => {
    const {t} = useTranslation();

    const isMobile = useIsMobile();

    return isNeedPopup ? (
        <Popover
            className={b('popover')}
            disabled={isMobile}
            content={tooltipContent ?? t('actions_copyToClipboard')}
            placement="top"
            hasArrow
        >
            <div>
                <CopyToClipboard text={textToCopy} timeout={TIMEOUT}>
                    {(status) => children(status)}
                </CopyToClipboard>
            </div>
        </Popover>
    ) : (
        <CopyToClipboard text={textToCopy} timeout={TIMEOUT}>
            {(status) => children(status)}
        </CopyToClipboard>
    );
};
