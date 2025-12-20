import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'PlaceholderContainer'};

export const placeholderContainerConfig = {
    id: 'placeholder-container',
    title: 'PlaceholderContainer',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./PlaceholderContainerComponent').then(
                (mod) => mod.PlaceholderContainerComponent,
            ),
        ),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'promo']),
                defaultValue: 'm',
            },
            direction: {
                type: 'radioButton',
                values: mappingOptions(['row', 'column']),
                defaultValue: 'row',
            },
            title: {
                type: 'input',
                defaultValue: 'Some title',
            },
            description: {
                type: 'input',
                defaultValue: 'Some description for PlaceholderContainer component demo',
            },
        },
    },
};
