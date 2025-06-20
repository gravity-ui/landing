import {LogoTelegram} from '@gravity-ui/icons';
import {MarkdownEditorView, useMarkdownEditor} from '@gravity-ui/markdown-editor';
import {Button, Flex, Switch} from '@gravity-ui/uikit';
import {useEffect} from 'react';
import {block} from 'src/utils';

import {getBlockName} from '../../cn';

import './ReplyEditor.scss';

const b = block(getBlockName('reply-editor'));

export const ReplyEditor = ({reply}: {reply: string}) => {
    const editor = useMarkdownEditor({
        initial: {
            mode: 'markup',
            toolbarVisible: true,
            markup: reply,
        },
        md: {
            html: true,
            linkify: true,
            breaks: true,
        },
    });

    useEffect(() => {
        editor.replace(reply);
    }, [reply]);

    return (
        <Flex gap={3} spacing={{p: 4}} direction="column" className={b()}>
            <Flex overflow="hidden" grow>
                <MarkdownEditorView stickyToolbar editor={editor} className={b('editor')} />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
                <Switch defaultChecked={false} content="Mute this thread" />
                <Button view="action">
                    <Button.Icon>
                        <LogoTelegram />
                    </Button.Icon>
                    Send
                </Button>
            </Flex>
        </Flex>
    );
};
