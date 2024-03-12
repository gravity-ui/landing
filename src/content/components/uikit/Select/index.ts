import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Select'};

export const selectConfig: Component = {
    id: 'select',
    title: 'Select',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./SelectComponent').then((mod) => mod.SelectComponent)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
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
                    'circle-circle',
                    'circle-brick',
                    'brick-circle',
                    'circle-clear',
                    'clear-circle',
                ]),
                defaultValue: 'round-round',
            },
            placeholder: {
                type: 'input',
                defaultValue: '',
            },
            label: {
                type: 'input',
            },
            multiple: {
                type: 'switch',
                defaultValue: false,
            },
            filterable: {
                type: 'switch',
                defaultValue: false,
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
