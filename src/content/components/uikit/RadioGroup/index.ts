import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'RadioGroup'};

export const radioGroupConfig = {
    id: 'radio-group',
    title: 'RadioGroup',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./RadioGroupComponent').then((mod) => mod.RadioGroupComponent),
        ),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['m', 'l']),
                defaultValue: 'm',
            },
            direction: {
                type: 'radioButton',
                values: mappingOptions(['horizontal', 'vertical']),
                defaultValue: 'horizontal',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
