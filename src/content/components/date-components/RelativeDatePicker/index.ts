import dynamic from 'next/dynamic';
import {Repos} from 'src/types/common';

import {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.DateComponents, componentName: 'RelativeDatePicker'};

export const relativeDatePickerConfig: Component = {
    id: 'relative-date-picker',
    title: 'Relative Date Picker',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('../examples/components/index').then(
                (mod) => mod.RelativeDatePickerSandboxExample,
            ),
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
            label: {
                type: 'input',
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
            readOnly: {
                type: 'switch',
                defaultValue: false,
            },
            format: {
                type: 'input',
                defaultValue: 'MM/DD/YYYY',
            },
            pin: {
                type: 'select',
                values: mappingOptions([
                    'round-round',
                    'brick-brick',
                    'clear-clear',
                    'round-brick',
                    'brick-round',
                    'round-clear',
                    'clear-round',
                    'brick-clear',
                    'clear-brick',
                ]),
                defaultValue: 'round-round',
            },
            minValue: {
                type: 'input',
            },
            maxValue: {
                type: 'input',
            },
        },
    },
};
