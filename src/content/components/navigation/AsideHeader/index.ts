import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Navigation, componentName: 'AsideHeader'};

export const asideHeaderConfig = {
    id: 'aside-header',
    title: 'Aside Header',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        expandedContainer: true,
        component: dynamic(() =>
            import('./AsideHeaderComponent').then((mod) => mod.AsideHeaderComponent),
        ),
        props: {
            headerDecoration: {
                type: 'switch',
                defaultValue: true,
            },
            multipleTooltip: {
                type: 'switch',
                defaultValue: false,
            },
            subheaderItemsVisible: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
