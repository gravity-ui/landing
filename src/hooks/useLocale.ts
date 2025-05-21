import {useRouter} from 'next/router';

import nextI18nextConfig from '../../next-i18next.config';

export const useLocale = () => {
    const {locale} = useRouter();

    return (locale ?? nextI18nextConfig.i18n.defaultLocale) as 'en' | 'ru' | 'es' | 'zh';
};
