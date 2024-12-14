import {Flex} from '@gravity-ui/uikit';

import {CloseTaskDetailsButton} from './CloseTaskDetailsButton';
import {
    AddSubTaskButton,
    AddTaskAttachmentButton,
    DislikeTaskButton,
    LikeTaskButton,
} from './actions';

export function TaskDetailsHeaderRight() {
    return (
        <Flex gap="2">
            <AddTaskAttachmentButton />
            <AddSubTaskButton />
            <LikeTaskButton />
            <DislikeTaskButton />
            <CloseTaskDetailsButton />
        </Flex>
    );
}
