import {Graph, GraphBlock} from '@gravity-ui/graph';
import {CircleInfo} from '@gravity-ui/icons';
import {Flex, Icon, Text} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {TGravityTextBlock} from '../generateLayout';

import './TextBlock.scss';

const b = block('text-block');

export function TextBlockHtml({graph, block}: {graph: Graph; block: TGravityTextBlock}) {
    return (
        <GraphBlock graph={graph} block={block} className={b()}>
            <Flex direction={'row'} gap={2} alignItems="center" grow={1}>
                <Icon className={b('icon')} data={CircleInfo} size={18} />
                <Text className={b('text')} ellipsis variant="body-1">
                    {block.meta?.text}
                </Text>
                {/* <Icon className="icon" data={Xmark}  size={18}/> */}
            </Flex>
        </GraphBlock>
    );
}
