import {getLibConfigById} from '../../../libs/config';
import {Lib} from '../types';

import {storeBadgeConfig} from './StoreBadge';

const config = getLibConfigById('components');

export const components: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    components: [storeBadgeConfig],
};
