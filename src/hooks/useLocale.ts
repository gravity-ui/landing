import {useRouter} from 'next/router';

import nextI18nextConfig from '../../next-i18next.config';

export type Locale = 'en' | 'ru' | 'es' | 'zh' | 'ko' | 'fr' | 'de' | 'pt' | 'ja';

export const useLocale = () => {
    const {locale} = useRouter();

    return (locale ?? nextI18nextConfig.i18n.defaultLocale) as Locale;
};
