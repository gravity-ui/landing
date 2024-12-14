import {Xmark} from '@gravity-ui/icons';

import {TaskActionButton} from '../TaskActionButton/TaskActionButton';

export function CloseTaskDetailsButton() {
    return <TaskActionButton title="Закрыть" icon={Xmark} />;
}
