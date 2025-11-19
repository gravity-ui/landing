import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Popover'};

export const popoverConfig = {
    id: 'popover',
    title: 'Popover',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./PopoverComponent').then((mod) => mod.PopoverComponent)),
        props: {
            hasArrow: {
                type: 'switch',
                defaultValue: false,
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            trigger: {
                type: 'select',
                values: mappingOptions(['click', 'hover']),
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
