import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Pagination'};

export const paginationConfig = {
    id: 'pagination',
    title: 'Pagination',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./PaginationComponent').then((mod) => mod.PaginationComponent),
        ),
        props: {
            page: {
                type: 'input',
                defaultValue: 1,
            },
            pageSize: {
                type: 'input',
                defaultValue: 10,
            },
            total: {
                type: 'input',
                defaultValue: 30,
            },
            compact: {
                type: 'switch',
                defaultValue: true,
            },
            showInput: {
                type: 'switch',
                defaultValue: true,
            },
            showPages: {
                type: 'switch',
                defaultValue: true,
            },
        },
    },
};
