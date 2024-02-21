import dynamic from 'next/dynamic';
import {Repos} from 'src/types/common';

import {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.DateComponents, componentName: 'RelativeDateField'};

export const relativeDateFieldConfig: Component = {
    id: 'relative-date-field',
    title: 'Relative Date Field',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('../examples/components/RelativeDateFieldExample').then(
                (mod) => mod.RelativeDateFieldSandBoxExample,
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
                values: [
                    {content: 'normal', value: ''},
                    {content: 'invalid', value: 'invalid'},
                ],
                defaultValue: '',
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
            hasTime: {
                type: 'switch',
                defaultValue: false,
            },
            readOnly: {
                type: 'switch',
                defaultValue: false,
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
            leftContent: {
                type: 'input',
            },
            rightContent: {
                type: 'input',
            },
        },
    },
};
