import type {IconCategory, IconItem} from './types';

export const iconCategories: IconCategory[] = [
    {id: 'arrows'},
    {id: 'layout'},
    {id: 'text'},
    {id: 'status'},
    {id: 'files'},
    {id: 'shapes'},
    {id: 'development'},
    {id: 'editor'},
    {id: 'people'},
    {id: 'media'},
    {id: 'brands'},
    {id: 'charts'},
    {id: 'commerce'},
    {id: 'communication'},
    {id: 'games'},
    {id: 'devices'},
    {id: 'maps'},
    {id: 'tools'},
    {id: 'math'},
    {id: 'security'},
    {id: 'cloud'},
    {id: 'finance'},
    {id: 'health'},
    {id: 'transport'},
    {id: 'weather'},
    {id: 'time'},
    {id: 'food'},
];

export const isIconInCategory = ({meta}: IconItem, categoryId: string) =>
    meta.categories.includes(categoryId);
