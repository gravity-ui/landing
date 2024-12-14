import {Flex} from '@gravity-ui/uikit';

import {TaskDetailsHeaderLeft} from './Left';
import {TaskDetailsHeaderRight} from './Right';
import './TaskDetailsHeader.scss';

export function TaskDetailsHeader() {
    return (
        <Flex justifyContent="space-between" className="task-details-header">
            <TaskDetailsHeaderLeft />
            <TaskDetailsHeaderRight />
        </Flex>
    );
}
