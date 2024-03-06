import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../../components/Layout/Layout';
import {libs} from '../../../../content/components';
import {getI18nPaths, getI18nProps, getLocaleLink} from '../../../../utils';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getI18nPaths().reduce<GetStaticPathsResult['paths']>((acc, localeItem) => {
        acc.push(
            ...libs.map((libItem) => ({
                params: {locale: localeItem.params.locale, libId: libItem.id},
            })),
        );
        return acc;
    }, []);

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {libId: ctx.params?.libId, ...(await getI18nProps(ctx))},
    };
};

export const LibraryComponentsPage = ({libId}: {libId: string}) => {
    const {i18n} = useTranslation();
    const router = useRouter();

    React.useEffect(() => {
        const firstLib = libs.find((item) => item.id === libId);
        if (firstLib) {
            const firstComponent = firstLib.components[0];
            if (firstComponent) {
                router.replace(
                    getLocaleLink(`/components/${firstLib.id}/${firstComponent.id}`, i18n),
                );
            } else {
                router.replace(getLocaleLink('/', i18n));
            }
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Components" />;
};

export default LibraryComponentsPage;
