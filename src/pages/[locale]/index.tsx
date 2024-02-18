import {GetStaticPaths, GetStaticProps} from 'next';

import {Landing} from '../../components/Landing/Landing';
import {MainPageLayout} from '../../components/Layout/Layout';
import {useLocaleRedirect} from '../../hooks/useLocaleRedirect';
import {getI18nPaths, getI18nProps} from '../../utils/i18next';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getI18nPaths(),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['home'])),
        },
    };
};

const Home = () => {
    useLocaleRedirect();

    return (
        <MainPageLayout>
            <Landing />
        </MainPageLayout>
    );
};

export default Home;
