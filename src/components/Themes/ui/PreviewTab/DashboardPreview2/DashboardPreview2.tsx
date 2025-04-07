import {CircleFill, Comment as Feedback, Gear} from '@gravity-ui/icons';
import {AsideHeader, AsideHeaderProps, FooterItem, PageLayout} from '@gravity-ui/navigation';
import {Card, Text} from '@gravity-ui/uikit';
import {Fragment, useState} from 'react';
import {block} from 'src/utils';

import {PreviewWrapper, PreviewWrapperProps} from '../PreviewWrapper/PreviewWrapper';

import './DashboardPreview2.scss';
import {DashboardContent} from './components/DashboardContent';
import {HeaderActionBar} from './components/HeaderActionBar';
import {useMenuItems} from './useMenuItems';

const b = block('dashboard-preview-example');

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

export const DashboardPreview2 = (props: Pick<PreviewWrapperProps, 'styles'>) => {
    const [sidebarOpened, toggleSidebarOpened] = useState(true);
    const menuItems = useMenuItems();

    return (
        <PreviewWrapper {...props}>
            {({isLightTheme, themeSwitcher}) => {
                return (
                    <PageLayout
                        className={b({light: String(isLightTheme)})}
                        compact={sidebarOpened}
                    >
                        <AsideHeader
                            logo={logo}
                            compact={sidebarOpened}
                            menuItems={menuItems}
                            renderFooter={renderFooter}
                            renderContent={() => (
                                <div className={b('content-wrapper')}>
                                    <Card className={b('content')} view="filled">
                                        <HeaderActionBar themeSwitcher={themeSwitcher} />
                                        <DashboardContent />
                                    </Card>
                                </div>
                            )}
                            onChangeCompact={toggleSidebarOpened}
                        />
                    </PageLayout>
                );
            }}
        </PreviewWrapper>
    );
};
