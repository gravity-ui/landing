import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'HelpMark'};

export const helpMarkConfig = {
    id: 'help-mark',
    title: 'HelpMark',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./HelpMarkComponent').then((mod) => mod.HelpMarkComponent),
        ),
        props: {
            iconSize: {
                type: 'select',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
        },
    },
};
