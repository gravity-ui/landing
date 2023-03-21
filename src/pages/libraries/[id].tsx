import {GetStaticPaths, GetStaticProps} from 'next';

import {Layout} from '../../components/Layout/Layout';
import {Library} from '../../components/Library/Library';
import {libs} from '../../libs.mjs';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.map((item) => ({params: {id: item.id}})),
        fallback: false, // can also be true or 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {id: context.params?.id},
    };
};

export const LibraryPage = ({id}: {id: string}) => {
    const libConfig = libs.find((item) => item.id === id);

    return (
        <Layout title={libConfig?.title}>
            <Library id={id} />
        </Layout>
    );
};

export default LibraryPage;
