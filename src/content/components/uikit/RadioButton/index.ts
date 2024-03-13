import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'RadioButton'};

export const radioButtonConfig = {
    id: 'radio-button',
    title: 'RadioButton',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./RadioButtonComponent').then((mod) => mod.RadioButtonComponent),
        ),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            width: {
                type: 'radioButton',
                values: mappingOptions(['auto', 'max']),
                defaultValue: 'auto',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
