import {ArrowDownToLine, ArrowShapeTurnUpRight, Link} from '@gravity-ui/icons';
import {Button, CopyToClipboard, Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {downloadFile} from '../../../../utils/browser';
import {iconsLibrary} from '../../constants';
import type {IconItem} from '../../types';

import './IconDialogActions.scss';

const b = block('icon-dialog-actions');

interface IconDialogActionsProps {
    icon: IconItem;
    mobile?: boolean;
}

const buildSvgUrl = (svgName: string) =>
    `https://raw.githubusercontent.com/${iconsLibrary.config.githubId}/main/svgs/${svgName}.svg`;

const buildIconUrl = (iconName: string) => `${window.location.origin}/icons?icon=${iconName}`;

export const IconDialogActions: React.FC<IconDialogActionsProps> = ({icon, mobile}) => {
    const actionsRef = React.useRef<HTMLDivElement>(null);

    const [isDownloadInProgress, setDownloadInProgress] = React.useState(false);

    const iconUrl = React.useMemo(() => buildIconUrl(icon.name), [icon]);

    const downloadSvg = React.useCallback(async () => {
        setDownloadInProgress(true);

        try {
            await downloadFile(buildSvgUrl(icon.meta.svgName), actionsRef.current);
        } finally {
            setDownloadInProgress(false);
        }
    }, [icon]);

    const shareIcon = React.useCallback(async () => {
        const shareData = {url: iconUrl, title: 'Gravity UI'};

        if (navigator.share && navigator.canShare?.(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (_) {
                // note: ignore the exception because only AbortError can be raised
            }
        } else {
            await navigator.clipboard.writeText(iconUrl);
        }
    }, [iconUrl]);

    return (
        <div className={b()} ref={actionsRef}>
            {mobile ? (
                <Button view="action" size="xl" width="max" onClick={shareIcon}>
                    <Icon data={ArrowShapeTurnUpRight} size={16} />
                    Share
                </Button>
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
                    <CopyToClipboard text={iconUrl} timeout={0}>
                        {() => (
                            <Button view="action" size="xl">
                                <Icon data={Link} size={16} />
                                Copy Link
                            </Button>
                        )}
                    </CopyToClipboard>
                </>
            )}
        </div>
    );
};
