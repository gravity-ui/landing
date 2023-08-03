import dynamic from 'next/dynamic';

import {getLibById} from '../../../utils';
import {Lib} from '../types';

const mappingOptions = (arr: string[]) =>
    arr.map((item) => ({
        value: item,
        content: item,
    }));

const {config} = getLibById('uikit');

export const uikit: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    description: config.description,
    components: [
        {
            id: 'button',
            title: 'Button',
            githubUrl: 'https://github.com/gravity-ui/uikit/tree/main/src/components/Button',
            content: {
                readmeUrl:
                    'https://raw.githubusercontent.com/gravity-ui/uikit/docs/update-button-and-label-readme/src/components/Button/README.md',
                // design: buttonDesign,
            },
            sandbox: {
                component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Button)),
                props: {
                    view: {
                        type: 'select',
                        values: mappingOptions([
                            'normal',
                            'outlined',
                            'action',
                            'outlined-info',
                            'outlined-danger',
                            'raised',
                            'flat',
                            'flat-info',
                            'flat-danger',
                            'flat-secondary',
                            'normal-contrast',
                            'outlined-contrast',
                            'flat-contrast',
                        ]),
                        defaultValue: 'normal',
                    },
                    size: {
                        type: 'radioButton',
                        values: mappingOptions(['xs', 's', 'm', 'l', 'xl']),
                        defaultValue: 'm',
                    },
                    pin: {
                        type: 'select',
                        values: mappingOptions([
                            'round-round',
                            'brick-brick',
                            'clear-clear',
                            'round-brick',
                            'brick-round',
                            'round-clear',
                            'clear-round',
                            'brick-clear',
                            'clear-brick',
                            'circle-circle',
                            'circle-brick',
                            'brick-circle',
                            'circle-clear',
                            'clear-circle',
                        ]),
                        defaultValue: 'round-round',
                    },
                    selected: {
                        type: 'switch',
                        defaultValue: false,
                    },
                    disabled: {
                        type: 'switch',
                        defaultValue: false,
                    },
                    loading: {
                        type: 'switch',
                        defaultValue: false,
                    },
                    width: {
                        type: 'radioButton',
                        values: mappingOptions(['auto', 'max']),
                        defaultValue: 'auto',
                    },
                    children: {
                        type: 'input',
                        defaultValue: 'Text',
                    },
                },
            },
        },
        {
            id: 'label',
            title: 'Label',
            githubUrl: 'https://github.com/gravity-ui/uikit/tree/main/src/components/Label',
            content: {
                readmeUrl:
                    'https://raw.githubusercontent.com/gravity-ui/uikit/docs/update-button-and-label-readme/src/components/Label/README.md',
                // design: labelDesign,
            },
            sandbox: {
                component: dynamic(() => import('@gravity-ui/uikit').then((mod) => mod.Label)),
                props: {
                    theme: {
                        type: 'select',
                        values: mappingOptions([
                            'normal',
                            'info',
                            'success',
                            'warning',
                            'danger',
                            'unknown',
                            'clear',
                        ]),
                        defaultValue: 'normal',
                    },
                    type: {
                        type: 'radioButton',
                        values: mappingOptions(['default', 'close', 'copy']),
                        defaultValue: 'default',
                    },
                    size: {
                        type: 'radioButton',
                        values: mappingOptions(['xs', 's', 'm']),
                        defaultValue: 's',
                    },
                    disabled: {
                        type: 'switch',
                        defaultValue: false,
                    },
                    interactive: {
                        type: 'switch',
                        defaultValue: false,
                    },
                    value: {
                        type: 'input',
                    },
                    copyText: {
                        type: 'input',
                        defaultValue: 'Text to copy',
                    },
                    children: {
                        type: 'input',
                        defaultValue: 'Text',
                    },
                },
            },
        },
        {
            id: 'link',
            title: 'Link',
            isComingSoon: true,
        },
        {
            id: 'action-tooltip',
            title: 'ActionTooltip',
            isComingSoon: true,
        },
        {
            id: 'alert',
            title: 'Alert',
            isComingSoon: true,
        },
        {
            id: 'arrow-toggle',
            title: 'ArrowToggle',
            isComingSoon: true,
        },
        {
            id: 'breadcrumbs',
            title: 'Breadcrumbs',
            isComingSoon: true,
        },
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
            id: 'clipboard-button',
            title: 'ClipboardButton',
            isComingSoon: true,
        },
        {
            id: 'dialog',
            title: 'Dialog',
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
        {
            id: 'list',
            title: 'List',
            isComingSoon: true,
        },
        {
            id: 'loader',
            title: 'Loader',
            isComingSoon: true,
        },
        {
            id: 'menu',
            title: 'Menu',
            isComingSoon: true,
        },
        {
            id: 'modal',
            title: 'Modal',
            isComingSoon: true,
        },
        {
            id: 'pagination',
            title: 'Pagination',
            isComingSoon: true,
        },
        {
            id: 'persona',
            title: 'Persona',
            isComingSoon: true,
        },
        {
            id: 'popover',
            title: 'Popover',
            isComingSoon: true,
        },
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
            id: 'select',
            title: 'Select',
            isComingSoon: true,
        },
        {
            id: 'sheet',
            title: 'Sheet',
            isComingSoon: true,
        },
        {
            id: 'skeleton',
            title: 'Skeleton',
            isComingSoon: true,
        },
        {
            id: 'spin',
            title: 'Spin',
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
            id: 'text-area',
            title: 'TextArea',
            isComingSoon: true,
        },
        {
            id: 'text-input',
            title: 'TextInput',
            isComingSoon: true,
        },
        {
            id: 'toaster',
            title: 'Toaster',
            isComingSoon: true,
        },
        {
            id: 'tooltip',
            title: 'Tooltip',
            isComingSoon: true,
        },
        {
            id: 'user',
            title: 'User',
            isComingSoon: true,
        },
        {
            id: 'user-avatar',
            title: 'UserAvatar',
            isComingSoon: true,
        },
    ],
};
