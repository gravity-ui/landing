import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'DefinitionList'};

export const definitionListConfig = {
    id: 'definition-list',
    title: 'DefinitionList',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./DefinitionListComponent').then((mod) => mod.DefinitionListComponent),
        ),
        props: {
            responsive: {
                type: 'switch',
                defaultValue: false,
            },
            direction: {
                type: 'radioButton',
                values: mappingOptions(['horizontal', 'vertical']),
                defaultValue: 'horizontal',
            },
        },
    },
};
