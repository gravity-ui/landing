import {sortBy} from 'lodash';

import {getLibById} from '../../../utils';
import {Component, Lib} from '../types';

import {actionBarConfig} from './ActionBar';
import {allPagesPanelConfig} from './AllPagesPanel';
import {asideHeaderConfig} from './AsideHeader';
import {drawerConfig} from './Drawer';
import {hotkeysPanelConfig} from './HotkeysPanel';
import {mobileHeaderConfig} from './MobileHeader';
import {settingsConfig} from './Settings';

const {config} = getLibById('navigation');

const components: Component[] = [
    actionBarConfig,
    allPagesPanelConfig,
    asideHeaderConfig,
    drawerConfig,
    hotkeysPanelConfig,
    mobileHeaderConfig,
    settingsConfig,
];

export const navigationComponents: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    components: sortBy(components, 'title'),
};
