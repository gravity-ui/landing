import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {Layout} from '../../../components/Layout/Layout';
import {sections} from '../../../content/design';
import {getI18nProps, getLocaleLink} from '../../../utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

export const DesignPage = () => {
    const {i18n} = useTranslation();
    const router = useRouter();

    React.useEffect(() => {
        const firstSection = sections[0];
        if (firstSection) {
            const firstArticle = firstSection.articles[0];

            if (firstArticle) {
                router.replace(
                    getLocaleLink(`/design/${firstSection.id}/${firstArticle.id}`, i18n),
                );
            } else {
                router.replace(getLocaleLink(`/design/${firstSection.id}`, i18n));
            }
        } else {
            router.replace('/');
        }
    }, []);

    // Prevent blinking before redirect
    return <Layout title="Design" />;
};

export default DesignPage;
