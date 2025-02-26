import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Breadcrumbs'};

export const breadcrumbsConfig = {
    id: 'breadcrumbs',
    title: 'Breadcrumbs',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./BreadcrumbsWrapper').then((mod) => mod.BreadcrumbsWrapper),
        ),
        props: {
            showRoot: {
                type: 'switch',
                defaultValue: false,
            },
            maxItems: {
                type: 'input',
                defaultValue: 5,
            },
        },
    },
};
