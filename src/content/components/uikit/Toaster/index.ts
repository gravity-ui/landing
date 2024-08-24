import {ToastProps} from '@gravity-ui/uikit';
import dynamic from 'next/dynamic';

import {SandboxProps} from '../..';
import {Repos} from '../../../../types/common';
import {Component} from '../../types';
import {type GetterProps, getGithubUrl, getReadmeUrl} from '../../utils';

import type {SandboxProps as ToasterProxySandboxProps} from './ToasterProxy';

const getterOptions: GetterProps = {repoName: Repos.Uikit, componentName: 'Toaster'};

type SandboxPropsType = SandboxProps[keyof SandboxProps];
type ToasterSandboxProps = Record<
    keyof ToastProps | keyof ToasterProxySandboxProps,
    SandboxPropsType
>;

const sandboxProps: Partial<ToasterSandboxProps> = {
    title: {
        type: 'input',
        defaultValue: 'Done with this task',
    },
    content: {
        type: 'input',
        defaultValue: 'Everything is fine',
    },
    action: {
        type: 'input',
        defaultValue: 'Okay then',
    },
    theme: {
        type: 'select',
        values: [undefined, 'info', 'success', 'warning', 'danger', 'utility'].map((value) => ({
            value: value === undefined ? 'undefined' : value,
            content: value === undefined ? 'none' : value,
        })),
        defaultValue: 'undefined',
    },
    autoHiding: {
        type: 'switch',
        defaultValue: false,
    },
    isClosable: {
        type: 'switch',
        defaultValue: false,
    },
    isMobile: {
        type: 'switch',
        defaultValue: false,
    },
};

export const config: Component = {
    id: 'toaster',
    title: 'Toaster',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() => import('./ToasterProxy').then((exports) => exports.ToasterProxy)),
        props: sandboxProps,
    },
};
