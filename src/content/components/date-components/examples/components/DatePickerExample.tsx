import {DatePicker, DatePickerProps} from '@gravity-ui/date-components';
import {DateTimeInput, dateTimeParse} from '@gravity-ui/date-utils';

type DatePickerExampleProps = {
    defaultValue?: DateTimeInput;
    maxValue?: DateTimeInput;
    minValue?: DateTimeInput;
} & Omit<DatePickerProps, 'defaultValue' | 'maxValue' | 'minValue'>;

export const DatePickerExample = ({
    defaultValue,
    maxValue,
    minValue,
    ...restProps
}: DatePickerExampleProps) => {
    return (
        <DatePicker
            {...restProps}
            defaultValue={dateTimeParse(defaultValue)}
            maxValue={dateTimeParse(maxValue)}
            minValue={dateTimeParse(minValue)}
        />
    );
};

export const DatePickerSandboxExample = (props: DatePickerExampleProps) => (
    <DatePickerExample {...props} style={{alignSelf: 'flex-start'}} />
);
