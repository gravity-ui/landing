import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Text'};

export const textConfig = {
    id: 'text',
    title: 'Text',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Text)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['xs', 's', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
        },
    },
};
