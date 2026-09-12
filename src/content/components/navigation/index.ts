import sortBy from 'lodash/sortBy';

import {getLibConfigById} from '../../../libs/config';
import {Repos} from '../../../types/common';
import {getPublishedComponentConfigs, mergeComponentConfigs} from '../catalog';
import {Component, Lib} from '../types';

import {actionBarConfig} from './ActionBar';
import {allPagesPanelConfig} from './AllPagesPanel';
import {asideHeaderConfig} from './AsideHeader';
import {drawerConfig} from './Drawer';
import {footerConfig} from './Footer';
import {hotkeysPanelConfig} from './HotkeysPanel';
import {mobileHeaderConfig} from './MobileHeader';
import {settingsConfig} from './Settings';
const config = getLibConfigById('navigation');

const manualComponents: Component[] = [
    actionBarConfig,
    allPagesPanelConfig,
    asideHeaderConfig,
    drawerConfig,
    hotkeysPanelConfig,
    mobileHeaderConfig,
    settingsConfig,
    footerConfig,
];

const components = mergeComponentConfigs(
    getPublishedComponentConfigs(Repos.Navigation),
    manualComponents,
);

export const navigationComponents: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    components: sortBy(components, 'title'),
};
