import {sortBy} from 'lodash';

import {getLibById} from '../../../utils';
import {Component, Lib} from '../types';

import {alertConfig} from './Alert';
import {arrowToggleConfig} from './ArrowToggle';
import {avatarConfig} from './Avatar';
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
import {paletteConfig} from './Palette';
import {pinInputConfig} from './PinInput';
import {popupConfig} from './Popup';
import {portalConfig} from './Portal';
import {progressConfig} from './Progress';
import {radioConfig} from './Radio';
import {radioButtonConfig} from './RadioButton';
import {radioGroupConfig} from './RadioGroup';
import {selectConfig} from './Select';
import {sheetConfig} from './Sheet';
import {skeletonConfig} from './Skeleton';
import {sliderConfig} from './Slider';
import {spinConfig} from './Spin';
import {switchConfig} from './Switch';
import {tableConfig} from './Table';
import {tabsConfig} from './Tabs';
import {textConfig} from './Text';
import {textAreaConfig} from './TextArea';
import {textInputConfig} from './TextInput';
import {config as toasterConfig} from './Toaster';
import {tooltipConfig} from './Tooltip';
import {userConfig} from './User';
import {userLabelConfig} from './UserLabel';

const {config} = getLibById('uikit');

const uikitComponents: Component[] = [
    alertConfig,
    arrowToggleConfig,
    avatarConfig,
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
    paletteConfig,
    pinInputConfig,
    popupConfig,
    portalConfig,
    progressConfig,
    radioConfig,
    radioButtonConfig,
    radioGroupConfig,
    selectConfig,
    skeletonConfig,
    sliderConfig,
    spinConfig,
    switchConfig,
    tableConfig,
    tabsConfig,
    textConfig,
    textAreaConfig,
    textInputConfig,
    tooltipConfig,
    toasterConfig,
    userConfig,
    userLabelConfig,
    sheetConfig,
];

export const uikit: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    components: sortBy(uikitComponents, 'title'),
};
