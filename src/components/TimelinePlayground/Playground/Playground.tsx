import {ChevronsCollapseHorizontal} from '@gravity-ui/icons';
import {useTimeline} from '@gravity-ui/timeline/react';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import cloneDeep from 'lodash/cloneDeep';
import React, {useEffect} from 'react';

import {block} from '../../../utils';

import {Editor} from './Editor';
import './Playground.scss';
import {Timeline} from './Timeline';
import {initialState} from './constants';
import {getTimelineItemsRange} from './helpers/getTimelineItemsRange';

const b = block('timeline-playground');

export const Playground = () => {
    const {timeline} = useTimeline(cloneDeep(initialState));

    useEffect(() => {
        return () => {
            if (timeline) {
                timeline.destroy();
            }
        };
    }, [timeline]);

    const handleCameraFocus = () => {
        const {min, max} = getTimelineItemsRange(timeline);
        timeline.api.setRange(min, max);
    };

    return (
        <div className={b()}>
            <Flex direction="column" grow={1} className={b('content')} gap={6}>
                <Flex gap={2}>
                    <Text variant="header-1">Timeline</Text>
                    <Button onClick={handleCameraFocus}>
                        <Icon data={ChevronsCollapseHorizontal} size={16} />
                    </Button>
                </Flex>
                <Timeline timeline={timeline} />
            </Flex>
            <Flex direction="column" grow={1} className={b('content')} gap={6}>
                <Text variant="header-1">JSON Editor</Text>
                <Editor timeline={timeline} />
            </Flex>
        </div>
    );
};
