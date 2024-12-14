import {Paperclip} from '@gravity-ui/icons';

import {TaskActionButton} from '../../TaskActionButton/TaskActionButton';

export function AddTaskAttachmentButton() {
    return <TaskActionButton title="Добавить вложение" icon={Paperclip} />;
}
