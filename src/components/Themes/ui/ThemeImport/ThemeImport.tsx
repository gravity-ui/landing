import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {TextArea} from '@gravity-ui/uikit';
import React, {useCallback} from 'react';

import {block} from '../../../../utils';
import {useImportTheme} from '../../lib/themeCreatorImport';

import './ThemeImport.scss';
import {ThemeImportDialog} from './ThemeImportDialog';
import {ThemeImportSheet} from './ThemeImportSheet';

const b = block('theme-import');

export interface ThemeImportProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ThemeImport = ({isOpen, onClose}: ThemeImportProps) => {
    const breakpoint = useWindowBreakpoint();
    const [textareaValue, setTextareaValue] = React.useState('');
    const {importThemeFromJson} = useImportTheme();

    const handleImportThemeJSONClick = useCallback(() => {
        importThemeFromJson(textareaValue);
        onClose();
        setTextareaValue('');
    }, [textareaValue, onClose, importThemeFromJson]);

    const textarea = (
        <TextArea
            size="xl"
            rows={1}
            placeholder="Paste your theme JSON here"
            className={b('textarea')}
            onUpdate={setTextareaValue}
            value={textareaValue}
        />
    );

    return breakpoint >= BREAKPOINTS.sm ? (
        <ThemeImportDialog
            onClose={onClose}
            isOpen={isOpen}
            onImportThemeJSONClick={handleImportThemeJSONClick}
            breakpoint={breakpoint}
        >
            {textarea}
        </ThemeImportDialog>
    ) : (
        <ThemeImportSheet
            onClose={onClose}
            isOpen={isOpen}
            onImportThemeJSONClick={handleImportThemeJSONClick}
        >
            {textarea}
        </ThemeImportSheet>
    );
};
