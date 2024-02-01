import {RangeCalendar, RangeCalendarProps} from '@gravity-ui/date-components';
import {RangeValue} from '@gravity-ui/date-components/dist/esm/components/types';
import {DateTimeInput, dateTimeParse} from '@gravity-ui/date-utils';
import React from 'react';

type RangeCalendarExampleProps = {
    defaultValue?: RangeValue<DateTimeInput>;
    maxValue?: DateTimeInput;
    minValue?: DateTimeInput;
    defaultFocusedValue?: DateTimeInput;
    focusedValue?: DateTimeInput;
} & Omit<
    RangeCalendarProps,
    'defaultValue' | 'maxValue' | 'minValue' | 'defaultFocusedValue' | 'focusedValue'
>;

export const RangeCalendarExample = ({
    focusedValue,
    defaultFocusedValue,
    defaultValue,
    maxValue,
    minValue,
    ...otherProps
}: RangeCalendarExampleProps) => {
    const modes: RangeCalendarExampleProps['modes'] = {
        days: true,
        months: true,
        quarters: true,
        years: true,
    };

    const parsedDefaultValue: RangeCalendarProps['defaultValue'] = defaultValue
        ? {start: dateTimeParse(defaultValue.start)!, end: dateTimeParse(defaultValue.end)!}
        : undefined;

    const [value, setValue] = React.useState(parsedDefaultValue);
    return (
        <div>
            <RangeCalendar
                {...otherProps}
                defaultFocusedValue={dateTimeParse(defaultFocusedValue)}
                defaultValue={parsedDefaultValue}
                minValue={dateTimeParse(minValue)}
                maxValue={dateTimeParse(maxValue)}
                focusedValue={dateTimeParse(focusedValue)}
                onUpdate={setValue}
                modes={modes}
            />
            <div>
                Selected range:{' '}
                {value ? `${value.start.format('L')} - ${value.end.format('L')}` : ''}
            </div>
        </div>
    );
};
