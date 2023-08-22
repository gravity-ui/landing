import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Menu'};

export const menuConfig = {
    id: 'menu',
    title: 'Menu',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./MenuComponent').then((mod) => mod.MenuComponent)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            groupLabel: {
                type: 'input',
                defaultValue: 'Group',
            },
            itemChildren: {
                type: 'input',
                defaultValue: 'First',
            },
            itemTheme: {
                type: 'radioButton',
                values: mappingOptions(['normal', 'danger']),
                defaultValue: 'normal',
            },
            itemDisabled: {
                type: 'switch',
                defaultValue: false,
            },
            itemSelected: {
                type: 'switch',
                defaultValue: false,
            },
            itemActive: {
                type: 'switch',
                defaultValue: false,
            },
            itemHref: {
                type: 'input',
                defaultValue: 'https://github.com/gravity-ui/uikit/tree/main/src/components/Menu',
            },
        },
    },
};
