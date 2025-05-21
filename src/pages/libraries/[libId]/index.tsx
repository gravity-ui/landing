import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';

import {Layout} from '../../../components/Layout/Layout';
import {Library} from '../../../components/Library/Library';
import {getI18nProps, getLibById, getLibraryMeta} from '../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
