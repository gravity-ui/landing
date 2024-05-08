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
    marksCount,
    step,
    debounceDelay,
    ...restProps
}: SliderExampleProps) => {
    const [value, setValue] = React.useState(defaultValue);
    const maxValue = Number(max) || undefined;
    const minValue = Number(min) || undefined;
    const marksCountValue = Number(marksCount) || undefined;
    const stepValue = Number(step) || undefined;
    const debounceDelayValue = Number(debounceDelay) || undefined;

    return (
        <div style={{width: '100%', maxWidth: 300}}>
            <Slider
                {...restProps}
                onUpdate={setValue}
                min={minValue}
                max={maxValue}
                marksCount={marksCountValue}
                step={stepValue}
                debounceDelay={debounceDelayValue}
                defaultValue={defaultValue}
            />
            <div style={{textAlign: 'center'}}>{`Selected value: ${
                value === undefined ? '' : value
            }`}</div>
        </div>
    );
};
