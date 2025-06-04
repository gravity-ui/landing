import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../components/Layout/Layout';
import {libs} from '../../content/components';
import {getI18nProps} from '../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

export const ComponentsPage = () => {
    const router = useRouter();

    React.useEffect(() => {
        const firstLib = libs[0];
        if (firstLib) {
            router.replace(`/components/${firstLib.id}`);
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Components" />;
};

export default ComponentsPage;
