import {Link} from '@gravity-ui/icons';

import {TaskActionButton} from '../../TaskActionButton/TaskActionButton';

export function CopyTaskLinkButton() {
    return <TaskActionButton title="Копировать ссылку" icon={Link} />;
}
