import {DateField, DateFieldProps} from '@gravity-ui/date-components';
import {DateTimeInput, dateTimeParse} from '@gravity-ui/date-utils';

type DateFieldExampleProps = {
    defaultValue?: DateTimeInput;
    maxValue?: DateTimeInput;
    minValue?: DateTimeInput;
} & Omit<DateFieldProps, 'defaultValue' | 'maxValue' | 'minValue'>;

export const DateFieldExample = ({
    defaultValue,
    maxValue,
    minValue,
    ...restProps
}: DateFieldExampleProps) => {
    return (
        <DateField
            {...restProps}
            defaultValue={dateTimeParse(defaultValue)}
            maxValue={dateTimeParse(maxValue)}
            minValue={dateTimeParse(minValue)}
        />
    );
};
