import {Cloud, Gear, Hammer, Rocket} from '@gravity-ui/icons';
import {Stepper} from '@gravity-ui/uikit';

const items = ['Step 1', 'Step 2', 'Step 3', 'Step 4 with very long title'];
const icons = [Gear, Rocket, Cloud, Hammer];

export const StepperCustomIconExample = () => {
    return (
        <Stepper>
            {items.map((item, index) => (
                <Stepper.Item key={item} icon={icons[index]}>
                    {item}
                </Stepper.Item>
            ))}
        </Stepper>
    );
};
