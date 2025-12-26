import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

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
            view: {
                type: 'radioButton',
                values: mappingOptions(['default', 'compact']),
                defaultValue: 'default',
            },
            selected: {
                type: 'switch',
                defaultValue: false,
            },
            imageSrc: {
                type: 'input',
            },
            description: {
                type: 'input',
            },
        },
    },
};
