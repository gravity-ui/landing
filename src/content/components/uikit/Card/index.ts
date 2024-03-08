import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Card'};

export const cardConfig = {
    id: 'card',
    title: 'Card',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./CardComponent').then((mod) => mod.CardComponent)),
        props: {
            theme: {
                type: 'select',
                values: mappingOptions(['normal', 'info', 'success', 'warning', 'danger']),
                defaultValue: 'normal',
            },
            type: {
                type: 'select',
                values: mappingOptions(['container', 'selection', 'action']),
                defaultValue: 'container',
            },
            view: {
                type: 'select',
                values: mappingOptions(['outlined', 'clear', 'filled', 'raised']),
                defaultValue: 'outlined',
            },
        },
    },
};
