import {Flex, Text, User} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import {getBlockName} from '../../cn';
import {Email} from '../../types';
import {humanReadableDate} from '../../utils';

import './EmailHeader.scss';

const b = block(getBlockName('email-header'));

export const EmailHeader = ({
    created,
    fromEmail,
    fromTitle,
    subject,
}: Pick<Email, 'created' | 'fromEmail' | 'fromTitle' | 'subject'>) => (
    <Flex className={b()} justifyContent="space-between">
        <User
            size="m"
            description={subject}
            name={<span title={fromEmail}>{fromTitle}</span>}
            avatar={{text: fromTitle, theme: 'brand'}}
        />
        {created && <Text color="secondary">{humanReadableDate(created)}</Text>}
    </Flex>
);
