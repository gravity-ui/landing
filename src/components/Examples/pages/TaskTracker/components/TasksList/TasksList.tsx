import {Card} from '@gravity-ui/uikit';

import './TasksList.scss';
import {TasksListBody} from './TasksListBody';
import {TasksListHeader} from './TasksListHeader';
import {TasksListTabs} from './TasksListTabs';

export function TasksList() {
    return (
        <Card className="tasks-list">
            <TasksListHeader />
            <TasksListTabs />
            <TasksListBody />
        </Card>
    );
}
