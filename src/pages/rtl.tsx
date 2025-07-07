import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import React from 'react';

import nextI18nextConfig from '../../next-i18next.config';
import {Api, Contributor, Lib} from '../api';
import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';
import {getI18nProps} from '../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const [contributors, libs, i18nProps] = await Promise.all([
        Api.instance.fetchAllContributorsWithCache(),
        Api.instance.fetchLandingLibs(),
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

export const RTLPage = ({libs, contributors}: {libs: Lib[]; contributors: Contributor[]}) => {
    const {i18n} = useTranslation();
    i18n.changeLanguage(nextI18nextConfig.i18n.defaultLocale);

    return (
        <Layout isPageConstructor isRtl hideLocalePicker>
            <Landing libs={libs} contributors={contributors} />
        </Layout>
    );
};

export default RTLPage;
