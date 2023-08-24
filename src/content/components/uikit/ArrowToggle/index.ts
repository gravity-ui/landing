import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'ArrowToggle'};

export const arrowToggleConfig = {
    id: 'arrowToggle',
    title: 'ArrowToggle',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.ArrowToggle)),
        props: {
            direction: {
                type: 'select',
                values: mappingOptions(['top', 'left', 'bottom', 'right']),
                defaultValue: 'bottom',
            },
            size: {
                type: 'input',
                defaultValue: '16',
            },
        },
    },
};
