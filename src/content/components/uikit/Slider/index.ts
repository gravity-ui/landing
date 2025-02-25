import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Slider'};

export const sliderConfig = {
    id: 'slider',
    title: 'Slider',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('../examples/components').then((mod) => mod.SliderExample)),
        props: {
            tooltipDisplay: {
                type: 'radioButton',
                values: mappingOptions(['auto', 'on', 'off']),
                defaultValue: 'auto',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
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
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            min: {
                type: 'input',
                defaultValue: 0,
            },
            max: {
                type: 'input',
                defaultValue: 100,
            },
            step: {
                type: 'input',
                defaultValue: 1,
            },
            marks: {
                type: 'input',
                defaultValue: 2,
            },
        },
    },
};
