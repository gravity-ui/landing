import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Table'};

export const tableConfig = {
    id: 'table',
    title: 'Table',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./TableComponent').then((mod) => mod.TableComponent)),
        props: {
            verticalAlign: {
                type: 'select',
                values: mappingOptions(['top', 'middle']),
                defaultValue: 'top',
            },
            rowActionsSize: {
                type: 'select',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 's',
            },
            edgePadding: {
                type: 'switch',
            },
        },
    },
};
