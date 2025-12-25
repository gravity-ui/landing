import {Animatable} from '@gravity-ui/page-constructor';

import {CustomBlock} from '../constants';

type TelegramLink = {
    title: string;
    href: string;
};

export type ContributorsProps = Animatable & {
    title: string;
    link: TelegramLink;
};

export type ContributorsModel = ContributorsProps & {
    type: CustomBlock.Contributors;
};
