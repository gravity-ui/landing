import {
    Timeline as GravityTimeline,
    TimeLineConfig,
    TimelineEvent,
    TimelineMarker,
    TimelineSection,
} from '@gravity-ui/timeline';
import {Button, Flex, Hotkey, Text} from '@gravity-ui/uikit';
import {Editor as MonacoEditor, OnMount, useMonaco} from '@monaco-editor/react';
import cloneDeep from 'lodash/cloneDeep';
import {KeyCode, KeyMod, editor} from 'monaco-editor';
import {TFunction} from 'next-i18next';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';

import {block} from '../../../utils';

import './Editor.scss';
import {initialState} from './constants';
import {defineTimelineConfigSchema} from './schema';
import {GravityTheme, defineTheme} from './theme';

const b = block('editor');

type Props = {
    timeline: GravityTimeline<TimelineEvent, TimelineMarker, TimelineSection>;
    t: TFunction;
};

export const Editor: FC<Props> = ({timeline, t}) => {
    const monaco = useMonaco();
    const monacoRef = useRef<Parameters<OnMount>[0]>();
    const valueRef = useRef(cloneDeep(initialState));
    const [errorMarker, setErrorMarker] = useState<editor.IMarker>();

    useEffect(() => {
        if (monaco) {
            defineTimelineConfigSchema(monaco);
        }
    }, [monaco]);

    const handleBeforeMount = (monacoInstance: typeof monaco) => {
        if (monacoInstance) {
            defineTheme(monacoInstance);
        }
    };

    const handleApplyChanges = useCallback(() => {
        const model = monacoRef.current?.getModel();
        if (!model) {
            return;
        }
        try {
            const {
                settings: {start, end, axes, events, markers, sections},
                viewConfiguration,
            }: TimeLineConfig<TimelineEvent, TimelineMarker, TimelineSection> = JSON.parse(
                model.getValue(),
            );

            const currentConfig = timeline.settings;

            if (currentConfig.start !== start || currentConfig.end !== end) {
                timeline.api.setRange(start, end);
            }

            timeline.api.setAxes(axes);
            timeline.api.setEvents(events);
            timeline.api.setMarkers(markers || []);
            timeline.api.setSections(sections || []);
            timeline.api.setViewConfiguration(viewConfiguration || {});
        } catch (e) {
            console.error(e);
        }
    }, [timeline]);

    const handleReset = useCallback(() => {
        monacoRef.current?.setValue(JSON.stringify(initialState, null, 2));
        handleApplyChanges();
    }, [handleApplyChanges]);

    return (
        <div className={b()}>
            <MonacoEditor
                className={b('monaco')}
                beforeMount={handleBeforeMount}
                onMount={(editor) => {
                    monacoRef.current = editor;
                    monacoRef.current?.setValue(JSON.stringify(valueRef.current, null, 2));
                    // eslint-disable-next-line no-bitwise
                    editor.addCommand(KeyMod.CtrlCmd | KeyCode.Enter, handleApplyChanges);
                    handleApplyChanges();
                }}
                onValidate={(markers) => {
                    setErrorMarker(markers.filter((m) => m.severity === 8)[0]);
                }}
                language={'json'}
                theme={GravityTheme}
                options={{
                    contextmenu: false,
                    lineNumbersMinChars: 4,
                    glyphMargin: false,
                    colorDecorators: true,
                    minimap: {enabled: false},
                    smoothScrolling: true,
                    bracketPairColorization: {enabled: true},
                }}
            />
            <Flex gap={2} className={b('actions')}>
                <Button
                    size="l"
                    view="action"
                    disabled={Boolean(errorMarker)}
                    onClick={handleApplyChanges}
                >
                    {t('apply')} <Hotkey className={b('hotkey')} view="light" value="mod+enter" />
                </Button>
                <Button size="l" onClick={handleReset}>
                    {t('reset')}
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
        </div>
    );
};
