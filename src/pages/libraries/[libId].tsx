import {GetStaticPaths, GetStaticProps} from 'next';

import {Layout} from '../../components/Layout/Layout';
import {Library} from '../../components/Library/Library';
import {getLibById, getLibsList} from '../../utils';

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.map((item) => ({params: {libId: item.config.id}})),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {libId: context.params?.libId},
    };
};

export const LibraryPage = ({libId}: {libId: string}) => {
    const lib = getLibById(libId);

    return (
        <Layout title={lib?.config.title ?? ''}>
            <Library lib={lib} />
        </Layout>
    );
};

export default LibraryPage;
