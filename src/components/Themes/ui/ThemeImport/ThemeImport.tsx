import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Alert, Flex, Text, TextArea} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useEffect, useState} from 'react';

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
    const {t} = useTranslation('themes');
    const breakpoint = useWindowBreakpoint();
    const [textareaValue, setTextareaValue] = React.useState('');
    const [isImportError, setIsImportError] = useState(false);

    const handleImportError = useCallback(() => {
        onClose();
        setTextareaValue('');
    }, [onClose]);

    const {importThemeFromUserInput} = useImportTheme({onImportError: handleImportError});
    const handleImportThemeJSONClick = useCallback(() => {
        importThemeFromUserInput(textareaValue);
        onClose();
        setTextareaValue('');
    }, [textareaValue, onClose, importThemeFromUserInput]);

    useEffect(() => {
        if (!isOpen) {
            setIsImportError(false);
        }
    }, [isOpen]);

    const content = (
        <Flex direction="column" gap={2}>
            <Flex direction="column" gap={4}>
                <Alert theme="info" title={t('title_theme-import')} />
            </Flex>
            <TextArea
                size="xl"
                rows={1}
                placeholder="Paste your theme JSON here"
                className={b('textarea')}
                onUpdate={setTextareaValue}
                value={textareaValue}
                validationState={isImportError ? 'invalid' : undefined}
            />
            {isImportError && (
                <Text variant="body-2" color="danger">
                    {t('label_import-error')}
                </Text>
            )}
        </Flex>
    );

    return breakpoint >= BREAKPOINTS.sm ? (
        <ThemeImportDialog
            onClose={onClose}
            isOpen={isOpen}
            onImportThemeJSONClick={handleImportThemeJSONClick}
            breakpoint={breakpoint}
        >
            {content}
        </ThemeImportDialog>
    ) : (
        <ThemeImportSheet
            onClose={onClose}
            isOpen={isOpen}
            onImportThemeJSONClick={handleImportThemeJSONClick}
        >
            {content}
        </ThemeImportSheet>
    );
};
