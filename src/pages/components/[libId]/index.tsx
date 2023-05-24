import {GetStaticPaths, GetStaticProps} from 'next';

import {ComponentsLayout} from '../../../components/ComponentsLayout/ComponentsLayout';
import {Layout} from '../../../components/Layout/Layout';
import {LibraryComponents} from '../../../components/LibraryComponents/LibraryComponents';
import {libComponents} from '../../../content/components';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libComponents.map((item) => ({params: {libId: item.id}})),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {libId: context.params?.libId},
    };
};

export const LibraryComponentsPage = ({libId}: {libId: string}) => {
    const lib = libComponents.find((item) => item.id === libId);

    if (!lib) {
        return null;
    }

    return (
        <Layout title={lib.title}>
            <ComponentsLayout libId={libId}>
                <LibraryComponents id={libId} />
            </ComponentsLayout>
        </Layout>
    );
};

export default LibraryComponentsPage;
