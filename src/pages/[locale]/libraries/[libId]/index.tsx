import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';

import {Layout} from '../../../../components/Layout/Layout';
import {Library} from '../../../../components/Library/Library';
import {
    getI18nPaths,
    getI18nProps,
    getLibById,
    getLibraryMeta,
    getLibsList,
} from '../../../../utils';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getI18nPaths().reduce<GetStaticPathsResult['paths']>((acc, localeItem) => {
        acc.push(
            ...libs.map((libItem) => ({
                params: {locale: localeItem.params.locale, libId: libItem.config.id},
            })),
        );
        return acc;
    }, []);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            libId: ctx.params?.libId,
            ...(await getI18nProps(ctx, ['library', 'libraries-info'])),
        },
    };
};

export const LibraryPage = ({libId}: {libId: string}) => {
    const {t} = useTranslation();

    const lib = getLibById(libId);

    return (
        <Layout
            title={lib?.config.title ?? ''}
            meta={getLibraryMeta({id: lib.config.id, title: lib.config.title}, t)}
        >
            <Library lib={lib} />
        </Layout>
    );
};

export default LibraryPage;
