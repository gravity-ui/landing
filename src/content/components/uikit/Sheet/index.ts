import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Sheet'};
console.log(getReadmeUrl(getterOptions), 'getReadmeUrl(getterOptions)');
export const sheetConfig = {
    id: 'sheet',
    title: 'Sheet',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./SheetComponent').then((mod) => mod.SheetComponent)),
        props: {
            title: {
                type: 'input',
                defaultValue: 'Title',
            },
            hideTopBar: {
                type: 'switch',
                defaultValue: false,
            },
            allowHideOnContentScroll: {
                type: 'switch',
                defaultValue: true,
            },
        },
    },
};
