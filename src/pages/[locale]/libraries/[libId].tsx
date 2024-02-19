import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';

import {Layout} from '../../../components/Layout/Layout';
import {Library} from '../../../components/Library/Library';
import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nPaths, getI18nProps, getLibById, getLibsList} from '../../../utils';

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
        props: {libId: ctx.params?.libId, ...(await getI18nProps(ctx, ['library']))},
    };
};

export const LibraryPage = ({libId}: {libId: string}) => {
    useLocaleRedirect();

    const lib = getLibById(libId);

    return (
        <Layout title={lib?.config.title ?? ''}>
            <Library lib={lib} />
        </Layout>
    );
};

export default LibraryPage;
