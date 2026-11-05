import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';
import {getI18nProps} from '../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const libId = ctx.params?.libId as string;

    // Without this check any /components/<anything> renders an empty shell with HTTP 200,
    // so unlimited non-existent URLs are indexable as soft 404s. Mirrors the guard in
    // src/pages/design/[sectionId]/index.tsx.
    const lib = libs.find((item) => item.id === libId);

    if (!lib) {
        return {
            notFound: true,
        };
    }

    return {
        props: {libId, ...(await getI18nProps(ctx))},
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
