import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import type {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Stepper'};

export const stepperConfig: Component = {
    id: 'stepper',
    title: 'Stepper',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./StepperWrapper').then((mod) => mod.StepperWrapper)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l']),
                defaultValue: 'm',
            },
            view: {
                type: 'select',
                values: mappingOptions(['idle', 'success', 'error']),
                defaultValue: 'idle',
            },
        },
    },
};
