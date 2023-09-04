import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Link'};

export const linkConfig = {
    id: 'link',
    title: 'Link',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Link)),
        props: {
            view: {
                type: 'select',
                values: mappingOptions(['normal', 'primary', 'secondary']),
                defaultValue: 'normal',
            },
            visitable: {
                type: 'switch',
                defaultValue: false,
            },
            href: {
                type: 'input',
                defaultValue: 'https://gravity-ui.com/',
            },
            target: {
                type: 'input',
            },
            rel: {
                type: 'input',
            },
            title: {
                type: 'input',
            },
            children: {
                type: 'text',
                defaultValue: 'Link',
            },
        },
    },
};
