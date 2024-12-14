import {Card, Divider} from '@gravity-ui/uikit';

import {TaskDetailsAlert} from './Alert';
import {TaskDetailsBody} from './Body';
import {TaskDetailsFooter} from './Footer';
import {TaskDetailsHeader} from './Header';
import './TaskDetails.scss';

export function TaskDetails() {
    return (
        <Card className="task-details">
            <TaskDetailsHeader />
            <TaskDetailsAlert />
            <TaskDetailsBody />
            <Divider />
            <TaskDetailsFooter />
        </Card>
    );
}
