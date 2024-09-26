import {HotkeysPanel} from '@gravity-ui/navigation';
import {Hotkey, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';

import './HotkeysPanelComponent.scss';
import {hotkeys} from './constants';

const b = block('hotkeys-panel');

type HotkeysPanelComponentProps = {
    visible: boolean;
    filterable: boolean;
    filterPlaceholder: string;
};

export function HotkeysPanelComponent({
    visible,
    filterable,
    filterPlaceholder,
}: HotkeysPanelComponentProps) {
    return (
        <HotkeysPanel
            hotkeys={hotkeys}
            visible={visible}
            filterable={filterable}
            title={
                <span className={b('title')}>
                    Hotkeys
                    <Hotkey value="shift+K" />
                </span>
            }
            filterPlaceholder={filterPlaceholder}
            emptyState={
                <Text variant="header-1" className={b('empty')}>
                    No hotkeys found
                </Text>
            }
        />
    );
}
