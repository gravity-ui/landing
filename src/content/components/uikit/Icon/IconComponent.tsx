import {Eye, Gear, Globe, Person, Star} from '@gravity-ui/icons';
import {Icon} from '@gravity-ui/uikit';
import {FC} from 'react';

const ICON_MAP = {
    Gear,
    Star,
    Person,
    Eye,
    Globe,
};

type IconName = keyof typeof ICON_MAP;

interface IconComponentProps {
    icon: IconName;
    size?: number | string;
}

export const IconComponent: FC<IconComponentProps> = ({icon, size}) => {
    const data = ICON_MAP[icon] ?? Gear;
    return <Icon data={data} size={size} />;
};
