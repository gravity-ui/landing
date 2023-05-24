import {GetStaticPaths, GetStaticProps} from 'next';

import {Layout} from '../../components/Layout/Layout';
import {Library} from '../../components/Library/Library';
import {getLibsList} from '../../utils';

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
    const lib = libs.find((item) => item.config.id === libId);

    return (
        <Layout title={lib?.config.title ?? ''}>
            <Library id={libId} />
        </Layout>
    );
};

export default LibraryPage;
