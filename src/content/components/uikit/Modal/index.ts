import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Modal'};

export const modalConfig = {
    id: 'modal',
    title: 'Modal',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./ModalComponent').then((mod) => mod.ModalComponent)),
        props: {
            disableBodyScrollLock: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
