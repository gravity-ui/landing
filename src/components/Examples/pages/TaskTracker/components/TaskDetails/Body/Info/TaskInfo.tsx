import {Flex} from '@gravity-ui/uikit';
import {PropsWithChildren} from 'react';

export type TaskInfoProps = PropsWithChildren<{}>;

import './TaskInfo.scss';

export function TaskInfo({children}: TaskInfoProps) {
    return (
        <Flex direction="column" gap="3" className="task-details-info">
            {children}
        </Flex>
    );
}
