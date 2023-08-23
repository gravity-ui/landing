import {sortBy} from 'lodash';

import {getLibById} from '../../../utils';
import {Component, Lib} from '../types';

import {arrowToggleConfig} from './ArrowToggle';
import {buttonConfig} from './Button';
import {labelConfig} from './Label';
import {loaderConfig} from './Loader';
import {menuConfig} from './Menu';
import {personaConfig} from './Persona';
import {skeletonConfig} from './Skeleton';
import {spinConfig} from './Spin';

const {config} = getLibById('uikit');

const uikitComponents: Component[] = [
    {
        id: 'alert',
        title: 'Alert',
        content: {
            readmeUrl: `https://raw.githubusercontent.com/gravity-ui/uikit/${uikitTargetBranch}/src/components/Alert/README.md`,
        },
        sandbox: {
            component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Alert)),
            props: {
                theme: {
                    type: 'select',
                    values: mappingOptions(['normal', 'info', 'positive', 'warning', 'danger']),
                    defaultValue: 'normal',
                },
                view: {
                    type: 'select',
                    values: mappingOptions(['filled', 'outlined']),
                    defaultValue: 'filled',
                },
                corners: {
                    type: 'radioButton',
                    values: mappingOptions(['rounded', 'square']),
                    defaultValue: 'rounded',
                },
                title: {type: 'input', defaultValue: 'Alert title'},
                message: {type: 'input', defaultValue: 'Alert message'},
            },
        },
    },
    {
        id: 'arrowToggle',
        title: 'ArrowToggle',
        githubUrl: `https://github.com/gravity-ui/uikit/tree/${uikitTargetBranch}/src/components/ArrowToggle`,
        content: {
            readmeUrl: `https://raw.githubusercontent.com/gravity-ui/uikit/${uikitTargetBranch}/src/components/ArrowToggle/README.md`,
        },
        sandbox: {
            component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.ArrowToggle)),
            props: {
                direction: {
                    type: 'select',
                    values: mappingOptions(['top', 'left', 'bottom', 'right']),
                    defaultValue: 'bottom',
                },
                size: {
                    type: 'input',
                    defaultValue: '16',
                },
            },
        },
    },
    arrowToggleConfig,
    {
        id: 'breadcrumbs',
        title: 'Breadcrumbs',
        isComingSoon: true,
    },
    buttonConfig,
    {
        id: 'card',
        title: 'Card',
        isComingSoon: true,
    },
    {
        id: 'checkbox',
        title: 'Checkbox',
        isComingSoon: true,
    },
    {
        id: 'dropdown-menu',
        title: 'DropdownMenu',
        isComingSoon: true,
    },
    {
        id: 'hotkey',
        title: 'Hotkey',
        isComingSoon: true,
    },
    {
        id: 'icon',
        title: 'Icon',
        isComingSoon: true,
    },
    labelConfig,
    {
        id: 'link',
        title: 'Link',
        isComingSoon: true,
    },
    loaderConfig,
    menuConfig,
    {
        id: 'modal',
        title: 'Modal',
        isComingSoon: true,
    },
    personaConfig,
    {
        id: 'popup',
        title: 'Popup',
        isComingSoon: true,
    },
    {
        id: 'portal',
        title: 'Portal',
        isComingSoon: true,
    },
    {
        id: 'progress',
        title: 'Progress',
        isComingSoon: true,
    },
    {
        id: 'radio',
        title: 'Radio',
        isComingSoon: true,
    },
    {
        id: 'radio-button',
        title: 'RadioButton',
        isComingSoon: true,
    },
    {
        id: 'radio-group',
        title: 'RadioGroup',
        isComingSoon: true,
    },
    {
        id: 'sheet',
        title: 'Sheet',
        isComingSoon: true,
    },
    skeletonConfig,
    spinConfig,
    {
        id: 'store-badge',
        title: 'StoreBadge',
        isComingSoon: true,
    },
    {
        id: 'switch',
        title: 'Switch',
        isComingSoon: true,
    },
    {
        id: 'table',
        title: 'Table',
        isComingSoon: true,
    },
    {
        id: 'tabs',
        title: 'Tabs',
        isComingSoon: true,
    },
    {
        id: 'text',
        title: 'Text',
        isComingSoon: true,
    },
    {
        id: 'text-input',
        title: 'TextInput',
        isComingSoon: true,
    },
    {
        id: 'tooltip',
        title: 'Tooltip',
        isComingSoon: true,
    },
];

export const uikit: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    description: config.description,
    components: sortBy(uikitComponents, 'title'),
};
