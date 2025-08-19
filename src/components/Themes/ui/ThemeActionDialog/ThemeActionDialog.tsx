import {BREAKPOINTS} from '@gravity-ui/page-constructor';
import {Dialog, Flex} from '@gravity-ui/uikit';
import React from 'react';

const breakpointToSize = {
    [BREAKPOINTS.xl]: 'l' as const,
    [BREAKPOINTS.lg]: 'l' as const,
    [BREAKPOINTS.md]: 'm' as const,
    [BREAKPOINTS.sm]: 's' as const,
};

export interface ThemeActionDialogProps {
    title: string;
    open: boolean;
    onClose: () => void;
    breakpoint: number;
    children: React.ReactNode;
    bottomContent: React.ReactNode;
}

export const ThemeActionDialog: React.FC<ThemeActionDialogProps> = ({
    title,
    open,
    onClose,
    breakpoint,
    children,
    bottomContent,
}) => {
    return (
        <Dialog open={open} onClose={onClose} size={breakpointToSize[breakpoint]}>
            <Dialog.Header caption={title} />
            <Dialog.Body>
                <Flex direction="column" gap={4}>
                    {children}
                    {bottomContent}
                </Flex>
            </Dialog.Body>
        </Dialog>
    );
};
