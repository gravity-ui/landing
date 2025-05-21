import {Link} from '@gravity-ui/uikit';
import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useEffect} from 'react';

import nextI18nextConfig from '../../next-i18next.config';
import {Layout} from '../components/Layout/Layout';
import {LOCALE_LOCAL_STORAGE_KEY} from '../constants';

export const getServerSideProps: GetServerSideProps = async () => {
    // Load all translations for all locales at build time
    const locales = nextI18nextConfig.i18n.locales;
    const allTranslations: Record<string, any> = {};

    for (const locale of locales) {
        allTranslations[locale] = {
            ...(await serverSideTranslations(locale, ['common'])),
        };
    }

    return {
        props: {
            _nextI18Next: allTranslations[nextI18nextConfig.i18n.defaultLocale]._nextI18Next,
            allTranslations,
        },
    };
};

interface Custom404Props {
    allTranslations: Record<string, any>;
}

export default function Custom404({allTranslations}: Custom404Props) {
    const {t, i18n} = useTranslation('common');

    useEffect(() => {
        // Determine locale from URL or localStorage
        const pathLocale = window.location.pathname.split('/')[1];
        const isValidLocale = nextI18nextConfig.i18n.locales.includes(pathLocale);
        const savedLocale = localStorage.getItem(LOCALE_LOCAL_STORAGE_KEY);
        const detectedLocale = isValidLocale
            ? pathLocale
            : savedLocale && nextI18nextConfig.i18n.locales.includes(savedLocale)
            ? savedLocale
            : nextI18nextConfig.i18n.defaultLocale;

        // Change language if needed
        if (i18n.language !== detectedLocale) {
            const resources = allTranslations[detectedLocale]?._nextI18Next?.initialI18nStore;
            if (resources) {
                Object.keys(resources).forEach((lng) => {
                    Object.keys(resources[lng]).forEach((ns) => {
                        i18n.addResourceBundle(lng, ns, resources[lng][ns], true, true);
                    });
                });
                i18n.changeLanguage(detectedLocale);
            }
        }
    }, [allTranslations, i18n]);

    return (
        <Layout title={t('pageNotFound')}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    height: '70vh',
                    padding: '0 20px',
                }}
            >
                <h2>{t('pageNotFound')}</h2>
                <p>{t('pageNotFoundDescription')}</p>
                <Link href="/">{t('backToHome')}</Link>
            </div>
        </Layout>
    );
}
