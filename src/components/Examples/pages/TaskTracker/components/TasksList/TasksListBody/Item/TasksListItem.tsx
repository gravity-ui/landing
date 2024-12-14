import {Checkbox, Flex, Label, Text} from '@gravity-ui/uikit';

import './TasksListItem.scss';

export interface TasksListItemProps {
    isLast?: boolean;
    title: string;
    isActive?: boolean;
    labels: {
        title: string;
        theme:
            | 'normal'
            | 'info'
            | 'danger'
            | 'warning'
            | 'success'
            | 'utility'
            | 'unknown'
            | 'clear';
    }[];
}

export function TasksListItem({title, isActive, labels, isLast}: TasksListItemProps) {
    return (
        <div
            className={
                'task-list-item' +
                (isLast ? ' task-list-item--last' : '') +
                (isActive ? ' task-list-item--active' : '')
            }
        >
            <div className="task-list-item__inner">
                <Flex gap="2">
                    <div>
                        <Checkbox size="m" />
                    </div>
                    <Text variant="body-1">{title}</Text>
                </Flex>
                {labels.length > 0 && (
                    <Flex gap="2">
                        {labels.map((label, i) => (
                            <Label size="xs" key={i} theme={label.theme}>
                                {label.title}
                            </Label>
                        ))}
                    </Flex>
                )}
            </div>
        </div>
    );
}
