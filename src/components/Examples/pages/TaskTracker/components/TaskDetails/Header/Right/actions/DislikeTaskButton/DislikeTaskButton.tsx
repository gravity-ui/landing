import {ThumbsDown} from '@gravity-ui/icons';

import {TaskActionButton} from '../../TaskActionButton/TaskActionButton';

export function DislikeTaskButton() {
    return <TaskActionButton title="Не нравится" icon={ThumbsDown} />;
}
