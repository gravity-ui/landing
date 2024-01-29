import {Calendar, CalendarProps} from '@gravity-ui/date-components';
import {DateTimeInput, dateTimeParse} from '@gravity-ui/date-utils';

type CalendarExampleProps = {
    defaultValue?: DateTimeInput;
    maxValue?: DateTimeInput;
    minValue?: DateTimeInput;
    defaultFocusedValue?: DateTimeInput;
    focusedValue?: DateTimeInput;
} & Omit<
    CalendarProps,
    'defaultValue' | 'maxValue' | 'minValue' | 'defaultFocusedValue' | 'focusedValue'
>;

export const CalendarExample = ({
    focusedValue,
    defaultFocusedValue,
    defaultValue,
    maxValue,
    minValue,
    ...otherProps
}: CalendarExampleProps) => {
    const modes: CalendarProps['modes'] = {days: true, months: true, quarters: true, years: true};
    return (
        <Calendar
            {...otherProps}
            defaultFocusedValue={dateTimeParse(defaultFocusedValue)}
            defaultValue={dateTimeParse(defaultValue)}
            minValue={dateTimeParse(minValue)}
            maxValue={dateTimeParse(maxValue)}
            focusedValue={dateTimeParse(focusedValue)}
            modes={modes}
        />
    );
};
