import {GetStaticPaths, GetStaticProps} from 'next';

import {Layout} from '../../../components/Layout/Layout';
import {Libraries} from '../../../components/Libraries/Libraries';
import {useLocaleRedirect} from '../../../hooks/useLocaleRedirect';
import {getI18nPaths, getI18nProps} from '../../../utils/i18next';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getI18nPaths(),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

export const LibrariesPage = () => {
    useLocaleRedirect();

    return (
        <Layout title="Libraries">
            <Libraries />
        </Layout>
    );
};

export default LibrariesPage;
