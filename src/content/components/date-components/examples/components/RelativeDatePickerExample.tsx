import {RelativeDatePicker, RelativeDatePickerProps} from '@gravity-ui/date-components';
import type {Value} from '@gravity-ui/date-components';
import {DateTimeInput, dateTimeParse} from '@gravity-ui/date-utils';
import React from 'react';

type RelativeDatePickerExampleProps = {
    defaultValue?: DateTimeInput;
    isRelative?: boolean;
    maxValue?: DateTimeInput;
    minValue?: DateTimeInput;
} & Omit<RelativeDatePickerProps, 'defaultValue' | 'maxValue' | 'minValue'>;

export const RelativeDatePickerExample = ({
    defaultValue,
    isRelative,
    maxValue,
    minValue,
    ...restProps
}: RelativeDatePickerExampleProps) => {
    let parsedValue: RelativeDatePickerProps['defaultValue'];
    if (defaultValue) {
        parsedValue = isRelative
            ? {type: 'relative', value: defaultValue as string}
            : {type: 'absolute', value: dateTimeParse(defaultValue)!};
    }
    return (
        <RelativeDatePicker
            {...restProps}
            defaultValue={parsedValue}
            maxValue={dateTimeParse(maxValue)}
            minValue={dateTimeParse(minValue)}
        />
    );
};

export const RelativeDatePickerSandboxExample = (props: RelativeDatePickerExampleProps) => {
    const [value, setValue] = React.useState<Value | null>(null);

    return (
        <div
            style={{
                alignSelf: 'flex-start',
                width: '100%',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                gap: '20px',
            }}
        >
            <div>
                <RelativeDatePickerExample {...props} onUpdate={setValue} />
            </div>
            <div>value: {value ? JSON.stringify(value, null, 2) : 'null'}</div>
        </div>
    );
};
