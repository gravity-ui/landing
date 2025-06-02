import {Card, Flex, Label, Text} from '@gravity-ui/uikit';

import {Email} from '../../types';
import {humanReadableDateFromNow} from '../../utils';

type EmailCardProps = {email: Email};

export const EmailCard = ({email}: EmailCardProps) => (
    <Card spacing={{p: 3}}>
        <Flex gap={1} alignItems="center" justifyContent="space-between">
            <Text variant="subheader-1">{email.fromTitle}</Text>
            <Text color="secondary">{humanReadableDateFromNow(email.created)}</Text>
        </Flex>
        <Text color="complementary">{email.subject}</Text>
        <Text color="secondary" ellipsisLines={2} ellipsis>
            {email.body}
        </Text>
        <Flex gap={2}>
            {email.labels.map((label) => (
                <Label size="xs" theme="unknown" key={label}>
                    {label}
                </Label>
            ))}
        </Flex>
    </Card>
);
