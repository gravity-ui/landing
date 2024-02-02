import {RangeCalendar, RangeCalendarProps} from '@gravity-ui/date-components';
import {RangeValue} from '@gravity-ui/date-components/dist/esm/components/types';
import {DateTime, DateTimeInput, dateTime, dateTimeParse} from '@gravity-ui/date-utils';
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

const SelectedRangeText = ({value}: {value?: RangeValue<DateTime>}) => (
    <div style={{textAlign: 'center'}}>
        <div>Selected range:</div>
        <div>{value ? `${value.start?.format('L')} - ${value.end?.format('L')}` : '\u00A0'}</div>
    </div>
);

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
            <SelectedRangeText value={value} />
        </div>
    );
};

type RangeCalendarWithDefaultValueExampleProps = Omit<RangeCalendarExampleProps, 'defaultValue'>;

export const RangeCalendarWithDefaultValueExample = (
    props: RangeCalendarWithDefaultValueExampleProps,
) => {
    const today = dateTime();
    const defaultValue: RangeValue<string> = {
        start: today.subtract({days: 2}).toString(),
        end: today.add({days: 2}).toString(),
    };
    return <RangeCalendarExample {...props} defaultValue={defaultValue} />;
};
