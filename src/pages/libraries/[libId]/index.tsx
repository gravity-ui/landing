import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';

import {Layout} from '../../../components/Layout/Layout';
import {Library} from '../../../components/Library/Library';
import {type Lib, fetchLibById} from '../../../services/lib';
import {getI18nProps, getLibraryMeta, isValidLibId} from '../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const libId = ctx.params?.libId as string;

    if (!isValidLibId(libId)) {
        return {
            notFound: true,
        };
    }

    const [lib, i18nProps] = await Promise.all([
        fetchLibById(libId),
        getI18nProps(ctx, ['library', 'libraries-info']),
    ]);

    return {
        props: {
            libId: ctx.params?.libId,
            lib,
            ...i18nProps,
        },
    };
};

export const LibraryPage = ({lib}: {lib: Lib}) => {
    const {t} = useTranslation();

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
