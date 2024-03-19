import {Gear} from '@gravity-ui/icons';
import {Button, ButtonProps, Icon} from '@gravity-ui/uikit';
import {FC} from 'react';

export const ButtonWrapper: FC<
    ButtonProps & {
        startIcon?: boolean;
        endIcon?: boolean;
        onlyIcon?: boolean;
    }
> = (props) => {
    return (
        <Button {...props}>
            {props.onlyIcon
                ? [<Icon data={Gear} />]
                : [
                      props.startIcon && <Icon data={Gear} />,
                      props.children,
                      props.endIcon && <Icon data={Gear} />,
                  ]}
        </Button>
    );
};
