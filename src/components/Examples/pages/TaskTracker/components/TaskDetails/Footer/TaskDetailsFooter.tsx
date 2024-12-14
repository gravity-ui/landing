import {Flex} from '@gravity-ui/uikit';

import {AddTaskCollaboratorButton} from './AddTaskCollaboratorButton';
import {SendTaskCommentButton} from './SendTaskCommentButton';
import {TaskCommentInput} from './TaskCommentInput';
import './TaskDetailsFooter.scss';

export function TaskDetailsFooter() {
    return (
        <Flex direction="column" gap="3" className="task-details-footer">
            <TaskCommentInput />
            <Flex justifyContent="space-between">
                <AddTaskCollaboratorButton />
                <SendTaskCommentButton />
            </Flex>
        </Flex>
    );
}
