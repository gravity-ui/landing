import {Button, Flex} from '@gravity-ui/uikit';
import React, {PropsWithChildren} from 'react';

import {block} from '../../../../utils';
import {ThemeActionDialog} from '../ThemeActionDialog/ThemeActionDialog';

import {ThemeImportProps} from './ThemeImport';
import './ThemeImport.scss';

const b = block('theme-import');

interface ThemeImportDialogProps extends PropsWithChildren, ThemeImportProps {
    onImportThemeJSONClick: () => void;
    breakpoint: number;
}

export const ThemeImportDialog = ({
    isOpen,
    onClose,
    onImportThemeJSONClick,
    breakpoint,
    children,
}: ThemeImportDialogProps) => {
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
                        Cancel
                    </Button>
                    <Button
                        className={b('action-button')}
                        view="action"
                        size="l"
                        onClick={onImportThemeJSONClick}
                    >
                        Import
                    </Button>
                </Flex>
            }
        />
    );
};
