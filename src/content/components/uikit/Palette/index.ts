import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {Component} from '../../types';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Palette'};

export const paletteConfig: Component = {
    id: 'palette',
    title: 'Palette',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('./PaletteComponent').then(({PaletteComponent}) => PaletteComponent),
        ),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['xs', 's', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            columns: {
                type: 'input',
                defaultValue: 6,
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            multiple: {
                type: 'switch',
                defaultValue: true,
            },
        },
    },
};
