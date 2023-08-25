import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'List'};

export const listConfig = {
    id: 'list',
    title: 'List',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./ListComponent').then((mod) => mod.ListComponent)),
        props: {
            filterable: {
                type: 'switch',
                defaultValue: true,
            },
            sortable: {
                type: 'switch',
                defaultValue: false,
            },
            filterPlaceholder: {
                type: 'input',
                defaultValue: 'Default placeholder',
            },
            emptyPlaceholder: {
                type: 'input',
                defaultValue: 'Not found',
            },
        },
    },
};
