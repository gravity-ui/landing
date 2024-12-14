import React from 'react';
import {TaskTracker} from 'src/components/Examples/pages/TaskTracker/TaskTracker';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';

export const TaskTrackerPage = () => {
    useLocaleRedirect();

    return <TaskTracker />;
};

export default TaskTrackerPage;
