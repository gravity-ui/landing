import {Flex, Progress} from 'landing-uikit';
import React from 'react';

import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard';

import './ProgressCard.scss';

const b = block('progress-card');

const progressSets = [
    [20, 100, 50, 100],
    [50, 20, 100, 20],
    [20, 50, 20, 50],
];

export const ProgressCard = () => {
    const [currentSet, setCurrentSet] = React.useState(0);
    const intervalRef = React.useRef<NodeJS.Timer>();

    React.useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSet((prev) => {
                if (prev + 1 >= progressSets[0].length) {
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
                <Progress value={progressSets[0][currentSet]} />
                <Progress value={progressSets[1][currentSet]} />
                <Progress value={progressSets[2][currentSet]} />
            </Flex>
        </InteractiveCard>
    );
};
