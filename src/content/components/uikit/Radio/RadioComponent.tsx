import {Radio, RadioProps} from '@gravity-ui/uikit';

type RadioComponentProps = {
    value: RadioProps['value'];
    size?: RadioProps['size'];
    content?: RadioProps['content'];
    checked?: RadioProps['checked'];
    disabled?: RadioProps['disabled'];
};

export const RadioComponent = ({size, content, checked, disabled}: RadioComponentProps) => (
    <Radio value={'Value 1'} size={size} content={content} checked={checked} disabled={disabled} />
);
