import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Navigation, componentName: 'Footer'};

export const footerConfig = {
    id: 'footer',
    title: 'Footer',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        expandedContainer: true,
        component: dynamic(() => import('./FooterComponent').then((mod) => mod.FooterComponent)),
        props: {
            mobile: {
                type: 'switch',
                defaultValue: false,
            },
            withDivider: {
                type: 'switch',
                defaultValue: true,
            },
            view: {
                type: 'select',
                defaultValue: 'normal',
                values: mappingOptions(['normal', 'clear']),
            },
            copyright: {
                type: 'text',
                defaultValue: `@ ${new Date().getFullYear()} "Gravity UI"`,
            },
        },
    },
};
