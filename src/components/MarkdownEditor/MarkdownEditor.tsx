import {
    MarkdownEditorView,
    markupToolbarConfigs,
    useMarkdownEditor,
    wToolbarConfig,
} from '@gravity-ui/markdown-editor';
import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Button, ThemeProvider} from '@gravity-ui/uikit';
import {toaster} from '@gravity-ui/uikit/toaster-singleton-react-18';
import {useTranslation} from 'next-i18next';
import React, {useEffect, useRef} from 'react';

import {main} from '../../content/markdown-editor/main';
import {EnvironmentContext} from '../../contexts';
import {block, getLocaleLink} from '../../utils';

import './MarkdownEditor.scss';
import {useSticky} from './hooks';
import './yfm.scss';

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

    // FIXME: This is a temporary solution, will be fixed after
    // https://github.com/gravity-ui/markdown-editor/pull/369 */
    const toolbarRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const element = document.querySelector<HTMLElement>('.g-md-editor-component__toolbar');
        if (element) {
            toolbarRef.current = element;
        }
    }, []);
    const sticky = useSticky(toolbarRef);

    return (
        <MarkdownEditorView
            autofocus
            toaster={toaster}
            className={b({sticky})}
            stickyToolbar={false}
            wysiwygToolbarConfig={wToolbarConfig}
            markupToolbarConfig={markupToolbarConfigs.mToolbarConfig}
            settingsVisible
            editor={editor}
        />
    );
}

export const MarkdownEditor = () => {
    const {t, i18n} = useTranslation('markdown-editor');
    const {isClient} = React.useContext(EnvironmentContext);

    return (
        <Grid className={b()}>
            <Row className={b('title')}>
                <Col sizes={12} className={b('heading')}>
                    <h1 className={b('title')}>{t('title')}</h1>
                    <div className={b('actions')}>
                        <Button
                            href={getLocaleLink('/libraries/markdown-editor', i18n)}
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
                    {isClient && (
                        <ThemeProvider theme="dark">
                            <Editor />
                        </ThemeProvider>
                    )}
                </Col>
            </Row>
        </Grid>
    );
};
