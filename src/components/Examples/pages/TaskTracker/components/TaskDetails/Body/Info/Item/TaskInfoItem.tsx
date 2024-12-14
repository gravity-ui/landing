import {Flex, Text} from '@gravity-ui/uikit';
import {PropsWithChildren} from 'react';

export type TaskInfoItemProps = PropsWithChildren<{
    title: string;
}>;

export function TaskInfoItem({children, title}: TaskInfoItemProps) {
    return (
        <Flex gap="4" className="task-details-info-item" alignItems="center">
            <Text variant="body-1" color="secondary" className="task-details-info-item-title">
                {title}
            </Text>
            {children}
        </Flex>
    );
}
