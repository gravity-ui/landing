'use client';
import {Clock, Folder, LayoutTabs, TrashBin} from '@gravity-ui/icons';
import {MarkdownEditorView, useMarkdownEditor} from '@gravity-ui/markdown-editor';
import {Button, Col, Container, Flex, Icon, Link, Row, ThemeProvider} from '@gravity-ui/uikit';
import {toaster} from '@gravity-ui/uikit/toaster-singleton-react-18';
import {useEffect, useState} from 'react';

import figmaIcon from '../../../../assets/icons/figma-fill.svg';
import {block} from '../../../../utils';

import './Email.scss';

const b = block('examples-email');

type EmailProps = {};

// @todo-opensourcenight Make email page
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20225&t=cBOGiZgT0jwhnCOY-4
export const Email: React.FC<EmailProps> = () => {
    const editor = useMarkdownEditor({allowHTML: false});
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setReady(true);
    });
    return (
        <ThemeProvider theme="dark">
            <div className={b('what')}>
                <main className={b('main')}>
                    <Container>
                        <Row space={0} className={b('container')}>
                            <Col s="3" className={b('navigation')}>
                                what
                            </Col>
                            <Col s="4" className={b('mail-list')}>
                                the
                            </Col>
                            <Col s="5" className={b('mail-content')}>
                                <Row space={0} className={b('icons')}>
                                    <Col s="12" className={b('left-icons')}>
                                        <Flex>
                                            <Folder />
                                            <LayoutTabs />
                                            <TrashBin />
                                            <Clock />
                                        </Flex>
                                    </Col>
                                </Row>

                                <Row space={0} className={b('name-container')}>
                                    Имя и дата
                                </Row>
                                <Row space={0} className={b('mail-text')}>
                                    Текст
                                </Row>
                                <Row space={0} className={b('markdown-panel')}>
                                    {ready ? (
                                        <MarkdownEditorView
                                            stickyToolbar
                                            autofocus
                                            toaster={toaster}
                                            editor={editor}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </main>

                <footer className={b('footer')}>
                    <Link href={'/examples'}>Open in Examples page</Link>
                    <Link href={'/examples/email'}>Open in Separate page</Link>
                    <Button
                        key="figma"
                        className={b('button')}
                        view="action"
                        size="xl"
                        href={
                            'https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20225&t=cBOGiZgT0jwhnCOY-4'
                        }
                        target="_blank"
                    >
                        <Icon className={b('button-icon')} data={figmaIcon} size={16} />
                        <span>Open Figma</span>
                    </Button>
                </footer>
            </div>
        </ThemeProvider>
    );
};
