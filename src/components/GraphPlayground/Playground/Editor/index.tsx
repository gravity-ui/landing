import {TBlock, TBlockId, TConnection} from '@gravity-ui/graph';
import {Button, Flex, Hotkey, Text} from '@gravity-ui/uikit';
import {Editor, OnMount, OnValidate, loader} from '@monaco-editor/react';
import {KeyCode, KeyMod} from 'monaco-editor/esm/vs/editor/editor.api';
import React, {Ref, useCallback, useImperativeHandle, useRef, useState} from 'react';

import {block} from '../../../../utils';

import './Editor.scss';
import {defineConigSchema} from './schema';
import {GravityTheme, defineTheme} from './theme';
import {findBlockPositionsMonaco} from './utils';

loader.init().then((monaco) => {
    defineTheme(monaco);
    defineConigSchema(monaco);
});

const b = block('editor');

export interface ConfigEditorController {
    scrollTo: (blockId: TBlockId) => void;
    updateBlocks: (block: TBlock[]) => void;
    setContent: (p: {blocks: TBlock[]; connections: TConnection[]}) => void;
}

type ConfigEditorProps = {
    onChange?: (config: {blocks: TBlock[]; connections: TConnection[]}) => void;
    addBlock?: () => void;
};

type ExtractTypeFromArray<T> = T extends Array<infer E> ? E : never;

export const ConfigEditor = React.forwardRef(function ConfigEditor(
    props: ConfigEditorProps,
    ref: Ref<ConfigEditorController>,
) {
    const [errorMarker, setErrorMarker] =
        useState<ExtractTypeFromArray<Parameters<OnValidate>[0]>>();

    const monacoRef = useRef<Parameters<OnMount>[0]>();

    const valueRef = useRef<{blocks: TBlock[]; connections: TConnection[]}>({
        blocks: [],
        connections: [],
    });

    useImperativeHandle(ref, () => ({
        scrollTo: (blockId) => {
            if (!monacoRef.current) {
                return;
            }
            const model = monacoRef.current.getModel();
            const range = findBlockPositionsMonaco(model!, blockId);

            if (range?.start.column) {
                monacoRef.current?.revealLinesInCenter(
                    range.start.lineNumber,
                    range.end.lineNumber,
                    0,
                );
            }

            monacoRef.current.setSelection({
                startColumn: range.start.column,
                startLineNumber: range.start.lineNumber,
                endColumn: range.end.column,
                endLineNumber: range.end.lineNumber,
            });
        },
        updateBlocks: (blocks: TBlock[]) => {
            const model = monacoRef.current?.getModel();
            if (!model) {
                return;
            }
            const edits = blocks.map((block) => {
                const range = findBlockPositionsMonaco(model, block.id);
                const text = JSON.stringify({block: [block]}, null, 2);
                return {
                    range: {
                        startColumn: range.start.column,
                        startLineNumber: range.start.lineNumber,
                        endColumn: range.end.column,
                        endLineNumber: range.end.lineNumber,
                    },
                    text: text.slice(19, text.length - 6),
                };
            });

            model.applyEdits(edits);
        },
        setContent: ({blocks, connections}) => {
            valueRef.current = {
                blocks,
                connections,
            };
            if (!monacoRef.current) {
                return;
            }
            monacoRef.current?.setValue(JSON.stringify(valueRef.current, null, 2));
        },
    }));

    const applyChanges = useCallback(() => {
        const model = monacoRef.current?.getModel();
        if (!model) {
            return;
        }
        try {
            const data = JSON.parse(model.getValue());
            props?.onChange?.({blocks: data.blocks, connections: data.conections});
        } catch (e) {
            console.error(e);
        }
    }, [monacoRef]);

    return (
        <Flex direction="column" className={b()}>
            <Flex grow={1}>
                <Editor
                    onMount={(editor) => {
                        monacoRef.current = editor;
                        monacoRef.current?.setValue(JSON.stringify(valueRef.current, null, 2));
                        // eslint-disable-next-line no-bitwise
                        editor.addCommand(KeyMod.CtrlCmd | KeyCode.Enter, applyChanges);
                    }}
                    onValidate={(markers) => {
                        setErrorMarker(markers.filter((m) => m.severity === 8)[0] || null);
                    }}
                    language={'json'}
                    theme={GravityTheme}
                    options={{
                        contextmenu: false,
                        lineNumbersMinChars: 4,
                        glyphMargin: false,
                        fontSize: 18,
                        lineHeight: 20,
                        colorDecorators: true,
                        minimap: {enabled: false},
                        smoothScrolling: true,
                        // @ts-ignore
                        'bracketPairColorization.editor': true,
                    }}
                />
            </Flex>
            <Flex className={b('actions')} gap={3}>
                <Button
                    size="l"
                    disabled={Boolean(errorMarker)}
                    view="action"
                    onClick={applyChanges}
                >
                    Apply <Hotkey className={b('hotkey')} view="light" value="mod+enter" />
                </Button>
                <Button size="l" disabled={Boolean(errorMarker)} onClick={props.addBlock}>
                    Add Block
                </Button>
                {errorMarker && (
                    <Flex grow={1} alignItems="center" justifyContent="flex-end">
                        <Text color="danger">
                            <span
                                style={{cursor: 'pointer'}}
                                onClick={() => {
                                    monacoRef.current?.revealLinesInCenter(
                                        errorMarker.startLineNumber,
                                        errorMarker.endLineNumber,
                                        0,
                                    );

                                    monacoRef.current?.setSelection({
                                        startColumn: errorMarker.startColumn,
                                        startLineNumber: errorMarker.startLineNumber,
                                        endColumn: errorMarker.endColumn,
                                        endLineNumber: errorMarker.endLineNumber,
                                    });
                                }}
                            >
                                {errorMarker.message}
                            </span>
                        </Text>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
});
