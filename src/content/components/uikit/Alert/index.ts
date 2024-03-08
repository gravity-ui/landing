import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Alert'};

export const alertConfig = {
    id: 'alert',
    title: 'Alert',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Alert)),
        props: {
            theme: {
                type: 'select',
                values: mappingOptions(['normal', 'info', 'success', 'warning', 'danger']),
                defaultValue: 'normal',
            },
            view: {
                type: 'select',
                values: mappingOptions(['filled', 'outlined']),
                defaultValue: 'filled',
            },
            corners: {
                type: 'radioButton',
                values: mappingOptions(['rounded', 'square']),
                defaultValue: 'rounded',
            },
            title: {type: 'input', defaultValue: 'Alert title'},
            message: {type: 'input', defaultValue: 'Alert message'},
        },
    },
};
