import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import i18nextConfig from '../../../../next-i18next.config';
import {block} from '../../../utils';
import {Link} from '../../Link';

import './LocalPicker.scss';

const b = block('menu-local-picker');

export const LocalePicker: React.FC = () => {
    const {i18n} = useTranslation();
    const router = useRouter();

    return (
        <div className={b()}>
            {i18nextConfig.i18n.locales.map((locale) => {
                const localeUpperCase = locale.toUpperCase();

                if (i18n.language === locale) {
                    return (
                        <div key={locale} className={b('locale', {disabled: true})}>
                            {localeUpperCase}
                        </div>
                    );
                }

                let newHref = router.asPath;

                if (locale === i18nextConfig.i18n.defaultLocale) {
                    newHref = newHref.replace(`/${i18n.language}`, '') || '/';
                }

                return (
                    <Link key={locale} href={newHref} locale={locale} className={b('locale')}>
                        {localeUpperCase}
                    </Link>
                );
            })}
        </div>
    );
};
