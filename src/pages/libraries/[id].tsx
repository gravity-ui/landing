import {GetStaticPaths, GetStaticProps} from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import {Layout} from '../../components/Layout/Layout';
import librariesInfo from '../../libraries-info.json';
import '../../styles.scss';
import '../../vendors.scss';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: Object.keys(librariesInfo).map((id) => ({params: {id}})),
        fallback: false, // can also be true or 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {id: context.params?.id},
    };
};

export const Library = ({id}: {id: string}) => {
    const libraryInfo = librariesInfo[id] as unknown as any;
    return (
        <Layout title={`Library – ${id}`}>
            <div>
                <Link href="/libraries">Back to libraries</Link>
            </div>
            <div>LIBRARY – {id}</div>
            <ReactMarkdown children={libraryInfo?.readmeInfo} />
        </Layout>
    );
};

export default Library;
