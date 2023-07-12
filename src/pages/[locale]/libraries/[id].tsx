import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from 'next';

import {Layout} from '../../../components/Layout/Layout';
import {Library} from '../../../components/Library/Library';
import {getI18nPaths, getI18nProps, getLibsList} from '../../../utils';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getI18nPaths().reduce<GetStaticPathsResult['paths']>((acc, localeItem) => {
        acc.push(
            ...libs.map((libItem) => ({
                params: {locale: localeItem.params.locale, id: libItem.config.id},
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
        props: {id: ctx.params?.id, ...(await getI18nProps(ctx))},
    };
};

export const LibraryPage = ({id}: {id: string}) => {
    const lib = libs.find((item) => item.config.id === id);

    return (
        <Layout title={lib?.config.title ?? ''}>
            <Library id={id} />
        </Layout>
    );
};

export default LibraryPage;
