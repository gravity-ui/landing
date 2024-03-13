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
            firstDisplayedItemsCount: {
                type: 'radioButton',
                values: [
                    {
                        value: 0,
                        content: '0',
                    },
                    {
                        value: 1,
                        content: '1',
                    },
                ],
                defaultValue: 0,
            },
            lastDisplayedItemsCount: {
                type: 'radioButton',
                values: [
                    {
                        value: 1,
                        content: '1',
                    },
                    {
                        value: 2,
                        content: '2',
                    },
                ],
                defaultValue: 1,
            },
        },
    },
};
