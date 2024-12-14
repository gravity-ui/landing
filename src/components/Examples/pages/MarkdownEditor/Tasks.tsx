import transform from '@diplodoc/transform';
import {YfmHtml} from '@gravity-ui/markdown-editor/_/view';
import React from 'react';

import './yfm.scss';

const text = `
## Tasks
1. Add an editor, using the example from http://localhost:3000/libraries/markdown-editor/playground but avoid using deprecated properties.
2. Add a preview, using the example from https://preview.gravity-ui.com/md-editor.
3. Proceed to develop an extension in honor of the author of ProseMirror.
`;

export interface TasksProps {}
export const Tasks: React.FC<TasksProps> = () => {
    return <YfmHtml html={transform(text).result.html} />;
};
