import {Slider, SliderProps} from '@gravity-ui/uikit';
import React from 'react';

type SliderExampleProps = Omit<
    SliderProps,
    'max' | 'min' | 'marksCount' | 'step' | 'debounceDelay'
> & {
    max?: string | number;
    min?: string | number;
    marksCount?: string | number;
    step?: string | number;
    debounceDelay?: string | number;
};

export const SliderExample = ({
    defaultValue,
    max,
    min,
    marks,
    step,
    ...restProps
}: SliderExampleProps) => {
    const [value, setValue] = React.useState(defaultValue || min || 0);
    const maxValue = Number(max) || undefined;
    const minValue = Number(min) || undefined;
    const marksValue = Number(marks) || undefined;
    const stepValue = Number(step) || undefined;

    return (
        <div style={{width: '100%', maxWidth: 300}}>
            <Slider
                {...restProps}
                onUpdate={setValue}
                min={minValue}
                max={maxValue}
                marks={marksValue}
                step={stepValue}
                defaultValue={defaultValue}
            />
            <div style={{textAlign: 'center'}}>{`Selected value: ${
                value === undefined ? '' : value
            }`}</div>
        </div>
    );
};
