export type LocaleConfig = {
    code: string;
    lang: string;
    langName: string;
    pathPrefix: string;
};

export const localeEn: LocaleConfig = {
    code: 'en-US',
    lang: 'en',
    langName: 'English',
    pathPrefix: 'en',
};

export const localeRu: LocaleConfig = {
    code: 'ru-RU',
    lang: 'ru',
    langName: 'Russia',
    pathPrefix: 'ru',
};

export const localeDe: LocaleConfig = {
    code: 'de-DE',
    lang: 'de',
    langName: 'Deutsch',
    pathPrefix: 'de',
};

export const localeEs: LocaleConfig = {
    code: 'es-ES',
    lang: 'es',
    langName: 'Español',
    pathPrefix: 'es',
};

export const localeFr: LocaleConfig = {
    code: 'fr-FR',
    lang: 'fr',
    langName: 'Français',
    pathPrefix: 'fr',
};

export const localeKo: LocaleConfig = {
    code: 'ko-KR',
    lang: 'ko',
    langName: '한국어',
    pathPrefix: 'ko',
};

export const localeZh: LocaleConfig = {
    code: 'zh-CN',
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
