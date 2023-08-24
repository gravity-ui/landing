import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Loader'};

export const loaderConfig = {
    id: 'loader',
    title: 'Loader',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Loader)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l']),
                defaultValue: 'm',
            },
        },
    },
};
