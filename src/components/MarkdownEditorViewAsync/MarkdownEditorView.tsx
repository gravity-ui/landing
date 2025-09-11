import type {MarkdownEditorPreset, UseMarkdownEditorProps} from '@gravity-ui/markdown-editor';
import {
    MarkdownEditorView as MarkdownEditorViewBase,
    useMarkdownEditor,
} from '@gravity-ui/markdown-editor';
import React, {useCallback} from 'react';

type MarkdownEditorViewProps = {
    autofocus?: boolean;
    allowHTML?: boolean;
    preset?: MarkdownEditorPreset;
    value?: string;
    onChange?: (event: string) => void;
    className?: string;
    stickyToolbar?: boolean;
    markdownEditorProps?: UseMarkdownEditorProps;
};

export const MarkdownEditorView: React.FC<MarkdownEditorViewProps> = ({
    allowHTML,
    value,
    onChange,
    preset,
    autofocus,
    className,
    stickyToolbar = true,
    markdownEditorProps,
}) => {
    const editor = useMarkdownEditor({
        ...markdownEditorProps,
        md: {
            html: allowHTML,
            ...markdownEditorProps?.md,
        },
        initial: {
            toolbarVisible: true,
            markup: value,
            ...markdownEditorProps?.initial,
        },
        preset,
    });

    const handleChange = useCallback(() => {
        onChange?.(editor.getValue());
    }, [editor, onChange]);

    React.useEffect(() => {
        editor.on('change', handleChange);
        return () => {
            editor.off('change', handleChange);
        };
    }, [editor, handleChange]);

    return (
        <MarkdownEditorViewBase
            autofocus={autofocus}
            editor={editor}
            stickyToolbar={stickyToolbar}
            className={className}
        />
    );
};
