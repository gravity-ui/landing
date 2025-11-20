import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'ActionTooltip'};

export const actionTooltipConfig = {
    id: 'action-tooltip',
    title: 'ActionTooltip',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./ActionTooltipComponent').then((mod) => mod.ActionTooltipComponent),
        ),
        props: {
            title: {
                type: 'input',
                defaultValue: 'Title',
            },
            description: {
                type: 'input',
                defaultValue: 'Description',
            },
            hotkey: {
                type: 'input',
                defaultValue: 'shift+t',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            trigger: {
                type: 'select',
                values: mappingOptions(['focus', 'hover']),
                defaultValue: 'hover',
            },
            placement: {
                type: 'select',
                values: mappingOptions([
                    'bottom-start',
                    'bottom',
                    'bottom-end',
                    'top-start',
                    'top',
                    'top-end',
                    'right-start',
                    'right',
                    'right-end',
                    'left-start',
                    'left',
                    'left-end',
                ]),
                defaultValue: 'bottom',
            },
        },
    },
};
