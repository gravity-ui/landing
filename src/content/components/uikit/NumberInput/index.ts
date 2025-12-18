import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'NumberInput'};

export const numberInputConfig = {
    id: 'number-input',
    title: 'NumberInput',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./NumberInputComponent').then((mod) => mod.NumberInputComponent),
        ),
        props: {
            hiddenControls: {
                type: 'switch',
                defaultValue: false,
            },
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
            validationState: {
                type: 'radioButton',
                values: mappingOptions(['normal', 'invalid']),
                defaultValue: 'normal',
            },
            errorMessage: {
                type: 'input',
                defaultValue: 'Input is invalid',
            },
            errorPlacement: {
                type: 'radioButton',
                values: mappingOptions(['outside', 'inside']),
                defaultValue: 'outside',
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
