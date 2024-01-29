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
    const parsedDefaultValue = defaultValue ? dateTimeParse(defaultValue) : undefined;
    const parsedMaxValue = maxValue ? dateTimeParse(maxValue) : undefined;
    const parsedMinValue = minValue ? dateTimeParse(minValue) : undefined;

    return (
        <DateField
            {...restProps}
            defaultValue={parsedDefaultValue}
            maxValue={parsedMaxValue}
            minValue={parsedMinValue}
        />
    );
};
