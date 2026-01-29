export type LocaleConfig = {
    code: string;
    lang: string;
    langName: string;
    pathPrefix: string;
};

export const localeEn: LocaleConfig = {
    code: 'en-En',
    lang: 'en',
    langName: 'English',
    pathPrefix: 'en',
};

export const localeRu: LocaleConfig = {
    code: 'ru-Ru',
    lang: 'ru',
    langName: 'Russia',
    pathPrefix: 'ru',
};

export const localeDe: LocaleConfig = {
    code: 'de-De',
    lang: 'de',
    langName: 'Deutsch',
    pathPrefix: 'de',
};

export const localeEs: LocaleConfig = {
    code: 'es-Es',
    lang: 'es',
    langName: 'Español',
    pathPrefix: 'es',
};

export const localeFr: LocaleConfig = {
    code: 'fr-Fr',
    lang: 'fr',
    langName: 'Français',
    pathPrefix: 'fr',
};

export const localeKo: LocaleConfig = {
    code: 'ko-Ko',
    lang: 'ko',
    langName: '한국어',
    pathPrefix: 'ko',
};

export const localeZh: LocaleConfig = {
    code: 'zh-Zh',
    lang: 'zh',
    langName: '中文',
    pathPrefix: 'zh',
};

export const localeMap: Record<string, LocaleConfig> = {
    en: localeEn,
    ru: localeRu,
    de: localeDe,
    es: localeEs,
    fr: localeFr,
    ko: localeKo,
    zh: localeZh,
};
