import {GetServerSidePropsContext} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import i18nextConfig from '../../next-i18next.config';

export const getI18nPaths = () =>
    i18nextConfig.i18n.locales
        .filter((locale) => locale !== i18nextConfig.i18n.defaultLocale)
        .map((locale) => ({
            params: {
                locale,
            },
        }));

export async function getI18nProps(ctx: GetServerSidePropsContext, ns?: string[]) {
    const namespaces = ns ? ['common', ...ns] : ['common'];

    const locale = ctx.locale ?? i18nextConfig.i18n.defaultLocale;

    const props = {
        ...(await serverSideTranslations(locale, namespaces)),
    };

    return props;
}
