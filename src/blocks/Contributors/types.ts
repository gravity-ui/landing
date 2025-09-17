import {Animatable} from '@gravity-ui/page-constructor';
import {Contributor} from 'src/api';

import {CustomBlock} from '../constants';

type TelegramLink = {
    title: string;
    href: string;
};

export type ContributorsProps = Animatable & {
    title: string;
    link: TelegramLink;
    contributors: Contributor[];
};

export type ContributorsModel = ContributorsProps & {
    type: CustomBlock.Contributors;
};
