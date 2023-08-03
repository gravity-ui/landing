import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import React from 'react';

// import {ComponentsLayout} from '../../../components/ComponentsLayout/ComponentsLayout';
// import {ComponentsLibrary} from '../../../components/ComponentsLibrary/ComponentsLibrary';
import {Layout} from '../../../components/Layout/Layout';
import {libs} from '../../../content/components';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.map((item) => ({params: {libId: item.id}})),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {libId: context.params?.libId},
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

    // const lib = libs.find((item) => item.id === libId);

    // if (!lib) {
    //     return null;
    // }

    // return (
    //     <Layout title={lib.title}>
    //         <ComponentsLayout libId={libId}>
    //             <ComponentsLibrary lib={lib} />
    //         </ComponentsLayout>
    //     </Layout>
    // );
};

export default LibraryComponentsPage;
