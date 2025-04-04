import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'SegmentedRadioGroup'};

export const segmentedRadioGroupConfig = {
    id: 'segmented-radio-group',
    title: 'SegmentedRadioGroup',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./SegmentedRadioGroupComponent').then(
                (mod) => mod.SegmentedRadioGroupComponent,
            ),
        ),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            width: {
                type: 'radioButton',
                values: mappingOptions(['auto', 'max']),
                defaultValue: 'auto',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
