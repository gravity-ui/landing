import dynamic from 'next/dynamic';
import {Repos} from 'src/types/common';

import {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.DateComponents, componentName: 'Calendar'};

export const calendarConfig: Component = {
    id: 'calendar',
    title: 'Calendar',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('../examples/components/index').then((mod) => mod.CalendarExample),
        ),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['m', 'l', 'xl']),
                defaultValue: 'm',
            },
            mode: {
                type: 'select',
                values: mappingOptions(['days', 'months', 'quarters', 'years']),
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            readOnly: {
                type: 'switch',
                defaultValue: false,
            },
            minValue: {
                type: 'input',
            },
            maxValue: {
                type: 'input',
            },
            focusedValue: {
                type: 'input',
            },
        },
    },
};
