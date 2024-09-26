import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {Component} from '../../types';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Navigation, componentName: 'HotkeysPanel'};

export const hotkeysPanelConfig: Component = {
    id: 'hotkeys-panel',
    title: 'Hotkeys Panel',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        expandedContainer: true,
        component: dynamic(() =>
            import('./HotkeysPanelComponent').then((mod) => mod.HotkeysPanelComponent),
        ),
        props: {
            visible: {
                type: 'switch',
                defaultValue: true,
            },
            filterable: {
                type: 'switch',
                defaultValue: true,
            },
            filterPlaceholder: {
                type: 'input',
                defaultValue: 'Search',
            },
        },
    },
};
