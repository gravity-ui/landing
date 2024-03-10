import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'DropdownMenu'};

export const dropdownMenuConfig = {
    id: 'dropdown-menu',
    title: 'DropdownMenu',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./DropdownMenuComponent').then((mod) => mod.DropdownMenuComponent),
        ),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
