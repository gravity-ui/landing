import {FolderTree} from '@gravity-ui/icons';

import {TaskActionButton} from '../../TaskActionButton/TaskActionButton';

export function AddSubTaskButton() {
    return <TaskActionButton title="Добавить подзадачу" icon={FolderTree} />;
}
