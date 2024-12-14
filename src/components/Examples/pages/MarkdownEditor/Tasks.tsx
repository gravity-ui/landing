import transform from '@diplodoc/transform';
import {YfmHtml} from '@gravity-ui/markdown-editor/_/view';
import React from 'react';

const text = `
    ## Tasks
    Description here...
`;

export interface TasksProps {}
export const Tasks: React.FC<TasksProps> = () => {
    return <YfmHtml html={transform(text).result.html} />;
};
