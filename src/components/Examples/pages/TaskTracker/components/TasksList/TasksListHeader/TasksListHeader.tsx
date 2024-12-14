import {ArrowUpArrowDown, Calendar, ChevronDown, Plus} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';

import './TasksListHeader.scss';

export function TasksListHeader() {
    return (
        <Flex alignItems="center" className="tasks-list-header" justifyContent="space-between">
            <Flex alignItems="center" gap="0.5">
                <Text variant="subheader-2">Today</Text>
                <Button view="flat-secondary" size="m">
                    <Icon data={Calendar} />
                </Button>
            </Flex>
            <Flex alignItems="center" gap="0.5">
                <Button view="flat-secondary" size="m">
                    <Icon data={ArrowUpArrowDown} />
                    Sort
                </Button>
                <div>
                    <Button view="action" size="m" pin="round-brick">
                        <Icon data={Plus} />
                        Add Task
                    </Button>
                    <Button view="action" size="m" pin="brick-round">
                        <Icon data={ChevronDown} />
                    </Button>
                </div>
            </Flex>
        </Flex>
    );
}
