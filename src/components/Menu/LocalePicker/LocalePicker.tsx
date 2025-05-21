import {Select, SelectOption} from '@gravity-ui/uikit';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../../../next-i18next.config';
import {LOCALE_LOCAL_STORAGE_KEY} from '../../../constants';
import {block} from '../../../utils';

import './LocalePicker.scss';

const b = block('menu-local-picker');

const FLAGS: Record<string, string> = {
    en: '🇺🇸',
    ru: '🇷🇺',
    es: '🇪🇸',
    zh: '🇨🇳',
};

export const LocalePicker: React.FC = () => {
    const router = useRouter();

    const renderOption = React.useCallback((option: SelectOption<string>) => {
        const locale = option.value;
        const localeUpperCase = option.value.toUpperCase();
        return (
            <div className={b('locale-item')}>
                {FLAGS[locale] ? <span className={b('locale-flag')}>{FLAGS[locale]}</span> : null}
                <span className={b('locale-code')}>{localeUpperCase}</span>
                {i18nextConfig.aiTranslatedLocales.includes(locale) ? (
                    <React.Fragment>
                        <span className={b('locale-ai-icon')}>✨</span>
                        <span className={b('locale-ai-label')}>AI</span>
                    </React.Fragment>
                ) : null}
            </div>
        );
    }, []);

    if (i18nextConfig.i18n.locales.length < 2) {
        return null;
    }

    return (
        <div className={b()}>
            <Select
                size="xl"
                width="max"
                value={[router.locale ?? i18nextConfig.i18n.defaultLocale]}
                options={i18nextConfig.i18n.locales.map((locale) => ({
                    value: locale,
                }))}
                renderOption={renderOption}
                renderSelectedOption={renderOption}
                onUpdate={([locale]) => {
                    if (router.locale === locale) {
                        return;
                    }

                    localStorage.setItem(LOCALE_LOCAL_STORAGE_KEY, locale);

                    router.push(router.pathname, router.asPath, {locale});
                }}
            />
        </div>
    );
};
