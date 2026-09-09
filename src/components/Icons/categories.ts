import {allIcons} from './constants';
import type {IconItem} from './types';

const preferredCategoryOrder = [
    'arrows',
    'layout',
    'text',
    'status',
    'files',
    'shapes',
    'development',
    'editor',
    'people',
    'media',
    'brands',
    'charts',
    'commerce',
    'communication',
    'games',
    'devices',
    'maps',
    'tools',
    'math',
    'security',
    'cloud',
    'finance',
    'health',
    'transport',
    'weather',
    'time',
    'food',
] as const;

const categoryCountsMap = new Map<string, number>();

allIcons.forEach((icon) => {
    icon.meta.categories.forEach((categoryId) => {
        categoryCountsMap.set(categoryId, (categoryCountsMap.get(categoryId) ?? 0) + 1);
    });
});

export const categoryCounts = Object.fromEntries(categoryCountsMap);

const categoryIds = Object.keys(categoryCounts);
const preferredCategoryIds = new Set<string>(preferredCategoryOrder);

export const iconCategories = [
    ...preferredCategoryOrder.filter((categoryId) => categoryCounts[categoryId]),
    ...categoryIds.filter((categoryId) => !preferredCategoryIds.has(categoryId)).sort(),
].map((id) => ({id}));

export const isIconInCategory = ({meta}: IconItem, categoryId: string) =>
    meta.categories.includes(categoryId);
