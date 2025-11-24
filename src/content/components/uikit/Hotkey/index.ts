import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Hotkey'};

export const hotkeyConfig = {
    id: 'hotkey',
    title: 'Hotkey',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Hotkey)),
        props: {
            value: {
                type: 'input',
                defaultValue: 'mod+a mod+c mod+v',
            },
            view: {
                type: 'select',
                values: mappingOptions(['light', 'dark']),
            },
            platform: {
                type: 'select',
                values: mappingOptions(['pc', 'mac']),
            },
        },
    },
};
