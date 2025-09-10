import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Accordion'};

export const accordionConfig = {
    id: 'accordion',
    title: 'Accordion',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./AccordionComponent').then((mod) => mod.AccordionComponent),
        ),
        props: {
            view: {
                type: 'select',
                values: mappingOptions(['solid', 'top-bottom']),
                defaultValue: 'solid',
            },
            size: {
                type: 'radioButton',
                values: mappingOptions(['m', 'l', 'xl']),
                defaultValue: 'm',
            },
            arrowPosition: {
                type: 'radioButton',
                values: mappingOptions(['start', 'end']),
                defaultValue: 'end',
            },
            multiple: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
