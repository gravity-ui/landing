import bemBlock from 'bem-cn-lite';

export type CnBlock = ReturnType<typeof bemBlock>;

export type CnMods = Record<string, string | boolean | undefined>;

export const NAMESPACE = 'gravity-ui-landing-';

export function block(name: string): CnBlock {
    return bemBlock(`${NAMESPACE}${name}`);
}
