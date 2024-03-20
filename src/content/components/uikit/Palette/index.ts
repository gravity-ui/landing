import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {Component} from '../../types';
import {getGithubUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Palette'};

export const paletteConfig: Component = {
    id: 'palette',
    title: 'Palette',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        // will use this when this PR is merged:
        // https://github.com/gravity-ui/uikit/pull/1431
        // readmeUrl: getReadmeUrl(getterOptions),
        readmeUrl:
            'https://raw.githubusercontent.com/gravity-ui/uikit/fix/fixed-palette-readme/src/components/Palette/README.md',
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
