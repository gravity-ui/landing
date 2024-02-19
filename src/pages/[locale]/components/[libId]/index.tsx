import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

// import {ComponentsLayout} from '../../../components/ComponentsLayout/ComponentsLayout';
// import {ComponentsLibrary} from '../../../components/ComponentsLibrary/ComponentsLibrary';
import nextI18nextConfig from '../../../../../next-i18next.config';
import {Layout} from '../../../../components/Layout/Layout';
import {libs} from '../../../../content/components';
import {getI18nPaths, getI18nProps} from '../../../../utils/i18next';

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
        const localePrefix =
            i18n.language === nextI18nextConfig.i18n.defaultLocale ? '/' : `/${i18n.language}/`;

        const firstLib = libs.find((item) => item.id === libId);
        if (firstLib) {
            const firstComponent = firstLib.components[0];
            if (firstComponent) {
                router.replace(`${localePrefix}components/${firstLib.id}/${firstComponent.id}`);
            } else {
                router.replace(localePrefix);
            }
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Components" />;

    // const lib = libs.find((item) => item.id === libId);

    // if (!lib) {
    //     return null;
    // }

    // return (
    //     <Layout title={lib.title}>
    //         <ComponentsLayout libId={libId}>
    //             <ComponentsLibrary lib={lib} />
    //         </ComponentsLayout>
    //     </Layout>
    // );
};

export default LibraryComponentsPage;
