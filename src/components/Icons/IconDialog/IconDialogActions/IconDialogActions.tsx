import {ArrowDownToLine, ArrowShapeTurnUpRight, Check, Link} from '@gravity-ui/icons';
import {Button, CopyToClipboard, Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {downloadFile} from '../../../../utils/browser';
import type {IconItem} from '../../types';

import './IconDialogActions.scss';

const b = block('icon-dialog-actions');

interface IconDialogActionsProps {
    icon: IconItem;
    mobile?: boolean;
}

const buildSvgUrl = (svgName: string) =>
    `https://raw.githubusercontent.com/gravity-ui/icons/main/svgs/${svgName}.svg`;

const buildIconUrl = (iconName: string) => `${window.location.origin}/icons?icon=${iconName}`;

export const IconDialogActions: React.FC<IconDialogActionsProps> = ({icon, mobile}) => {
    const actionsRef = React.useRef<HTMLDivElement>(null);

    const [isDownloadInProgress, setDownloadInProgress] = React.useState(false);

    const iconUrl = React.useMemo(() => buildIconUrl(icon.name), [icon]);
    const sharingData = React.useMemo(() => ({url: iconUrl, title: 'Gravity UI'}), [iconUrl]);
    const canShare = React.useMemo(() => navigator.canShare?.(sharingData), [sharingData]);

    const downloadSvg = React.useCallback(async () => {
        setDownloadInProgress(true);

        try {
            await downloadFile(buildSvgUrl(icon.meta.svgName), actionsRef.current);
        } finally {
            setDownloadInProgress(false);
        }
    }, [icon]);

    const handleShareIcon = React.useCallback(async () => {
        if (canShare) {
            try {
                await navigator.share(sharingData);
            } catch (_) {
                // note: ignore the exception because only AbortError can be raised
            }
        } else {
            await navigator.clipboard.writeText(iconUrl);
        }
    }, [canShare, sharingData, iconUrl]);

    const copyLinkAction = React.useMemo(
        () => (
            <CopyToClipboard text={iconUrl} timeout={1000}>
                {(state) => {
                    const isCopied = state === 'success';

                    return (
                        <Button
                            view={isCopied ? 'normal-contrast' : 'action'}
                            size="xl"
                            className={b('copy-action')}
                        >
                            <Icon data={isCopied ? Check : Link} size={16} />
                            {isCopied ? 'Copied' : 'Copy Link'}
                        </Button>
                    );
                }}
            </CopyToClipboard>
        ),
        [iconUrl],
    );

    const shareAction = React.useMemo(() => {
        if (canShare) {
            return (
                <Button view="action" size="xl" onClick={handleShareIcon}>
                    <Icon data={ArrowShapeTurnUpRight} size={16} />
                    Share
                </Button>
            );
        }

        return copyLinkAction;
    }, [canShare, copyLinkAction, handleShareIcon]);

    return (
        <div className={b()} ref={actionsRef}>
            {mobile ? (
                shareAction
            ) : (
                <>
                    <Button
                        view="flat-contrast"
                        size="xl"
                        onClick={downloadSvg}
                        loading={isDownloadInProgress}
                    >
                        <Icon data={ArrowDownToLine} size={20} />
                        Download SVG
                    </Button>
                    {copyLinkAction}
                </>
            )}
        </div>
    );
};
