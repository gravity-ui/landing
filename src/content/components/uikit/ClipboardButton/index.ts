import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'ClipboardButton'};

export const clipboardButtonConfig = {
    id: 'clipboard-button',
    title: 'ClipboardButton',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.ClipboardButton)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['xs', 's', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            text: {
                type: 'input',
                defaultValue: 'Text to copy',
            },
            hasTooltip: {
                type: 'switch',
                defaultValue: true,
            },
            timeout: {
                type: 'input',
                defaultValue: 1000,
            },
            tooltipInitialText: {
                type: 'input',
                defaultValue: 'Copy',
            },
            tooltipSuccessText: {
                type: 'input',
                defaultValue: 'Copied!',
            },
        },
    },
};
