import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Progress'};

export const progressConfig = {
    id: 'progress',
    title: 'Progress',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./ProgressComponent').then((mod) => mod.ProgressComponent),
        ),
        props: {
            theme: {
                type: 'select',
                values: mappingOptions(['default', 'success', 'warning', 'danger', 'info', 'misc']),
                defaultValue: 'default',
            },
            value: {
                type: 'input',
                defaultValue: 80,
            },
            text: {
                type: 'input',
                defaultValue: 'pending',
            },
            size: {
                type: 'radioButton',
                values: mappingOptions(['xs', 's', 'm']),
                defaultValue: 'm',
            },
            loading: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
