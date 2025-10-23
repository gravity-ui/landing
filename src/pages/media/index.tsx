import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {Layout} from 'src/components/Layout/Layout';
import {Media} from 'src/components/Media/Media';
import {getI18nProps} from 'src/utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['media'])),
        },
    };
};

export default function MediaPage() {
    const {t} = useTranslation();
    return (
        <Layout
            title={t('media:title')}
            isPageConstructor
            meta={{
                description: t('media:meta_description'),
                name: `Gravity UI – ${t('media:title')}`,
                image: 'https://gravity-ui.com/index-social.png',
            }}
        >
            <Media />
        </Layout>
    );
}
