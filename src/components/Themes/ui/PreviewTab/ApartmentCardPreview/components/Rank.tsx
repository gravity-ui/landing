import {StarFill} from '@gravity-ui/icons';
import {Flex, Icon, Text} from '@gravity-ui/uikit';

export function Rank({value}: {value: string}) {
    return (
        <Flex alignItems="center" gap={1}>
            <Text color="brand">
                <Icon data={StarFill} size={16} />
            </Text>
            <Text variant="subheader-2">{value}</Text>
        </Flex>
    );
}
