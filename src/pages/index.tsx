import {GetServerSideProps} from 'next';
import {fetchAllContributors, fetchLandingLibs} from 'src/services/lib';

import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';
import type {Contributor, Lib} from '../services/lib';
import {getI18nProps} from '../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const [contributors, libs, i18nProps] = await Promise.all([
        fetchAllContributors(),
        fetchLandingLibs(),
        getI18nProps(ctx, ['home', 'libraries-info']),
    ]);

    return {
        props: {
            contributors,
            libs,
            ...i18nProps,
        },
    };
};

const Home = ({libs, contributors}: {libs: Lib[]; contributors: Contributor[]}) => {
    return (
        <Layout isPageConstructor>
            <Landing libs={libs} contributors={contributors} />
        </Layout>
    );
};

export default Home;
