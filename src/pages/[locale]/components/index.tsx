import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';
import {getI18nProps, getLocaleLink} from '../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

export const ComponentsPage = () => {
    const {i18n} = useTranslation();
    const router = useRouter();

    React.useEffect(() => {
        const firstLib = libs[0];
        if (firstLib) {
            router.replace(getLocaleLink(`/components/${firstLib.id}`, i18n));
        } else {
            router.replace(getLocaleLink('/', i18n));
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Components" />;
};

export default ComponentsPage;
