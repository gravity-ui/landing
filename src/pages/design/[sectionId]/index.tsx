import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import React from 'react';

// import {DesignLayout} from '../../../components/DesignLayout/DesignLayout';
// import {DesignSection} from '../../../components/DesignSection/DesignSection';
import {Layout} from '../../../components/Layout/Layout';
import {sections} from '../../../content/design';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: sections.map((item) => ({params: {sectionId: item.id}})),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {sectionId: context.params?.sectionId},
    };
};

export const DesignSectionPage = ({sectionId}: {sectionId: string}) => {
    const router = useRouter();

    const section = sections.find((item) => item.id === sectionId);

    if (!section) {
        return null;
    }
    React.useEffect(() => {
        const firstArticle = section.articles[0];

        if (firstArticle) {
            router.replace(`/design/${section.id}/${firstArticle.id}`);
        } else {
            router.replace('/');
        }
    }, []);

    return (
        <Layout title={section.title}>
            {/* <DesignLayout sectionId={sectionId}>
                <DesignSection section={section} />
            </DesignLayout> */}
        </Layout>
    );
};

export default DesignSectionPage;
