import {ArrowDownToLine, ArrowShapeTurnUpRight, Link} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import type {IconItem} from '../../IconCollection/types';

import './IconDialogActions.scss';

const b = block('icon-dialog-actions');

interface IconDialogActionsProps {
    icon: IconItem;
    mobile?: boolean;
}

export const IconDialogActions: React.FC<IconDialogActionsProps> = ({mobile}) => {
    return (
        <div className={b()}>
            {mobile ? (
                <Button view="action" size="xl" width="max">
                    <Icon data={ArrowShapeTurnUpRight} size={16} />
                    Share
                </Button>
            ) : (
                <>
                    <Button view="flat-contrast" size="xl">
                        <Icon data={ArrowDownToLine} size={20} />
                        Download SVG
                    </Button>
                    <Button view="action" size="xl">
                        <Icon data={Link} size={16} />
                        Copy Link
                    </Button>
                </>
            )}
        </div>
    );
};
