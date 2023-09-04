import {RadioButton, RadioButtonOption, RadioButtonProps} from '@gravity-ui/uikit';

type RadioButtonComponentProps = {
    size?: RadioButtonProps['size'];
    width?: RadioButtonProps['width'];
    disabled?: RadioButtonProps['disabled'];
};

const options: RadioButtonOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export const RadioButtonComponent = ({size, width, disabled}: RadioButtonComponentProps) => (
    <RadioButton size={size} width={width} disabled={disabled} options={options} />
);
