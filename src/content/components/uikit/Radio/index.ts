import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Radio'};

export const radioConfig = {
    id: 'radio',
    title: 'Radio',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./RadioComponent').then((mod) => mod.RadioComponent)),
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
