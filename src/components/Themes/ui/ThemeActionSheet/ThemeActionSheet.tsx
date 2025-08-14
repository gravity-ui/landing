import {Flex, Sheet} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';

import './ThemeActionSheet.scss';

const b = block('theme-action-sheet');

interface ThemeActionSheetProps {
    open: boolean;
    onClose: () => void;
    title: string;
    contentClassName?: string;
    bottomContentWrapperClassName?: string;
    children: React.ReactNode;
    bottomContent: React.ReactNode;
}

export const ThemeActionSheet = ({
    open,
    onClose,
    title,
    children,
    bottomContent,
    contentClassName,
    bottomContentWrapperClassName,
}: ThemeActionSheetProps) => {
    return (
        <Sheet visible={open} onClose={onClose} title={title} className={b('', contentClassName)}>
            <Flex direction="column" className={b('sheet-content')}>
                {children}
                <Flex
                    direction="row"
                    gap={2}
                    justifyContent="center"
                    alignItems="center"
                    className={b('bottom-buttons', bottomContentWrapperClassName)}
                >
                    {bottomContent}
                </Flex>
            </Flex>
        </Sheet>
    );
};
