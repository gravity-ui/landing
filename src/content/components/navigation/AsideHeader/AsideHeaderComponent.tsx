import {Aperture, Gear, Magnifier, Star} from '@gravity-ui/icons';
import {AsideHeader, AsideHeaderProps, FooterItem, SubheaderMenuItem} from '@gravity-ui/navigation';
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
    const [compact, setCompact] = React.useState(false);

    const subheaderItems: SubheaderMenuItem[] = [
        {
            item: {
                id: 'search',
                title: 'Search',
                icon: Magnifier,
                current: visiblePanel === Panel.Search,
                onItemClick: () =>
                    setVisiblePanel(visiblePanel === Panel.Search ? undefined : Panel.Search),
            },
        },
    ];

    return (
        <AsideHeader
            {...restProps}
            compact={compact}
            logo={{text: 'Gravity UI', icon: Aperture}}
            menuItems={menuItems}
            subheaderItems={subheaderItemsVisible ? subheaderItems : []}
            panelItems={[
                {
                    id: 'search',
                    content: (
                        <div style={panelStyle}>
                            <TextInput placeholder="Search by ID" hasClear />
                        </div>
                    ),
                    visible: visiblePanel === Panel.Search,
                },
                {
                    id: 'settings',
                    content: <div style={panelStyle}> Settigs panel</div>,
                    visible: visiblePanel === Panel.Settings,
                },
                {
                    id: 'favorites',
                    content: <div style={panelStyle}>Favorites panel</div>,
                    visible: visiblePanel === Panel.Favorites,
                },
            ]}
            renderFooter={({compact}) => (
                <React.Fragment>
                    <FooterItem
                        item={{
                            id: 'favorites',
                            title: 'Favorites',
                            tooltipText: 'Favorites with panel',
                            current: visiblePanel === Panel.Favorites,
                            icon: Star,
                            onItemClick: () => {
                                setVisiblePanel(
                                    visiblePanel === Panel.Favorites ? undefined : Panel.Favorites,
                                );
                            },
                        }}
                        compact={compact}
                    />
                    <FooterItem
                        item={{
                            id: 'settings',
                            title: 'Settings',
                            tooltipText: 'Settings with panel',
                            current: visiblePanel === Panel.Settings,
                            icon: Gear,
                            onItemClick: () => {
                                setVisiblePanel(
                                    visiblePanel === Panel.Settings ? undefined : Panel.Settings,
                                );
                            },
                        }}
                        compact={compact}
                    />
                </React.Fragment>
            )}
            onChangeCompact={setCompact}
        />
    );
};
