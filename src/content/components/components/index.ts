import {getLibById} from '../../../utils';
import {Lib} from '../types';

import {storeBadgeConfig} from './StoreBadge';

const {config} = getLibById('components');

export const components: Lib = {
    id: config.id,
    title: config.title,
    primary: config.primary,
    description: config.description,
    components: [storeBadgeConfig],
};
