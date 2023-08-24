import {sortBy} from 'lodash';

import {getLibById} from '../../../utils';
import {Component, Lib} from '../types';

import {alertConfig} from './Alert';
import {arrowToggleConfig} from './ArrowToggle';
import {buttonConfig} from './Button';
import {iconConfig} from './Icon';
import {labelConfig} from './Label';
import {loaderConfig} from './Loader';
import {menuConfig} from './Menu';
import {personaConfig} from './Persona';
import {skeletonConfig} from './Skeleton';
import {spinConfig} from './Spin';

const {config} = getLibById('uikit');

const uikitComponents: Component[] = [
    alertConfig,
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
    iconConfig,
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
    skeletonConfig,
    spinConfig,
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
