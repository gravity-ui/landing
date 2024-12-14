import {Link, Text} from '@gravity-ui/uikit';

import {block} from '../../../../utils';

const b = block('examples-markdown-editor');
import './MarkdownEditor.scss';

type MarkdownEditorProps = {};

// @todo-opensourcenight Make markdown-editor component
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20237&t=FG0f1VDEd9kPubhh-4
export const MarkdownEditor: React.FC<MarkdownEditorProps> = () => {
    return (
        <div className={b()}>
            <main className={b('main')}>
                <Text variant="code-3">
                    @todo-opensourcenight make{' '}
                    <Link
                        href={
                            'https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20237&t=FG0f1VDEd9kPubhh-4'
                        }
                        target="_blank"
                    >
                        markdown-editor component
                    </Link>
                </Text>
            </main>
            <footer className={b('footer')}>
                <Link href={'/examples'}>Open in Examples page</Link>
                <Link href={'/examples/markdown-editor'}>Open in Separate page</Link>
            </footer>
        </div>
    );
};
