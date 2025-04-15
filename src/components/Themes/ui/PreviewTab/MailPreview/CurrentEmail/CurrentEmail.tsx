import {
    ArrowShapeTurnUpRight,
    ArrowUturnCcwLeft,
    ArrowUturnCwRight,
    Clock,
    Ellipsis,
    Folder,
    LayoutTabs,
    TrashBin,
} from '@gravity-ui/icons';
import {Divider, Flex} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import {Header} from '../Header/Header';
import {getBlockName} from '../cn';

import {ActionGroup} from './ActionGroup/ActionGroup';

const b = block(getBlockName('current-email'));

const LEFT_ACTIONS = [
    {icon: <Folder />},
    {icon: <LayoutTabs />},
    {icon: <TrashBin />},
    {icon: <Clock />},
];
const RIGHT_ACTIONS = [
    {icon: <ArrowUturnCcwLeft />},
    {icon: <ArrowShapeTurnUpRight />},
    {icon: <ArrowUturnCwRight />},
    {icon: <Ellipsis />},
];

const ActionBar = () => (
    <Header>
        <ActionGroup actions={LEFT_ACTIONS} />
        <ActionGroup actions={RIGHT_ACTIONS} />
    </Header>
);

export const CurrentEmail = () => {
    return (
        <Flex direction="column" className={b()}>
            <ActionBar />
            <Divider />
        </Flex>
    );
};
