import {Dialog, Sheet} from 'landing-uikit';
import React from 'react';

import {useIsMobile} from '../../../hooks/useIsMobile';
import {block} from '../../../utils';
import type {IconItem} from '../types';

import {IconBody} from './IconBody/IconBody';
import './IconDialog.scss';
import {IconDialogActions} from './IconDialogActions/IconDialogActions';

const b = block('icon-dialog');

interface IconDialogProps {
    isOpen: boolean;
    icon?: IconItem;
    onClickToKeyword?: (keyword: string) => void;
    onClose: () => void;
}

export const IconDialog: React.FC<IconDialogProps> = ({
    isOpen,
    icon,
    onClose,
    onClickToKeyword,
}) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Sheet
                className={b()}
                contentClassName={b('sheet-content')}
                visible={isOpen}
                onClose={onClose}
            >
                {icon && (
                    <React.Fragment>
                        <IconBody icon={icon} onClickToKeyword={onClickToKeyword} />
                        <IconDialogActions icon={icon} mobile={true} />
                    </React.Fragment>
                )}
            </Sheet>
        );
    }

    return (
        <Dialog className={b()} size="s" open={isOpen} onClose={onClose}>
            {icon && (
                <React.Fragment>
                    <IconBody icon={icon} onClickToKeyword={onClickToKeyword} />
                    <IconDialogActions icon={icon} />
                </React.Fragment>
            )}
        </Dialog>
    );
};
