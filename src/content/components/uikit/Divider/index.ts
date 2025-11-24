import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Divider'};

export const dividerConfig = {
    id: 'divider',
    title: 'Divider',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./DividerComponent').then((mod) => mod.DividerComponent)),
        props: {
            orientation: {
                type: 'select',
                values: mappingOptions(['horizontal', 'vertical']),
                defaultValue: 'horizontal',
            },
            align: {
                type: 'select',
                values: mappingOptions(['start', 'center', 'end']),
                defaultValue: 'start',
            },
            children: {
                type: 'input',
            },
        },
    },
};
