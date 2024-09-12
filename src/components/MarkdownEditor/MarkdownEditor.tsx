import {useMarkdownEditor, wToolbarConfig} from '@gravity-ui/markdown-editor';
import {mToolbarConfig} from '@gravity-ui/markdown-editor/_/bundle/config/markup.js';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, Icon, ThemeProvider} from '@gravity-ui/uikit';
import {toaster} from '@gravity-ui/uikit/toaster-singleton-react-18';
import {ArrowUpRightFromSquare} from 'landing-icons';
import {useTranslation} from 'next-i18next';
import dynamic from 'next/dynamic';
import React from 'react';

import {main} from '../../content/markdown-editor/main';
import {block, getLocaleLink} from '../../utils';

import './MarkdownEditor.scss';
import './yfm.scss';

const MarkdownEditorView = dynamic(
    () => import('@gravity-ui/markdown-editor').then((mod) => mod.MarkdownEditorView),
    {ssr: false},
);

const b = block('markdown-editor');

function Editor() {
    const editor = useMarkdownEditor({
        initialEditorMode: 'wysiwyg',
        initialToolbarVisible: true,
        allowHTML: false,
        linkify: true,
        breaks: true,
        initialMarkup: main,
    });

    return (
        <MarkdownEditorView
            autofocus
            toaster={toaster}
            className={b()}
            stickyToolbar
            wysiwygToolbarConfig={wToolbarConfig}
            markupToolbarConfig={mToolbarConfig}
            settingsVisible
            editor={editor}
        />
    );
}

// FIXME:
//  - бекраунд у плавающих сеттингс

export const MarkdownEditor = () => {
    const {t, i18n} = useTranslation('markdown-editor');

    return (
        <Grid className={b()}>
            <Row className={b('title')}>
                <Col sizes={12} className={b('heading')}>
                    <h1 className={b('title')}>{t('title')}</h1>
                    <div className={b('actions')}>
                        <Button
                            href={getLocaleLink('/libraries/markdown-editor', i18n)}
                            target="_blank"
                            className={b('library-button')}
                            size="xl"
                            view="outlined-contrast"
                        >
                            {t('goToLibrary')}
                            <Icon data={ArrowUpRightFromSquare} size={16} />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sizes={12}>
                    <ThemeProvider theme="dark">
                        <Editor />
                    </ThemeProvider>
                </Col>
            </Row>
        </Grid>
    );
};
