import {Button, Flex, Icon, Link, Text} from '@gravity-ui/uikit';
import dynamic from 'next/dynamic';

import figmaIcon from '../../../../assets/icons/figma-fill.svg';
import {block} from '../../../../utils';

import './MarkdownEditor.scss';

type MarkdownEditorProps = {};
const b = block('examples-markdown-editor');

const Editor = dynamic(() => import('./Editor').then((mod) => mod.Editor), {
    ssr: false,
});

// @todo-opensourcenight Make markdown-editor component
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20237&t=FG0f1VDEd9kPubhh-4
export const MarkdownEditor: React.FC<MarkdownEditorProps> = () => {
    return (
        <div className={b()}>
            <main className={b('main')}>
                <Text variant="code-3">
                    <Flex direction="row" justifyContent="space-between">
                        <span>@todo-opensourcenight markdown-editor component</span>
                        <Editor />
                        <Button
                            key="figma"
                            className={b('button')}
                            view="action"
                            size="xl"
                            href={
                                'https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20237&t=FG0f1VDEd9kPubhh-4'
                            }
                            target="_blank"
                        >
                            <Icon className={b('button-icon')} data={figmaIcon} size={16} />
                            <span>Open Figma</span>
                        </Button>
                    </Flex>
                </Text>
            </main>
            <footer className={b('footer')}>
                <Link href={'/examples'}>Open in Examples page</Link>
                <Link href={'/examples/markdown-editor'}>Open in Separate page</Link>
            </footer>
        </div>
    );
};
