import React from 'react';

import {ArrowToggle, ArrowToggleProps, Button} from '@gravity-ui/uikit';

const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;

export const ArrowToggleExample = (args: ArrowToggleProps) => {
    const [directionIndex, setDirectionIndex] = React.useState(0);
    const direction = directions[directionIndex % directions.length];

    return (
        <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
            <ArrowToggle {...args} direction={direction} /> <span>{direction}</span>
        </Button>
    );
};
ArrowToggleExample.storyName = 'ArrowToggleExample';
