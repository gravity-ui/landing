import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'FilePreview'};

export const filePreviewConfig = {
    id: 'file-preview',
    title: 'FilePreview',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./FilePreviewComponent').then((mod) => mod.FilePreviewComponent),
        ),
        props: {
            slected: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
