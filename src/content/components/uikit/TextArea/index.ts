import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'controls/TextArea'};

export const textAreaConfig = {
    id: 'text-area',
    title: 'TextArea',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./TextAreaComponent').then((mod) => mod.TextAreaComponent),
        ),
        props: {
            view: {
                type: 'radioButton',
                values: mappingOptions(['normal', 'clear']),
                defaultValue: 'normal',
            },
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            placeholder: {
                type: 'input',
                defaultValue: 'Type here...',
            },
            note: {
                type: 'input',
            },
            minRows: {
                type: 'input',
                defaultValue: 2,
            },
            maxRows: {
                type: 'input',
                defaultValue: 5,
            },
            validationState: {
                type: 'radioButton',
                values: mappingOptions(['normal', 'invalid']),
                defaultValue: 'normal',
            },
            errorMessage: {
                type: 'input',
                defaultValue: 'Input is invalid',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            hasClear: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
