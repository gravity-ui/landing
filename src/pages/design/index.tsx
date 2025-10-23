import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../components/Layout/Layout';
import {sections} from '../../content/design';
import {getI18nProps} from '../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

export const DesignPage = () => {
    const router = useRouter();

    React.useEffect(() => {
        const firstSection = sections[0];
        if (firstSection) {
            const firstArticle = firstSection.articles[0];

            if (firstArticle) {
                router.replace(`/design/${firstSection.id}/${firstArticle.id}`);
            } else {
                router.replace(`/design/${firstSection.id}`);
            }
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return (
        <Layout
            title="Design"
            meta={{
                description:
                    'Explore Gravity UI design principles, guidelines, and best practices for building modern interfaces',
                name: 'Gravity UI – Design System',
                image: 'https://gravity-ui.com/index-social.png',
            }}
        />
    );
};

export default DesignPage;
