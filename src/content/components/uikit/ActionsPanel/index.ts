import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'ActionsPanel'};

export const actionsPanelConfig = {
    id: 'actions-panel',
    title: 'ActionsPanel',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./ActionsPanelComponent').then((mod) => mod.ActionsPanelComponent),
        ),
        props: {
            withNote: {
                type: 'switch',
                defaultValue: false,
            },
            withClose: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
