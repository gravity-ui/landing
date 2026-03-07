import {Loader} from '@gravity-ui/uikit';
import dynamic from 'next/dynamic';

import {block} from '../../utils';

import './loader.scss';

const b = block('markdown-editor-view-loader');

export const MarkdownEditorViewAsync = dynamic(
    () => import('./MarkdownEditorView').then((mod) => mod.MarkdownEditorView),
    {
        ssr: false,
        loading: () => (
            <div className={b()}>
                <Loader size="s" />
            </div>
        ),
    },
);
