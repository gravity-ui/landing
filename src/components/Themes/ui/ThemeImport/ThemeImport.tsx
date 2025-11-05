import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Alert, Flex, TextArea} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useEffect, useState} from 'react';

import {block} from '../../../../utils/block';
import {useImportTheme} from '../../lib/themeCreatorImport';

import './ThemeImport.scss';
import {ThemeImportDialog} from './ThemeImportDialog';
// eslint-disable-next-line import/order
import {ThemeImportSheet} from './ThemeImportSheet';

const b = block('theme-import');

import type {ThemeImportProps} from './types';

export type {ThemeImportProps} from './types';

export const ThemeImport = ({isOpen, onClose}: ThemeImportProps) => {
    const {t} = useTranslation('themes');
    const breakpoint = useWindowBreakpoint();
    const [textareaValue, setTextareaValue] = React.useState('');
    const [isImportError, setIsImportError] = useState(false);
    const [importErrorMessage, setImportErrorMessage] = useState<string>();

    const handleImportError = useCallback((errorMessage?: string) => {
        setImportErrorMessage(errorMessage);
        setIsImportError(true);
    }, []);

    const {importThemeFromUserInput} = useImportTheme({
        onImportError: handleImportError,
        onImportSuccess: onClose,
    });
    const handleImportThemeClick = useCallback(() => {
        importThemeFromUserInput(textareaValue);
    }, [textareaValue, importThemeFromUserInput]);

    const isImportButtonDisabled = !textareaValue.trim();

    useEffect(() => {
        if (!isOpen) {
            setIsImportError(false);
            setTextareaValue('');
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
                placeholder={t('paste_theme_placeholder')}
                className={b('textarea')}
                onUpdate={setTextareaValue}
                value={textareaValue}
                validationState={isImportError ? 'invalid' : undefined}
            />
            {isImportError && (
                <Alert
                    theme="danger"
                    title={t('label_import-error')}
                    message={importErrorMessage}
                />
            )}
        </Flex>
    );

    return breakpoint >= BREAKPOINTS.sm ? (
        <ThemeImportDialog
            onClose={onClose}
            isOpen={isOpen}
            onImportThemeClick={handleImportThemeClick}
            breakpoint={breakpoint}
            isImportButtonDisabled={isImportButtonDisabled}
        >
            {content}
        </ThemeImportDialog>
    ) : (
        <ThemeImportSheet
            onClose={onClose}
            isOpen={isOpen}
            onImportThemeClick={handleImportThemeClick}
            isImportButtonDisabled={isImportButtonDisabled}
        >
            {content}
        </ThemeImportSheet>
    );
};
