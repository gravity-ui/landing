import {sortBy} from 'lodash';

import {getLibById} from '../../../utils';
import {Component, Lib} from '../types';

import {actionBarConfig} from './ActionBar';
import {allPagesPanelConfig} from './AllPagesPanel';
import {asideFallbackConfig} from './AsideFallback';
import {asideHeaderConfig} from './AsideHeader';
import {compositeBarConfig} from './CompositeBar';
import {contentConfig} from './Content';
import {drawerConfig} from './Drawer';
import {drawerItemConfig} from './DrawerItem';
import {footerConfig} from './Footer';
import {footerItemConfig} from './FooterItem';
import {hotkeysPanelConfig} from './HotkeysPanel';
import {logoConfig} from './Logo';
import {mobileFooterConfig} from './MobileFooter';
import {mobileHeaderConfig} from './MobileHeader';
import {mobileHeaderFooterItemConfig} from './MobileHeaderFooterItem';
import {mobileLogoConfig} from './MobileLogo';
import {pageLayoutConfig} from './PageLayout';
import {pageLayoutAsideConfig} from './PageLayoutAside';
import {settingsConfig} from './Settings';
import {titleConfig} from './Title';

const {config} = getLibById('navigation');

const components: Component[] = [
    actionBarConfig,
    allPagesPanelConfig,
    asideFallbackConfig,
    asideHeaderConfig,
    compositeBarConfig,
    contentConfig,
    drawerConfig,
    drawerItemConfig,
    footerConfig,
    footerItemConfig,
    hotkeysPanelConfig,
    logoConfig,
    mobileFooterConfig,
    mobileHeaderConfig,
    mobileHeaderFooterItemConfig,
    mobileLogoConfig,
    pageLayoutConfig,
    pageLayoutAsideConfig,
    settingsConfig,
    titleConfig,
];

export const navigationComponents: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    components: sortBy(components, 'title'),
};
