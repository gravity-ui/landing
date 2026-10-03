import {ChartData} from '@gravity-ui/charts';
import {Button, Flex, Hotkey, Text} from '@gravity-ui/uikit';
import {Editor as MonacoEditor, OnMount} from '@monaco-editor/react';
// Type-only: importing values from `monaco-editor` would bundle the whole package, which
// @monaco-editor/react already loads separately at runtime. Key codes come from the
// monaco instance handed to onMount instead.
import type {editor} from 'monaco-editor';
import {useTranslation} from 'next-i18next';
import React, {FC, useCallback, useRef, useState} from 'react';

import {block} from '../../../utils';

import './Editor.scss';
import {GravityTheme, defineTheme} from './theme';

const b = block('editor');

const MONACO_OPTIONS: editor.IStandaloneEditorConstructionOptions = {
    contextmenu: false,
    lineNumbersMinChars: 4,
    glyphMargin: false,
    colorDecorators: true,
    minimap: {enabled: false},
    smoothScrolling: true,
    bracketPairColorization: {enabled: true},
};

type Props = {
    data: ChartData;
    onApplyChanges: (data: ChartData) => void;
    onReset: () => ChartData;
};

export const Editor: FC<Props> = ({data, onApplyChanges, onReset}) => {
    const {t} = useTranslation('charts');
    const editorRef = useRef<Parameters<OnMount>[0]>();
    const [errorMarker, setErrorMarker] = useState<editor.IMarker>();

    const handleApplyChanges = useCallback(() => {
        const model = editorRef.current?.getModel();

        if (model) {
            onApplyChanges(JSON.parse(model.getValue()));
        }
    }, []);

    const handleReset = useCallback(() => {
        const newData = onReset();
        editorRef.current?.setValue(JSON.stringify(newData, null, 2));
    }, [handleApplyChanges]);

    const handleErrorMarkerClick = useCallback(() => {
        if (errorMarker) {
            const {startColumn, startLineNumber, endColumn, endLineNumber} = errorMarker;

            editorRef.current?.revealLinesInCenter(startLineNumber, endLineNumber, 0);

            editorRef.current?.setSelection({
                startColumn,
                startLineNumber,
                endColumn,
                endLineNumber,
            });
        }
    }, [errorMarker]);

    const handleValidate = useCallback(
        (markers: editor.IMarker[]) =>
            setErrorMarker(markers.filter(({severity}) => severity === 8)[0]),
        [],
    );

    const handleMount = useCallback<OnMount>(
        (editor, monaco) => {
            editorRef.current = editor;
            editor.setValue(JSON.stringify(data, null, 2));
            // eslint-disable-next-line no-bitwise
            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, handleApplyChanges);
        },
        [data],
    );

    return (
        <Flex direction="column" width="100%" className={b()}>
            <MonacoEditor
                beforeMount={defineTheme}
                onMount={handleMount}
                onValidate={handleValidate}
                language="json"
                theme={GravityTheme}
                options={MONACO_OPTIONS}
            />
            <Flex gap={2} className={b('actions')}>
                <Button
                    size="l"
                    view="action"
                    disabled={Boolean(errorMarker)}
                    onClick={handleApplyChanges}
                >
                    {t('apply')} <Hotkey view="light" value="mod+enter" />
                </Button>
                <Button size="l" onClick={handleReset}>
                    {t('reset')}
                </Button>
                {errorMarker && (
                    <Flex grow={1} alignItems="center" justifyContent="flex-end">
                        <Text color="danger">
                            <span style={{cursor: 'pointer'}} onClick={handleErrorMarkerClick}>
                                {errorMarker.message}
                            </span>
                        </Text>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};
