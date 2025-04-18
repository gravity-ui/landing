import {Card, Flex, Label, Text} from '@gravity-ui/uikit';
import {useCallback} from 'react';
import {block} from 'src/utils';

import {getBlockName} from '../../cn';
import {Email} from '../../types';
import {humanReadableDateFromNow} from '../../utils';

import './EmailCard.scss';

const b = block(getBlockName('email-card'));

export type EmailCardProps = {email: Email; selected?: boolean; onClick: (email: Email) => void};

const NotReadMark = () => (
    <Flex alignItems="center" justifyContent="center" spacing={{p: 1}}>
        <span className={b('dot')} />
    </Flex>
);

export const EmailCard = ({email, selected, onClick}: EmailCardProps) => {
    const handleClick = useCallback(() => {
        if (!selected) {
            onClick?.(email);
        }
    }, [email, selected]);
    return (
        <Card
            type="selection"
            className={b({selected})}
            view={selected ? 'clear' : 'outlined'}
            onClick={handleClick}
        >
            <Flex gap={1} alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Text variant="subheader-1">{email.fromTitle}</Text>
                    {!email.read && <NotReadMark />}
                </Flex>
                <Text color="secondary">{humanReadableDateFromNow(email.created)}</Text>
            </Flex>
            <Flex gap={1} direction="column">
                <Text color="complementary">{email.subject}</Text>
                <Flex gap={2} direction="column">
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
                </Flex>
            </Flex>
        </Card>
    );
};
