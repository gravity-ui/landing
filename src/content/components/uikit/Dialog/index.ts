import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Dialog'};

export const dialogConfig = {
    id: 'dialog',
    title: 'Dialog',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./DialogComponent').then((mod) => mod.DialogComponent)),
        props: {
            children: {
                type: 'input',
            },
            showError: {
                type: 'switch',
                defaultValue: false,
            },
            hasCloseButton: {
                type: 'switch',
                defaultValue: true,
            },
            disableOutsideClick: {
                type: 'switch',
                defaultValue: false,
            },
            disableEscapeKeyDown: {
                type: 'switch',
                defaultValue: false,
            },
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l']),
                defaultValue: 's',
            },
        },
    },
};
