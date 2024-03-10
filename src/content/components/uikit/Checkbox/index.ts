import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Checkbox'};

export const checkboxConfig = {
    id: 'checkbox',
    title: 'Checkbox',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Checkbox)),
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
            indeterminate: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
