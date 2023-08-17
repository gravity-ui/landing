import dynamic from 'next/dynamic';

import {TARGET_BRANCH} from '../../../constants';
import {getLibById} from '../../../utils';
import {Lib} from '../types';
import {mappingOptions} from '../utils';

const {config} = getLibById('components');

const componentsTargetBranch = process.env.COMPONENTS_TARGET_BRANCH || TARGET_BRANCH;

export const components: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    description: config.description,
    components: [
        {
            id: 'store-badge',
            title: 'StoreBadge',
            githubUrl:
                'https://github.com/gravity-ui/components/tree/main/src/components/StoreBadge',
            content: {
                readmeUrl: `https://raw.githubusercontent.com/gravity-ui/components/${componentsTargetBranch}/src/components/StoreBadge/README.md`,
                // design: buttonDesign,
            },
            sandbox: {
                component: dynamic(() =>
                    import('@gravity-ui/components').then((mod) => mod.StoreBadge),
                ),
                props: {
                    platform: {
                        type: 'select',
                        values: mappingOptions(['android', 'ios']),
                        defaultValue: 'android',
                    },
                    href: {
                        type: 'input',
                    },
                },
            },
        },
    ],
};
