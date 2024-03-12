import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Tabs'};

export const tabsConfig = {
    id: 'tabs',
    title: 'Tabs',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./TabsComponent').then((mod) => mod.TabsComponent)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['m', 'l', 'xl']),
                defaultValue: 'm',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
