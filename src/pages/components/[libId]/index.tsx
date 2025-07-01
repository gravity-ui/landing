import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';
import {getI18nProps} from '../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {libId: ctx.params?.libId, ...(await getI18nProps(ctx))},
    };
};

export const LibraryComponentsPage = ({libId}: {libId: string}) => {
    const router = useRouter();

    React.useEffect(() => {
        const firstLib = libs.find((item) => item.id === libId);
        if (firstLib) {
            const firstComponent = firstLib.components[0];
            if (firstComponent) {
                router.replace(`/components/${firstLib.id}/${firstComponent.id}`);
            } else {
                router.replace('/');
            }
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Components" />;
};

export default LibraryComponentsPage;
