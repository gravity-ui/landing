import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../next-i18next.config';
import {LOCALE_LOCAL_STORAGE_KEY} from '../constants';

export const useLocaleRedirect = () => {
    const {i18n} = useTranslation();
    const router = useRouter();

    React.useEffect(() => {
        if (router.route === '/404') {
            return;
        }

        const currentLocale = i18n.language;

        const localStorageLocale = localStorage.getItem(LOCALE_LOCAL_STORAGE_KEY);

        const correctLocale = localStorageLocale
            ? localStorageLocale
            : i18nextConfig.i18n.defaultLocale;

        if (currentLocale !== correctLocale) {
            const currentPath = router.asPath;

            if (correctLocale === i18nextConfig.i18n.defaultLocale) {
                const replacePart = currentPath.replace(`/${currentLocale}`, '');
                if (replacePart === '') {
                    router.replace('/');
                } else {
                    router.replace(replacePart);
                }
            } else if (currentLocale === i18nextConfig.i18n.defaultLocale) {
                router.replace(`/${correctLocale}${currentPath === '/' ? '' : currentPath}`);
            } else {
                router.replace(currentPath.replace(`/${currentLocale}`, `/${correctLocale}`));
            }

            localStorage.setItem(LOCALE_LOCAL_STORAGE_KEY, correctLocale);
        }
    }, [router.route, i18n.language, router.asPath]);
};
