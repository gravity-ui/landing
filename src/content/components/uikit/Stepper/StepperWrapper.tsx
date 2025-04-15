import {Stepper, type StepperItemView, type StepperProps} from '@gravity-ui/uikit';

const items = ['Step 1', 'Step 2', 'Step 3', 'Step 4 with very long title'];

export const StepperWrapper = (props: StepperProps & {view: StepperItemView}) => {
    const {view, ...restProps} = props;

    return (
        <div style={{padding: '16px'}}>
            <Stepper {...restProps}>
                {items.map((item) => (
                    <Stepper.Item key={item} view={view}>
                        {item}
                    </Stepper.Item>
                ))}
            </Stepper>
        </div>
    );
};
