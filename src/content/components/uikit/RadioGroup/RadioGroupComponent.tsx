import {RadioGroup, RadioGroupOption, RadioGroupProps} from '@gravity-ui/uikit';

type RadioGroupComponentProps = {
    size?: RadioGroupProps['size'];
    direction?: RadioGroupProps['direction'];
    disabled?: RadioGroupProps['disabled'];
};

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export const RadioGroupComponent = ({size, direction, disabled}: RadioGroupComponentProps) => (
    <RadioGroup
        size={size}
        direction={direction}
        disabled={disabled}
        options={options}
        defaultValue={options[0].value}
    />
);
