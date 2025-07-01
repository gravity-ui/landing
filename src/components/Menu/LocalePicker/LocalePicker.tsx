import {Select, SelectOption} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../../../next-i18next.config';
import {LOCALE_LOCAL_STORAGE_KEY} from '../../../constants';
import {block} from '../../../utils';

import './LocalePicker.scss';

const b = block('menu-local-picker');

const FLAGS: Record<string, string> = {
    en: 'us',
    ru: 'ru',
    es: 'es',
    zh: 'cn',
};

export const LocalePicker: React.FC = () => {
    const {i18n} = useTranslation();
    const router = useRouter();

    const renderOption = React.useCallback((option: SelectOption<string>) => {
        const locale = option.value;
        const localeUpperCase = option.value.toUpperCase();
        return (
            <div className={b('locale-item')}>
                {FLAGS[locale] ? <span className={`fi fi-${FLAGS[locale]}`}></span> : null}
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
                value={[i18n.language]}
                options={i18nextConfig.i18n.locales.map((locale) => ({
                    value: locale,
                }))}
                renderOption={renderOption}
                renderSelectedOption={renderOption}
                onUpdate={([locale]) => {
                    if (i18n.language === locale) {
                        return;
                    }

                    localStorage.setItem(LOCALE_LOCAL_STORAGE_KEY, locale);

                    const path = router.asPath;
                    if (locale === i18nextConfig.i18n.defaultLocale) {
                        router.replace(path.replace(`/${i18n.language}`, '') || '/');
                    } else if (i18n.language === i18nextConfig.i18n.defaultLocale) {
                        router.replace(`/${locale}${path}`);
                    } else {
                        router.replace(path.replace(`/${i18n.language}`, `/${locale}`));
                    }
                }}
            />
        </div>
    );
};
