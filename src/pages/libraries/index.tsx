import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';

import {Layout} from '../../components/Layout/Layout';
import {Libraries} from '../../components/Libraries/Libraries';
import {type Lib, fetchAllLibs} from '../../services/lib';
import {getI18nProps} from '../../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const [libs, i18nProps] = await Promise.all([
        fetchAllLibs(),
        getI18nProps(ctx, ['libraries', 'libraries-info']),
    ]);

    return {
        props: {
            libs,
            ...i18nProps,
        },
    };
};

export const LibrariesPage = ({libs}: {libs: Lib[]}) => {
    const {t} = useTranslation();

    return (
        <Layout title={t('libraries:title')}>
            <Libraries libs={libs} />
        </Layout>
    );
};

export default LibrariesPage;
