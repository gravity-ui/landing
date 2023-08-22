import dynamic from 'next/dynamic';

import {TARGET_BRANCH} from '../../../../constants';
import {mappingOptions} from '../../utils';

const uikitTargetBranch = process.env.UIKIT_TARGET_BRANCH || TARGET_BRANCH;

export const menuConfig = {
    id: 'menu',
    title: 'Menu',
    githubUrl: 'https://github.com/gravity-ui/uikit/tree/main/src/components/Menu',
    content: {
        readmeUrl: `https://raw.githubusercontent.com/gravity-ui/uikit/${uikitTargetBranch}/src/components/Menu/README.md`,
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
