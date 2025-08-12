import {Button} from '@gravity-ui/uikit';
import React, {PropsWithChildren} from 'react';

import {block} from '../../../../utils';
import {ThemeActionSheet} from '../ThemeActionSheet/ThemeActionSheet';

import {ThemeImportProps} from './ThemeImport';
import './ThemeImport.scss';

const b = block('theme-import__sheet');

export interface ThemeImportSheetProps extends ThemeImportProps, PropsWithChildren {
    onImportThemeJSONClick: () => void;
}

export const ThemeImportSheet = ({
    isOpen,
    onClose,
    children,
    onImportThemeJSONClick,
}: ThemeImportSheetProps) => {
    return (
        <ThemeActionSheet
            open={isOpen}
            onClose={onClose}
            title="Import theme"
            contentClassName={b('content')}
            bottomContentWrapperClassName={b('import-button-wrapper')}
            children={children}
            bottomContent={
                <Button
                    size="xl"
                    onClick={onImportThemeJSONClick}
                    view="action"
                    className={b('import-button')}
                >
                    Import
                </Button>
            }
        />
    );
};
