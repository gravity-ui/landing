import {GetStaticPaths, GetStaticProps} from 'next';

import {Layout} from '../../components/Layout/Layout';
import {Library} from '../../components/Library/Library';
import {getLibsList} from '../../utils';

function getOgImageUrl(id?: string) {
    return id ? `https://gravity-ui.com/og-images/${id}.jpg` : undefined;
}

const libs = getLibsList();

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: libs.map((item) => ({params: {id: item.config.id}})),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {id: context.params?.id},
    };
};

export const LibraryPage = ({id}: {id: string}) => {
    const lib = libs.find((item) => item.config.id === id);

    return (
        <Layout
            title={lib?.config.title ?? ''}
            meta={{
                name: lib?.config.title,
                description: lib?.config.description,
                image: getOgImageUrl(lib?.config.id),
            }}
        >
            <Library id={id} />
        </Layout>
    );
};

export default LibraryPage;
