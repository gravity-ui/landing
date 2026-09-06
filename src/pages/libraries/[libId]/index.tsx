import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';

import {type LibWithFullData} from '../../../api';
import {ServerApi} from '../../../api/server';
import {Layout} from '../../../components/Layout/Layout';
import {Library} from '../../../components/Library/Library';
import {getI18nProps, getLibraryMeta, isValidLibId} from '../../../utils';
import {SITE_URL} from '../../../utils/canonical';
import {getSoftwareSourceCodeJsonLd} from '../../../utils/structuredData';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const libId = ctx.params?.libId as string;

    if (!isValidLibId(libId)) {
        return {
            notFound: true,
        };
    }

    const [lib, i18nProps] = await Promise.all([
        ServerApi.instance.fetchLibByIdWithCache(libId),
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

export const LibraryPage = ({lib}: {lib: LibWithFullData}) => {
    const {t} = useTranslation();

    const meta = getLibraryMeta({id: lib.config.id, title: lib.config.title}, t);

    return (
        <Layout
            title={lib?.config.title ?? ''}
            meta={meta}
            jsonLd={[
                getSoftwareSourceCodeJsonLd({
                    name: lib.config.title,
                    description: meta.description,
                    githubId: lib.config.githubId,
                    url: `${SITE_URL}/libraries/${lib.config.id}`,
                }),
            ]}
        >
            <Library lib={lib} />
        </Layout>
    );
};

export default LibraryPage;
