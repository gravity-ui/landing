import {sortBy} from 'lodash';

import {getLibById} from '../../../utils';
import {Component, Lib} from '../types';

import {alertConfig} from './Alert';
import {arrowToggleConfig} from './ArrowToggle';
import {buttonConfig} from './Button';
import {cardConfig} from './Card';
import {iconConfig} from './Icon';
import {labelConfig} from './Label';
import {linkConfig} from './Link';
import {listConfig} from './List';
import {loaderConfig} from './Loader';
import {menuConfig} from './Menu';
import {modalConfig} from './Modal';
import {personaConfig} from './Persona';
import {popupConfig} from './Popup';
import {portalConfig} from './Portal';
import {progressConfig} from './Progress';
import {skeletonConfig} from './Skeleton';
import {spinConfig} from './Spin';
import {textConfig} from './Text';
import {config as toasterConfig} from './Toaster';
import {tooltipConfig} from './Tooltip';

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
    cardConfig,
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
    listConfig,
    linkConfig,
    loaderConfig,
    menuConfig,
    modalConfig,
    personaConfig,
    popupConfig,
    portalConfig,
    progressConfig,
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
    textConfig,
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
    tooltipConfig,
    toasterConfig,
];

export const uikit: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    description: config.description,
    components: sortBy(uikitComponents, 'title'),
};
