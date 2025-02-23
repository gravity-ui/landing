import {IconData} from '@gravity-ui/uikit';

export interface TabType {
    title: string;
    icon?: IconData;
    commands?: string[];
    button?: {
        title: string;
        href?: string;
        target?: string;
    };
}
