import type {IconProps} from 'landing-uikit';

export type IconMeta = {
    name: string;
    style: 'regular' | 'fill';
    svgName: string;
    componentName: string;
    keywords: string[];
};

export type IconItem = {
    name: string;
    data: IconProps['data'];
    meta: IconMeta;
};
