import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Drawer'};

export const drawerConfig = {
    id: 'drawer',
    title: 'Drawer',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./DrawerComponent').then((mod) => mod.DrawerComponent)),
        props: {
            resizable: {
                type: 'switch',
                defaultValue: false,
            },
            disableEscapeKeyDown: {
                type: 'switch',
                defaultValue: false,
            },
            disableOutsideClick: {
                type: 'switch',
                defaultValue: false,
            },
            hideVeil: {
                type: 'switch',
                defaultValue: false,
            },
            placement: {
                type: 'radioButton',
                values: mappingOptions(['left', 'right', 'top', 'bottom']),
                defaultValue: 'right',
            },
        },
    },
};
