import bemBlock from 'bem-cn-lite';
import {ImageProps} from '@gravity-ui/page-constructor';

export type CnBlock = ReturnType<typeof bemBlock>;

export type CnMods = Record<string, string | boolean | undefined>;

export const NAMESPACE = 'gravity-ui-landing-';

export function block(name: string): CnBlock {
    return bemBlock(`${NAMESPACE}${name}`);
}

const DEFAULT_THEME = 'light';

export interface ThemedValue<T> extends Partial<Record<string, T>> {
    [DEFAULT_THEME]: T;
}

export type ThemeSupporting<T> = T | ThemedValue<T>;

export function isThemedValue<T>(value: ThemeSupporting<T>): value is ThemedValue<T> {
    return typeof value === 'object' && value !== null && DEFAULT_THEME in value;
}

export function getThemedValue<T>(value: ThemeSupporting<T>, theme = DEFAULT_THEME) {
    if (isThemedValue(value)) {
        return value[theme] || value[DEFAULT_THEME];
    } else {
        return value;
    }
}

export function getMediaImage(image: ImageProps) {
    return typeof image === 'string' ? {src: image} : image;
}
