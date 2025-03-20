import {CircleFill, Comment as Feedback, Gear} from '@gravity-ui/icons';
import {AsideHeader, AsideHeaderProps, FooterItem, PageLayout} from '@gravity-ui/navigation';
import {Text} from '@gravity-ui/uikit';
import {Fragment, useState} from 'react';
import {block} from 'src/utils';

import {PageContent} from './PageContent';
import './PageLayout.scss';
import {useMenuItems} from './useMenuItems';

const b = block('dashboard-example');

const logo: AsideHeaderProps['logo'] = {
    text: () => <Text variant="subheader-2">Gravity B2B</Text>,
    icon: CircleFill,
    iconClassName: b('logo-icon'),
};

const renderFooter: AsideHeaderProps['renderFooter'] = ({compact}) => (
    <Fragment>
        <FooterItem
            compact={compact}
            item={{
                id: 'feedback',
                title: 'Feedback',
                icon: Feedback,
            }}
        />
        <FooterItem
            item={{
                id: 'settings',
                icon: Gear,
                title: 'Settings',
            }}
            compact={compact}
        />
    </Fragment>
);

export const Dashboard = () => {
    const [sidebarOpened, toggleSidebarOpened] = useState(true);
    const menuItems = useMenuItems();

    return (
        <PageLayout className={b()} compact={sidebarOpened}>
            <AsideHeader
                logo={logo}
                compact={sidebarOpened}
                menuItems={menuItems}
                renderFooter={renderFooter}
                renderContent={PageContent}
                onChangeCompact={toggleSidebarOpened}
            />
        </PageLayout>
    );
};
