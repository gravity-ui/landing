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

    // Check if we're on a blog page - blog is only available for en and ru
    const isBlogPage = router.asPath.includes('/blog');

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

    // Filter locales for blog pages - only en and ru are available
    const availableLocales = React.useMemo(() => {
        if (isBlogPage) {
            return i18nextConfig.i18n.locales.filter(
                (locale) => locale === 'en' || locale === 'ru',
            );
        }
        return i18nextConfig.i18n.locales;
    }, [isBlogPage]);

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
                    if (appLocale === locale) {
                        return;
                    }

                    // For blog pages, only allow en and ru
                    if (isBlogPage && locale !== 'en' && locale !== 'ru') {
                        return;
                    }

                    setCookie({name: NEXT_LOCALE_COOKIE, value: locale});

                    router.push(router.pathname, router.asPath, {locale});
                }}
            />
        </div>
    );
};
