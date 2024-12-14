import {GetStaticProps} from 'next';
import React from 'react';
import {TaskTracker} from 'src/components/Examples/pages/TaskTracker/TaskTracker';

import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nProps} from '../../../utils';

export const TaskTrackerPage = () => {
    useLocaleRedirect();

    return <TaskTracker />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['examples'])),
        },
    };
    return result;
};

export default TaskTrackerPage;
