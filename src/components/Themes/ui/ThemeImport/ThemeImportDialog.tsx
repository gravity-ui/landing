import {Button, Flex} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {PropsWithChildren} from 'react';

import {block} from '../../../../utils';
import {ThemeActionDialog} from '../ThemeActionDialog/ThemeActionDialog';

import {ThemeImportProps} from './ThemeImport';
import './ThemeImport.scss';

const b = block('theme-import');

interface ThemeImportDialogProps extends PropsWithChildren, ThemeImportProps {
    onImportThemeClick: () => void;
    breakpoint: number;
    isImportButtonDisabled: boolean;
}

export const ThemeImportDialog = ({
    isOpen,
    onClose,
    onImportThemeClick,
    breakpoint,
    isImportButtonDisabled,
    children,
}: ThemeImportDialogProps) => {
    const {t} = useTranslation('themes');

    return (
        <ThemeActionDialog
            open={isOpen}
            onClose={onClose}
            breakpoint={breakpoint}
            title="Import theme"
            children={children}
            bottomContent={
                <Flex
                    justifyContent="flex-end"
                    alignItems="center"
                    gap={4}
                    className={b('dialog-buttons')}
                >
                    <Button className={b('action-button')} view="flat" size="l" onClick={onClose}>
                        {t('cancel')}
                    </Button>
                    <Button
                        className={b('action-button')}
                        view="action"
                        size="l"
                        onClick={onImportThemeClick}
                        disabled={isImportButtonDisabled}
                    >
                        {t('btn_import_theme')}
                    </Button>
                </Flex>
            }
        />
    );
};
