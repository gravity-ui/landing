import {LogoTelegram} from '@gravity-ui/icons';
import {Button, Flex, Switch} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import {MarkdownEditorViewAsync} from '../../../../MarkdownEditorViewAsync';
import {getBlockName} from '../../cn';

import './ReplyEditor.scss';

const b = block(getBlockName('reply-editor'));

export const ReplyEditor = ({reply}: {reply: string}) => {
    return (
        <Flex gap={3} spacing={{p: 4}} direction="column" className={b()}>
            <Flex overflow="hidden" grow>
                <MarkdownEditorViewAsync
                    value={reply}
                    className={b('editor')}
                    markdownEditorProps={{
                        initial: {
                            mode: 'markup',
                            toolbarVisible: true,
                        },
                        md: {
                            html: true,
                            linkify: true,
                            breaks: true,
                        },
                    }}
                />
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
