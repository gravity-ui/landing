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
import {Divider, Flex, Text} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import {Header} from '../Header/Header';
import {getBlockName} from '../cn';
import {Email} from '../types';

import {ActionGroup} from './ActionGroup/ActionGroup';
import './CurrentEmail.scss';
import {EmailHeader} from './EmailHeader/EmailHeader';
import {ReplyEditor} from './ReplyEditor/ReplyEditor';

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

export const CurrentEmail = ({body, created, fromEmail, fromTitle, subject, reply}: Email) => {
    return (
        <Flex direction="column" className={b()}>
            <ActionBar />
            <Divider />
            <EmailHeader
                created={created}
                fromEmail={fromEmail}
                fromTitle={fromTitle}
                subject={subject}
            />
            <Divider />
            <Text variant="body-short" className={b('email-body')}>
                {body}
            </Text>
            <Divider />
            <ReplyEditor reply={reply} />
        </Flex>
    );
};
