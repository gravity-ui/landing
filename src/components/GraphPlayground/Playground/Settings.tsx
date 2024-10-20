import {Graph} from '@gravity-ui/graph';
import {Gear} from '@gravity-ui/icons';
import {Button, Flex, Icon, Popup, RadioButton, RadioButtonOption, Text} from '@gravity-ui/uikit';
import React, {useRef, useState} from 'react';

import {block} from '../../../utils';

import './Settings.scss';
import {useRerender} from './hooks';

const ConnectionVariants: RadioButtonOption[] = [
    {value: 'bezier', content: 'Bezier'},
    {value: 'line', content: 'Line'},
];

const ConnectionArrowsVariants: RadioButtonOption[] = [
    {value: 'bezier', content: 'Show'},
    {value: 'line', content: 'Hide'},
];

const b = block('graph-settings');

export function GraphSettings({
    className,
    radionButtonClass,
    graph,
}: {
    className: string;
    radionButtonClass: string;
    graph: Graph;
}) {
    const rerender = useRerender();
    const settingBtnRef = useRef<HTMLDivElement>(null);
    const [settingsOpened, setSettingsOpened] = useState(false);
    return (
        <>
            <Button
                size="l"
                view={settingsOpened ? 'action' : 'raised'}
                className={className}
                ref={settingBtnRef}
                onClick={() => setSettingsOpened((prevOpen) => !prevOpen)}
            >
                <Icon data={Gear} />
            </Button>
            <Popup
                anchorRef={settingBtnRef}
                open={settingsOpened}
                onClose={() => setSettingsOpened(false)}
                placement={['right-end']}
            >
                <Flex direction="column" className={b('popup')} gap={3}>
                    <Text variant="subheader-2">Graph settings</Text>
                    <Flex direction="column" gap={2}>
                        <Text variant="subheader-1">Connection type</Text>
                        <RadioButton
                            className={radionButtonClass}
                            size="l"
                            onUpdate={(value) => {
                                graph.updateSettings({
                                    useBezierConnections: value === ConnectionVariants[0].value,
                                });
                                rerender();
                            }}
                            value={
                                ConnectionVariants[
                                    graph.rootStore.settings.getConfigFlag('useBezierConnections')
                                        ? 0
                                        : 1
                                ].value
                            }
                            options={ConnectionVariants}
                        />
                    </Flex>
                    <Flex direction="column" gap={2}>
                        <Text variant="subheader-1">Show arrows</Text>
                        <RadioButton
                            size="l"
                            className={radionButtonClass}
                            onUpdate={(value) => {
                                graph.updateSettings({
                                    showConnectionArrows:
                                        value === ConnectionArrowsVariants[0].value,
                                });
                                rerender();
                            }}
                            value={
                                ConnectionArrowsVariants[
                                    graph.rootStore.settings.getConfigFlag('showConnectionArrows')
                                        ? 0
                                        : 1
                                ].value
                            }
                            options={ConnectionArrowsVariants}
                        />
                    </Flex>
                </Flex>
            </Popup>
        </>
    );
}
