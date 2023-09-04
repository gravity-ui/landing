import {sortBy} from 'lodash';

import {getLibById} from '../../../utils';
import {Component, Lib} from '../types';

import {alertConfig} from './Alert';
import {arrowToggleConfig} from './ArrowToggle';
import {buttonConfig} from './Button';
import {checkboxConfig} from './Checkbox';
import {iconConfig} from './Icon';
import {labelConfig} from './Label';
import {listConfig} from './List';
import {loaderConfig} from './Loader';
import {menuConfig} from './Menu';
import {modalConfig} from './Modal';
import {personaConfig} from './Persona';
import {popupConfig} from './Popup';
import {portalConfig} from './Portal';
import {progressConfig} from './Progress';
import {radioConfig} from './Radio';
import {radioButtonConfig} from './RadioButton';
import {radioGroupConfig} from './RadioGroup';
import {skeletonConfig} from './Skeleton';
import {spinConfig} from './Spin';
import {switchConfig} from './Switch';
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
    {
        id: 'card',
        title: 'Card',
        isComingSoon: true,
    },
    checkboxConfig,
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
    listConfig,
    loaderConfig,
    menuConfig,
    modalConfig,
    personaConfig,
    popupConfig,
    portalConfig,
    progressConfig,
    radioConfig,
    radioButtonConfig,
    radioGroupConfig,
    skeletonConfig,
    spinConfig,
    switchConfig,
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
