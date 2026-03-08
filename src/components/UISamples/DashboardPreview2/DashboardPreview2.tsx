import {CircleFill, Comment as Feedback, Gear} from '@gravity-ui/icons';
import {AsideHeader, AsideHeaderProps, FooterItem, PageLayout} from '@gravity-ui/navigation';
import {Card, Text} from '@gravity-ui/uikit';
import {Fragment, useCallback, useState} from 'react';
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

const renderFooter: AsideHeaderProps['renderFooter'] = ({isExpanded}) => (
    <Fragment>
        <FooterItem id="feedback" title="Feedback" icon={Feedback} isExpanded={isExpanded} />
        <FooterItem id="settings" title="Feedback" icon={Gear} isExpanded={isExpanded} />
    </Fragment>
);

export const DashboardPreview2 = (props: Pick<PreviewWrapperProps, 'styles'>) => {
    const [pinned, setPinned] = useState(false);
    const menuItems = useMenuItems();

    const handleChangePinned = useCallback((val: boolean) => {
        window.dispatchEvent(new Event('resize'));
        setPinned(val);
    }, []);

    return (
        <PreviewWrapper {...props}>
            {({isLightTheme, themeSwitcher}) => {
                return (
                    <PageLayout className={b({light: String(isLightTheme)})} pinned={pinned}>
                        <AsideHeader
                            logo={logo}
                            pinned={pinned}
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
                            onChangePinned={handleChangePinned}
                        />
                    </PageLayout>
                );
            }}
        </PreviewWrapper>
    );
};
