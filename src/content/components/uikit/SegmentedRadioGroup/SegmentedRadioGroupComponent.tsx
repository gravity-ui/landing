import {
    SegmentedRadioGroup,
    SegmentedRadioGroupOptionProps,
    SegmentedRadioGroupProps,
} from '@gravity-ui/uikit';

type SegmentedRadioGroupComponentProps = {
    size?: SegmentedRadioGroupProps['size'];
    width?: SegmentedRadioGroupProps['width'];
    disabled?: SegmentedRadioGroupProps['disabled'];
};

const options: SegmentedRadioGroupOptionProps[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export const SegmentedRadioGroupComponent = ({
    size,
    width,
    disabled,
}: SegmentedRadioGroupComponentProps) => (
    <SegmentedRadioGroup size={size} width={width} disabled={disabled} options={options} />
);
