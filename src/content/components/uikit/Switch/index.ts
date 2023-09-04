import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Switch'};

export const switchConfig = {
    id: 'switch',
    title: 'Switch',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./SwitchComponent').then((mod) => mod.SwitchComponent)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['m', 'l']),
                defaultValue: 'm',
            },
            content: {
                type: 'input',
                defaultValue: 'Content',
            },
            checked: {
                type: 'switch',
                defaultValue: true,
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
