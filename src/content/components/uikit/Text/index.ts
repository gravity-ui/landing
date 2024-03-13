import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Text'};

export const textConfig = {
    id: 'text',
    title: 'Text',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./TextComponent').then((mod) => mod.TextComponent)),
        props: {
            variant: {
                type: 'select',
                values: mappingOptions([
                    'body-1',
                    'body-2',
                    'body-3',
                    'body-short',
                    'caption-1',
                    'caption-2',
                    'header-1',
                    'header-2',
                    'subheader-1',
                    'subheader-2',
                    'subheader-3',
                    'display-1',
                    'display-2',
                    'display-3',
                    'display-4',
                    'code-1',
                    'code-2',
                    'code-3',
                    'code-inline-1',
                    'code-inline-2',
                    'code-inline-3',
                ]),
                defaultValue: 'body-1',
            },
            text: {
                type: 'input',
                defaultValue:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!',
            },
            ellipsis: {
                type: 'switch',
                defaultValue: false,
            },
            whiteSpace: {
                type: 'select',
                values: mappingOptions(['', 'nowrap', 'break-spaces']),
                defaultValue: '',
            },
            wordBreak: {
                type: 'select',
                values: mappingOptions(['', 'break-all']),
                defaultValue: '',
            },
            color: {
                type: 'select',
                values: mappingOptions([
                    'primary',
                    'complementary',
                    'secondary',
                    'hint',
                    'info',
                    'info-heavy',
                    'positive',
                    'positive-heavy',
                    'warning',
                    'warning-heavy',
                    'danger',
                    'danger-heavy',
                    'utility',
                    'utility-heavy',
                    'misc',
                    'misc-heavy',
                    'brand',
                    'link',
                    'link-hover',
                    'link-visited',
                    'link-visited-hover',
                    'dark-primary',
                    'dark-complementary',
                    'dark-secondary',
                    'light-primary',
                    'light-complementary',
                    'light-secondary',
                    'light-hint',
                    'inverted-primary',
                    'inverted-complementary',
                    'inverted-secondary',
                    'inverted-hint',
                ]),
                defaultValue: 'primary',
            },
        },
    },
};
