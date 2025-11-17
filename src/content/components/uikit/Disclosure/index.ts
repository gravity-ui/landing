import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Disclosure'};

export const disclosureConfig = {
    id: 'disclosure',
    title: 'Disclosure',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Disclosure)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['m', 'l', 'xl']),
                defaultValue: 'm',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            arrowPosition: {
                type: 'radioButton',
                values: mappingOptions(['left', 'right', 'start', 'end']),
                defaultValue: 'left',
            },
            summary: {type: 'input', defaultValue: 'Disclosure summary'},
            children: {type: 'input', defaultValue: 'Disclosure content'},
        },
    },
};
