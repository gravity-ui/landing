import {Lang} from '@gravity-ui/uikit';

export const localeEn = {
    code: 'en-En',
    lang: Lang.En,
    langName: 'English',
    pathPrefix: 'en',
};

export const localeRu = {
    code: 'ru-Ru',
    lang: Lang.Ru,
    langName: 'Russia',
    pathPrefix: 'ru',
};

export const localeDe = {
    code: 'de-De',
    lang: Lang.De,
    langName: 'Deutsch',
    pathPrefix: 'de',
};

export const localeEs = {
    code: 'es-Es',
    lang: Lang.Es,
    langName: 'Español',
    pathPrefix: 'es',
};

export const localeFr = {
    code: 'fr-Fr',
    lang: Lang.Fr,
    langName: 'Français',
    pathPrefix: 'fr',
};

export const localeKo = {
    code: 'ko-Ko',
    lang: Lang.Ko,
    langName: '한국어',
    pathPrefix: 'ko',
};

export const localeZh = {
    code: 'zh-Zh',
    lang: Lang.Zh,
    langName: '中文',
    pathPrefix: 'zh',
};

export const localeMap: Record<string, typeof localeEn> = {
    en: localeEn,
    ru: localeRu,
    de: localeDe,
    es: localeEs,
    fr: localeFr,
    ko: localeKo,
    zh: localeZh,
};
