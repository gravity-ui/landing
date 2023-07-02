import {ArrowDownToLine, ArrowShapeTurnUpRight, Link} from '@gravity-ui/icons';
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

export const IconDialogActions: React.FC<IconDialogActionsProps> = ({icon, mobile}) => {
    const actionsRef = React.useRef<HTMLDivElement>(null);

    const [isDownloadInProgress, setDownloadInProgress] = React.useState(false);

    // TODO
    const iconUrl = '/todo';

    const downloadSvg = React.useCallback(async () => {
        setDownloadInProgress(true);

        try {
            await downloadFile(buildSvgUrl(icon.meta.svgName), actionsRef.current);
        } finally {
            setDownloadInProgress(false);
        }
    }, [icon]);

    const shareIcon = React.useCallback(async () => {
        if (navigator.canShare()) {
            navigator.share({url: iconUrl});
        } else {
            // TODO copy
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
