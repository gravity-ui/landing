import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Overlay'};

export const overlayConfig = {
    id: 'overlay',
    title: 'Overlay',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./OverlayComponent').then((mod) => mod.OverlayComponent)),
        props: {
            visible: {
                type: 'switch',
                defaultValue: true,
            },
            background: {
                type: 'radioButton',
                values: mappingOptions(['base', 'float']),
                defaultValue: 'base',
            },
        },
    },
};
