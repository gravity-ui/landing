import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import type {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'User'};

export const userConfig: Component = {
    id: 'user',
    title: 'User',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./UserSandbox').then((mod) => mod.UserSandbox)),
        props: {
            size: {
                type: 'select',
                values: mappingOptions(['xs', 's', 'm', 'l', 'xl']),
                defaultValue: 'l',
            },
            name: {
                type: 'input',
                defaultValue: 'Charles Darwin',
            },
            description: {
                type: 'input',
                defaultValue: 'charles@mail.ai',
            },
        },
    },
};
