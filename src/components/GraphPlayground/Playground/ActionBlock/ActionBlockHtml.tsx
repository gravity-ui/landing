import {Graph} from '@gravity-ui/graph';
import {GraphBlock, GraphBlockAnchor} from '@gravity-ui/graph/react';
import {Database} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block as blockBem} from '../../../../utils';
import {TGravityActionBlock} from '../generateLayout';

import './ActionBlock.scss';

const b = blockBem('block');

export function ActionBlockHtml({graph, block}: {graph: Graph; block: TGravityActionBlock}) {
    return (
        <GraphBlock graph={graph} block={block} className={b()}>
            {block.anchors.map((anchor) => {
                return (
                    <GraphBlockAnchor
                        key={anchor.id}
                        position="absolute"
                        graph={graph}
                        anchor={anchor}
                    />
                );
            })}
            <Flex grow={1} direction={'column'}>
                <Text ellipsis variant="caption-2" className={b('name')}>
                    {block.name}
                </Text>
                <Text ellipsis variant="caption-1" color="secondary">
                    {block.meta?.description}
                </Text>
            </Flex>
            <Flex>
                <Button onClick={(e) => e.stopPropagation()}>
                    <Icon data={Database} />
                </Button>
            </Flex>
        </GraphBlock>
    );
}
