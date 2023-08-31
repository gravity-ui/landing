import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Tooltip'};

export const tooltipConfig = {
    id: 'tooltip',
    title: 'Tooltip',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./TooltipComponent').then((mod) => mod.TooltipComponent)),
        props: {
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
