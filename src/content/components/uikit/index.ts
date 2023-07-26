import {getLibById} from '../../../utils';
import {Lib} from '../types';

import buttonOverview from './content/button/overview.mdx';
import labelOverview from './content/label/overview.mdx';

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
                overview: buttonOverview,
                // design: buttonDesign,
            },
        },
        {
            id: 'label',
            title: 'Label',
            githubUrl: 'https://github.com/gravity-ui/uikit/tree/main/src/components/Label',
            content: {
                overview: labelOverview,
                // design: labelDesign,
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
