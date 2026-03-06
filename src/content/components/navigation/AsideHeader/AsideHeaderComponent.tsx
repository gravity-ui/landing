import {Aperture, Gear, Magnifier, Star} from '@gravity-ui/icons';
import {AsideHeader, AsideHeaderItem, AsideHeaderProps, FooterItem} from '@gravity-ui/navigation';
import {TextInput} from '@gravity-ui/uikit';
import React from 'react';

import {menuItems} from '../constants';

enum Panel {
    Favorites = 'favorites',
    Search = 'search',
    Settings = 'settings',
}

export interface AsideHeaderComponentProps extends AsideHeaderProps {
    subheaderItemsVisible?: boolean;
}

const panelStyle = {padding: 20, width: 200};

export const AsideHeaderComponent = ({
    subheaderItemsVisible,
    ...restProps
}: AsideHeaderComponentProps) => {
    const [visiblePanel, setVisiblePanel] = React.useState<Panel>();
    const [pinned, setPinned] = React.useState(true);

    const subheaderItems: AsideHeaderItem[] = [
        {
            id: 'search',
            title: 'Search',
            icon: Magnifier,
            current: visiblePanel === Panel.Search,
            onItemClick: () =>
                setVisiblePanel(visiblePanel === Panel.Search ? undefined : Panel.Search),
        },
    ];

    return (
        <AsideHeader
            {...restProps}
            pinned={pinned}
            logo={{text: 'Gravity UI', icon: Aperture}}
            menuItems={menuItems}
            subheaderItems={subheaderItemsVisible ? subheaderItems : []}
            panelItems={[
                {
                    id: 'search',
                    children: (
                        <div style={panelStyle}>
                            <TextInput placeholder="Search by ID" hasClear />
                        </div>
                    ),
                    open: visiblePanel === Panel.Search,
                },
                {
                    id: 'settings',
                    children: <div style={panelStyle}>Settings panel</div>,
                    open: visiblePanel === Panel.Settings,
                },
                {
                    id: 'favorites',
                    children: <div style={panelStyle}>Favorites panel</div>,
                    open: visiblePanel === Panel.Favorites,
                },
            ]}
            renderFooter={({isExpanded}) => (
                <React.Fragment>
                    <FooterItem
                        id="favorites"
                        title="Favorites"
                        tooltipText="Favorites with panel"
                        current={visiblePanel === Panel.Favorites}
                        icon={Star}
                        onItemClick={() => {
                            setVisiblePanel(
                                visiblePanel === Panel.Favorites ? undefined : Panel.Favorites,
                            );
                        }}
                        isExpanded={isExpanded}
                    />
                    <FooterItem
                        id="settings"
                        title="Settings"
                        tooltipText="Settings with panel"
                        current={visiblePanel === Panel.Settings}
                        icon={Gear}
                        onItemClick={() => {
                            setVisiblePanel(
                                visiblePanel === Panel.Settings ? undefined : Panel.Settings,
                            );
                        }}
                        isExpanded={isExpanded}
                    />
                </React.Fragment>
            )}
            onChangePinned={setPinned}
        />
    );
};
