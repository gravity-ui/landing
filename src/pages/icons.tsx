import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import {Icons} from '../components/Icons';
import {Layout} from '../components/Layout/Layout';
import {getI18nProps} from '../utils/i18next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['icons'])),
        },
    };
};

const ICON_QUERY_KEY = 'icon';

export const IconsPage = () => {
    const {t} = useTranslation('icons');
    const router = useRouter();
    const {[ICON_QUERY_KEY]: iconFromQuery} = router.query;
    const currentIcon = typeof iconFromQuery === 'string' ? iconFromQuery : undefined;

    const handleChangeCurrentIcon = React.useCallback(
        (newIcon?: string) => {
            const query = new URLSearchParams(window.location.search);

            if (newIcon) {
                query.set(ICON_QUERY_KEY, newIcon);
            } else {
                query.delete(ICON_QUERY_KEY);
            }

            router.push({pathname: router.asPath.split('?')[0], search: query.toString()});
        },
        [router],
    );

    return (
        <Layout
            title="Icons"
            meta={{
                description: t('meta_description'),
                name: 'Gravity UI – Icons',
                image: 'https://gravity-ui.com/index-social.png',
            }}
        >
            <Icons currentIcon={currentIcon} onChangeCurrentIcon={handleChangeCurrentIcon} />
        </Layout>
    );
};

export default IconsPage;
