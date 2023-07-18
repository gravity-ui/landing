import * as gravityIcons from '@gravity-ui/icons';
import iconsMetadata from '@gravity-ui/icons/metadata.json';

import type {IconItem, IconMeta} from './types';

const iconsMetadataByName = (iconsMetadata.icons as IconMeta[]).reduce(
    (acc, icon) => ({...acc, [icon.componentName]: icon}),
    {} as Record<string, IconMeta>,
);

export const allIcons: IconItem[] = Object.entries(gravityIcons)
    .map(([name, data]) => ({name, data, meta: iconsMetadataByName[name]}))
    .sort((a, b) => a.name.localeCompare(b.name));
