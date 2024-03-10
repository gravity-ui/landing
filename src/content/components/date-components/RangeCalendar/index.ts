import dynamic from 'next/dynamic';
import {Repos} from 'src/types/common';

import {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.DateComponents, componentName: 'RangeCalendar'};

export const rangeCalendarConfig: Component = {
    id: 'range-calendar',
    title: 'Range Calendar',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('../examples/components/index').then((mod) => mod.RangeCalendarExample),
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
