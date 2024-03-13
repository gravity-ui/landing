import {I18n} from 'next-i18next';

import nextI18nextConfig from '../../next-i18next.config';

export const getLocaleLink = (link: string, i18n: I18n) => {
    const prefix =
        i18n.language === nextI18nextConfig.i18n.defaultLocale ? '' : `/${i18n.language}`;

    if (prefix !== '' && link === '/') {
        return prefix;
    }

    return `${prefix}${link}`;
};
