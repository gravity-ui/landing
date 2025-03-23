import {SegmentedRadioGroup} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../../../next-i18next.config';
import {LOCALE_LOCAL_STORAGE_KEY} from '../../../constants';
import {block} from '../../../utils';

import './LocalePicker.scss';

const b = block('menu-local-picker');

const FLAGS: Record<string, string> = {
    en: '🇬🇧',
    ru: '🇷🇺',
    es: '🇪🇸',
    zh: '🇨🇳',
};

export const LocalePicker: React.FC = () => {
    const {i18n} = useTranslation();
    const router = useRouter();

    if (i18nextConfig.i18n.locales.length < 2) {
        return null;
    }

    return (
        <div className={b()}>
            <SegmentedRadioGroup
                value={i18n.language}
                onUpdate={(locale) => {
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
            >
                {i18nextConfig.i18n.locales.map((locale) => {
                    const localeUpperCase = locale.toUpperCase();
                    return (
                        <SegmentedRadioGroup.Option
                            key={locale}
                            value={locale}
                            content={
                                <div className={b('locale-item')}>
                                    {locale in FLAGS ? FLAGS[locale] : localeUpperCase}
                                    {i18nextConfig.aiTranslatedLocales.includes(locale) ? (
                                        <span className={b('ai-label')}>AI</span>
                                    ) : null}
                                </div>
                            }
                        />
                    );
                })}
            </SegmentedRadioGroup>
        </div>
    );
};
