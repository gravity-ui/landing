import {MarkdownEditorView, useMarkdownEditor} from '@gravity-ui/markdown-editor';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, ThemeProvider, ToasterProvider} from '@gravity-ui/uikit';
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
import {useTranslation} from 'next-i18next';
import React, {useRef} from 'react';

import {main} from '../../content/markdown-editor/main';
import {block} from '../../utils';

import './MarkdownEditor.scss';
import {useStickyToolbar} from './hooks';
import './yfm.scss';

const b = block('markdown-editor');

function Editor() {
    const editor = useMarkdownEditor({
        initial: {
            mode: 'wysiwyg',
            toolbarVisible: true,
            markup: main,
        },
        md: {
            html: true,
            linkify: true,
            breaks: true,
        },
    });

    const rootRef = useRef<HTMLDivElement>(null);
    const sticky = useStickyToolbar(rootRef);

    return (
        <MarkdownEditorView
            ref={rootRef}
            autofocus
            className={b({sticky})}
            stickyToolbar={false}
            settingsVisible
            editor={editor}
        />
    );
}

export const MarkdownEditor = () => {
    const {t} = useTranslation('markdown-editor');

    return (
        <Grid className={b()}>
            <Row className={b('title')}>
                <Col sizes={12} className={b('heading')}>
                    <h1 className={b('title')}>{t('title')}</h1>
                    <div className={b('actions')}>
                        <Button
                            href={'/libraries/markdown-editor'}
                            className={b('library-button')}
                            size="xl"
                            view="outlined-contrast"
                        >
                            {t('goToLibrary')}
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sizes={12}>
                    <ThemeProvider theme="dark">
                        <ToasterProvider toaster={toaster}>
                            <Editor />
                        </ToasterProvider>
                    </ThemeProvider>
                </Col>
            </Row>
        </Grid>
    );
};
