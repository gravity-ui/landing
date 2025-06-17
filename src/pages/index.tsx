import {GetServerSideProps} from 'next';

import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';
import {getI18nProps} from '../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['home', 'libraries-info'])),
        },
    };
};

const Home = () => {
    return (
        <Layout isPageConstructor>
            <Landing />
        </Layout>
    );
};

export default Home;
