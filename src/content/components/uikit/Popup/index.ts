import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Popup'};

export const popupConfig = {
    id: 'popup',
    title: 'Popup',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./PopupComponent').then((mod) => mod.PopupComponent)),
        props: {
            open: {
                type: 'switch',
                defaultValue: true,
            },
            hasArrow: {
                type: 'switch',
                defaultValue: false,
            },
            placement: {
                type: 'select',
                values: mappingOptions([
                    'bottom-start',
                    'bottom',
                    'bottom-end',
                    'top-start',
                    'top',
                    'top-end',
                    'right-start',
                    'right',
                    'right-end',
                    'left-start',
                    'left',
                    'left-end',
                ]),
                defaultValue: 'bottom',
            },
        },
    },
};
