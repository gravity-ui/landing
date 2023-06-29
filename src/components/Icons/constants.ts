import * as gravityIcons from '@gravity-ui/icons';

export const allIcons = Object.entries(gravityIcons)
    .map(([name, data]) => ({name, data}))
    .sort((a, b) => a.name.localeCompare(b.name));
