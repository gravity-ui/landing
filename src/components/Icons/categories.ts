import type {IconCategory, IconItem} from './types';

export const iconCategories: IconCategory[] = [
    {id: 'arrows', label: 'Arrows'},
    {id: 'layout', label: 'Layout'},
    {id: 'text', label: 'Text'},
    {id: 'status', label: 'Status'},
    {id: 'files', label: 'Files'},
    {id: 'shapes', label: 'Shapes'},
    {id: 'development', label: 'Development'},
    {id: 'editor', label: 'Editor'},
    {id: 'people', label: 'People'},
    {id: 'media', label: 'Media'},
    {id: 'brands', label: 'Brands'},
    {id: 'charts', label: 'Charts'},
    {id: 'commerce', label: 'Commerce'},
    {id: 'communication', label: 'Communication'},
    {id: 'games', label: 'Games'},
    {id: 'devices', label: 'Devices'},
    {id: 'maps', label: 'Maps'},
    {id: 'tools', label: 'Tools'},
    {id: 'math', label: 'Math'},
    {id: 'security', label: 'Security'},
    {id: 'cloud', label: 'Cloud'},
    {id: 'finance', label: 'Finance'},
    {id: 'health', label: 'Health'},
    {id: 'transport', label: 'Transport'},
    {id: 'weather', label: 'Weather'},
    {id: 'time', label: 'Time'},
    {id: 'food', label: 'Food'},
];

export const isIconInCategory = ({meta}: IconItem, categoryId: string) =>
    meta.categories.includes(categoryId);
