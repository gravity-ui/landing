import {sortBy} from 'lodash';

import {getLibById} from '../../../utils';
import {Component, Lib} from '../types';

import {alertConfig} from './Alert';
import {arrowToggleConfig} from './ArrowToggle';
import {breadcrumbsConfig} from './Breadcrumbs';
import {buttonConfig} from './Button';
import {cardConfig} from './Card';
import {checkboxConfig} from './Checkbox';
import {dropdownMenuConfig} from './DropdownMenu';
import {iconConfig} from './Icon';
import {labelConfig} from './Label';
import {linkConfig} from './Link';
import {listConfig} from './List';
import {loaderConfig} from './Loader';
import {menuConfig} from './Menu';
import {modalConfig} from './Modal';
import {paginationConfig} from './Pagination';
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
import {tableConfig} from './Table';
import {tabsConfig} from './Tabs';
import {textConfig} from './Text';
import {config as toasterConfig} from './Toaster';
import {tooltipConfig} from './Tooltip';

const {config} = getLibById('uikit');

const uikitComponents: Component[] = [
    alertConfig,
    arrowToggleConfig,
    breadcrumbsConfig,
    buttonConfig,
    cardConfig,
    checkboxConfig,
    dropdownMenuConfig,
    iconConfig,
    labelConfig,
    listConfig,
    linkConfig,
    loaderConfig,
    menuConfig,
    modalConfig,
    paginationConfig,
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
    tableConfig,
    tabsConfig,
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
