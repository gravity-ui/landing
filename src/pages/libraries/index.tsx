import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';

import {Layout} from '../../components/Layout/Layout';
import {Libraries} from '../../components/Libraries/Libraries';
import {getI18nProps} from '../../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['libraries', 'libraries-info'])),
        },
    };
};

export const LibrariesPage = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('libraries:title')}>
            <Libraries />
        </Layout>
    );
};

export default LibrariesPage;
