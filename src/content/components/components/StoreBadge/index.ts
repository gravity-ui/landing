import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Components, componentName: 'StoreBadge'};

export const storeBadgeConfig = {
    id: 'store-badge',
    title: 'StoreBadge',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/components').then((mod) => mod.StoreBadge)),
        props: {
            platform: {
                type: 'select',
                values: mappingOptions(['android', 'ios']),
                defaultValue: 'android',
            },
            href: {
                type: 'input',
            },
        },
    },
};
