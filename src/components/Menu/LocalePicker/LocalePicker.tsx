import {Select, SelectOption} from '@gravity-ui/uikit';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../../../next-i18next.config';
import {NEXT_LOCALE_COOKIE} from '../../../constants';
import {Locale, useLocale} from '../../../hooks/useLocale';
import {block, setCookie} from '../../../utils';

import './LocalePicker.scss';

const b = block('menu-local-picker');

const FLAGS: Record<Locale, string> = {
    en: 'us',
    ru: 'ru',
    es: 'es',
    zh: 'cn',
    fr: 'fr',
    de: 'de',
    ko: 'kr',
};

export const LocalePicker: React.FC = () => {
    const router = useRouter();

    const appLocale = useLocale();

    const renderOption = React.useCallback((option: SelectOption<string>) => {
        const locale = option.value;
        const localeUpperCase = option.value.toUpperCase();
        return (
            <div className={b('locale-item')}>
                {FLAGS[locale as Locale] ? (
                    <span className={`fi fi-${FLAGS[locale as Locale]}`}></span>
                ) : null}
                <span className={b('locale-code')}>{localeUpperCase}</span>
            </div>
        );
    }, []);

    if (i18nextConfig.i18n.locales.length < 2) {
        return null;
    }

    const availableLocales = i18nextConfig.i18n.locales;

    const handleLocaleChange = React.useCallback(
        (locale: string) => {
            if (appLocale === locale) {
                return;
            }

            setCookie({name: NEXT_LOCALE_COOKIE, value: locale});

            // Get the current path without locale prefix
            let pathWithoutLocale = router.asPath;

            // Remove locale prefix if it exists
            const currentLocalePrefix = `/${appLocale}`;
            if (pathWithoutLocale.startsWith(currentLocalePrefix)) {
                pathWithoutLocale = pathWithoutLocale.slice(currentLocalePrefix.length);
            }

            // Ensure path starts with /
            if (!pathWithoutLocale.startsWith('/')) {
                pathWithoutLocale = `/${pathWithoutLocale}`;
            }

            // Build new path with new locale (preserve query and hash)
            const newPath =
                locale === i18nextConfig.i18n.defaultLocale
                    ? pathWithoutLocale
                    : `/${locale}${pathWithoutLocale}`;

            // For pages with getServerSideProps, we need to do a full page reload
            // to ensure server-side props are fetched with the new locale
            // Using window.location ensures getServerSideProps is called
            window.location.href = newPath;
        },
        [appLocale, router.asPath],
    );

    return (
        <div className={b()}>
            <Select
                size="xl"
                width="max"
                value={[appLocale]}
                options={availableLocales.map((locale) => ({
                    value: locale,
                }))}
                renderOption={renderOption}
                renderSelectedOption={renderOption}
                onUpdate={([locale]) => {
                    handleLocaleChange(locale);
                }}
            />
        </div>
    );
};
