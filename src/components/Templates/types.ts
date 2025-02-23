import {SVGIconData} from '@gravity-ui/uikit/build/esm/components/Icon/types';

export interface TabType {
    title: string;
    icon?: SVGIconData;
    commands?: string[];
    button?: {
        title: string;
        href?: string;
        target?: string;
    };
}
