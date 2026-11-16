import {Flex} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils/block';
import {ThemeActionDialog} from '../ThemeActionDialog/ThemeActionDialog';

const b = block('theme-submit');

interface ThemeSubmitDialogProps extends React.PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    buttons: React.ReactNode;
    breakpoint: number;
}

export const ThemeSubmitDialog = ({
    isOpen,
    onClose,
    breakpoint,
    buttons,
    children,
}: ThemeSubmitDialogProps) => {
    const {t} = useTranslation('themes');
    return (
        <ThemeActionDialog
            open={isOpen}
            onClose={onClose}
            title={t('submit_theme_title')}
            breakpoint={breakpoint}
            bottomContent={
                <Flex
                    gap={2}
                    width="100%"
                    justifyContent="flex-end"
                    className={b('dialog-buttons')}
                >
                    {buttons}
                </Flex>
            }
        >
            {children}
        </ThemeActionDialog>
    );
};
