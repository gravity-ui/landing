import {Checkbox, CheckboxProps} from '@gravity-ui/uikit';

type CheckboxComponentProps = {
    size?: CheckboxProps['size'];
    content?: CheckboxProps['content'];
    checked?: CheckboxProps['checked'];
    disabled?: CheckboxProps['disabled'];
    indeterminate?: CheckboxProps['indeterminate'];
};

export const CheckboxComponent = ({
    size,
    content,
    checked,
    disabled,
    indeterminate,
}: CheckboxComponentProps) => (
    <Checkbox
        size={size}
        content={content}
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
    />
);
