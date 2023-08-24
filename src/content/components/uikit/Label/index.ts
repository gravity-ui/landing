import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Label'};

export const labelConfig = {
    id: 'label',
    title: 'Label',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Label)),
        props: {
            theme: {
                type: 'select',
                values: mappingOptions([
                    'normal',
                    'info',
                    'success',
                    'warning',
                    'danger',
                    'unknown',
                    'clear',
                ]),
                defaultValue: 'normal',
            },
            type: {
                type: 'radioButton',
                values: mappingOptions(['default', 'close', 'copy']),
                defaultValue: 'default',
            },
            size: {
                type: 'radioButton',
                values: mappingOptions(['xs', 's', 'm']),
                defaultValue: 's',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            interactive: {
                type: 'switch',
                defaultValue: false,
            },
            value: {
                type: 'input',
            },
            copyText: {
                type: 'input',
                defaultValue: 'Text to copy',
            },
            children: {
                type: 'input',
                defaultValue: 'Label',
            },
        },
    },
};
