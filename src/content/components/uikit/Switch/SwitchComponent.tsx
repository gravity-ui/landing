import {Switch, SwitchProps} from '@gravity-ui/uikit';

type SwitchComponentProps = {
    size?: SwitchProps['size'];
    content?: SwitchProps['content'];
    checked?: SwitchProps['checked'];
    disabled?: SwitchProps['disabled'];
};

export const SwitchComponent = ({size, content, checked, disabled}: SwitchComponentProps) => (
    <Switch size={size} content={content} checked={checked} disabled={disabled} />
);
