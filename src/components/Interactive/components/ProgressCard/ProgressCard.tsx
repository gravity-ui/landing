import {Flex, Progress} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard';

import './ProgressCard.scss';

const b = block('progress-card');

const progressSets = [
    [10, 20, 30],
    [30, 60, 80],
    [100, 100, 100],
];

export const ProgressCard = () => {
    const [currentSet, setCurrentSet] = React.useState(0);
    const intervalRef = React.useRef<NodeJS.Timer>();

    React.useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSet((prev) => {
                if (prev + 1 >= progressSets.length) {
                    return 0;
                }

                return prev + 1;
            });
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <InteractiveCard>
            <Flex direction="column" space={6} width={220} className={b()}>
                <Progress value={progressSets[currentSet][0]} />
                <Progress value={progressSets[currentSet][1]} />
                <Progress value={progressSets[currentSet][2]} />
            </Flex>
        </InteractiveCard>
    );
};
