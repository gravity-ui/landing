import sortBy from 'lodash/sortBy';

import {getLibConfigById} from '../../../libs/config';
import {Component, Lib} from '../types';

import {accordionConfig} from './Accordion';
import {actionTooltipConfig} from './ActionTooltip';
import {alertConfig} from './Alert';
import {arrowToggleConfig} from './ArrowToggle';
import {avatarConfig} from './Avatar';
import {breadcrumbsConfig} from './Breadcrumbs';
import {buttonConfig} from './Button';
import {cardConfig} from './Card';
import {checkboxConfig} from './Checkbox';
import {clipboardButtonConfig} from './ClipboardButton';
import {disclosureConfig} from './Disclosure';
import {dividerConfig} from './Divider';
import {dropdownMenuConfig} from './DropdownMenu';
import {filePreviewConfig} from './FilePreview';
import {helpMarkConfig} from './HelpMark';
import {hotkeyConfig} from './Hotkey';
import {iconConfig} from './Icon';
import {labelConfig} from './Label';
import {linkConfig} from './Link';
import {listConfig} from './List';
import {loaderConfig} from './Loader';
import {menuConfig} from './Menu';
import {modalConfig} from './Modal';
import {overlayConfig} from './Overlay';
import {paginationConfig} from './Pagination';
import {paletteConfig} from './Palette';
import {pinInputConfig} from './PinInput';
import {popoverConfig} from './Popover';
import {popupConfig} from './Popup';
import {portalConfig} from './Portal';
import {progressConfig} from './Progress';
import {radioConfig} from './Radio';
import {radioGroupConfig} from './RadioGroup';
import {segmentedRadioGroupConfig} from './SegmentedRadioGroup';
import {selectConfig} from './Select';
import {sheetConfig} from './Sheet';
import {skeletonConfig} from './Skeleton';
import {sliderConfig} from './Slider';
import {spinConfig} from './Spin';
import {stepperConfig} from './Stepper';
import {switchConfig} from './Switch';
import {tableConfig} from './Table';
import {tabsConfig} from './Tabs';
import {textConfig} from './Text';
import {textAreaConfig} from './TextArea';
import {textInputConfig} from './TextInput';
import {config as toasterConfig} from './Toaster';
import {tocConfig} from './Toc';
import {tooltipConfig} from './Tooltip';
import {userConfig} from './User';
import {userLabelConfig} from './UserLabel';

const config = getLibConfigById('uikit');

const uikitComponents: Component[] = [
    accordionConfig,
    alertConfig,
    arrowToggleConfig,
    avatarConfig,
    actionTooltipConfig,
    breadcrumbsConfig,
    buttonConfig,
    cardConfig,
    checkboxConfig,
    clipboardButtonConfig,
    disclosureConfig,
    dividerConfig,
    dropdownMenuConfig,
    iconConfig,
    labelConfig,
    listConfig,
    linkConfig,
    loaderConfig,
    menuConfig,
    modalConfig,
    overlayConfig,
    paginationConfig,
    paletteConfig,
    pinInputConfig,
    popoverConfig,
    popupConfig,
    portalConfig,
    progressConfig,
    radioConfig,
    segmentedRadioGroupConfig,
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
    tocConfig,
    userConfig,
    userLabelConfig,
    sheetConfig,
    stepperConfig,
    helpMarkConfig,
    hotkeyConfig,
    filePreviewConfig,
];

export const uikit: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    components: sortBy(uikitComponents, 'title'),
};
