import type {HotkeyProps} from '@gravity-ui/uikit';
import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import type {Component} from '../../types';
import {GetterProps, getGithubUrl, getReadmeUrl, mappingOptions} from '../../utils';

const getterProps: GetterProps = {repoName: Repos.Uikit, componentName: 'Hotkey'};

const viewValues: NonNullable<HotkeyProps['view']>[] = ['light', 'dark'];
const platformValues: NonNullable<HotkeyProps['platform']>[] = ['pc', 'mac'];

export const hotkeyConfig: Component = {
    id: 'hotkey',
    title: 'Hotkey',
    githubUrl: getGithubUrl(getterProps),
    content: {
        readmeUrl: getReadmeUrl(getterProps),
    },
    sandbox: {
        component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Hotkey)),
        props: {
            view: {
                type: 'radioButton',
                values: mappingOptions(viewValues),
                defaultValue: 'light',
            },
            platform: {
                type: 'radioButton',
                values: mappingOptions(platformValues),
                defaultValue: 'pc',
            },
            value: {type: 'input', defaultValue: 'mod+a mod+c mod+v'},
        },
    },
};
