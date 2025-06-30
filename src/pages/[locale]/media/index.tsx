import {GetStaticPaths, GetStaticProps} from 'next';
import {useTranslation} from 'react-i18next';
import {Layout} from 'src/components/Layout/Layout';
import {Media} from 'src/components/Media/Media';
import {getI18nPaths, getI18nProps} from 'src/utils';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getI18nPaths(),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = {
        props: {
            ...(await getI18nProps(ctx, ['themes'])),
        },
    };
    return result;
};

export default function MediaPage() {
    const {t} = useTranslation();
    return (
        <Layout title={t('media:title')}>
            <Media />
        </Layout>
    );
}
