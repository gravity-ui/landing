import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'PinInput'};

export const pinInputConfig = {
    id: 'pin-input',
    title: 'PinInput',
    githubUrl: getGithubUrl(getterOptions),
    isSupportRTL: true,
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.PinInput)),
        props: {
            size: {
                type: 'radioButton',
                values: mappingOptions(['s', 'm', 'l', 'xl']),
                defaultValue: 'm',
            },
            type: {
                type: 'radioButton',
                values: mappingOptions(['numeric', 'alphanumeric']),
                defaultValue: 'numeric',
            },
            length: {
                type: 'radioButton',
                values: mappingOptions(['4', '6']),
                defaultValue: '4',
            },
            placeholder: {
                type: 'input',
            },
            note: {
                type: 'input',
            },
            validationState: {
                type: 'radioButton',
                values: mappingOptions(['normal', 'invalid']),
                defaultValue: 'normal',
            },
            errorMessage: {
                type: 'input',
                defaultValue: 'PIN incorrect',
            },
            disabled: {
                type: 'switch',
                defaultValue: false,
            },
            otp: {
                type: 'switch',
                defaultValue: false,
            },
            mask: {
                type: 'switch',
                defaultValue: false,
            },
        },
    },
};
