import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Icon'};

export const iconConfig = {
    id: 'icon',
    title: 'Icon',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./IconComponent').then((mod) => mod.IconComponent)),
        props: {
            icon: {
                type: 'select',
                values: mappingOptions(['Gear', 'Star', 'Person', 'Eye', 'Globe']),
                defaultValue: 'Gear',
            },
            size: {
                type: 'radioButton',
                values: mappingOptions(['12', '14', '16', '18', '20', '24']),
                defaultValue: '16',
            },
        },
    },
};
