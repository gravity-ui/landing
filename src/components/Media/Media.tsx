import {PageConstructor, PageContent} from '@gravity-ui/page-constructor';
import {useTranslation} from 'next-i18next';
import {useMemo} from 'react';

import contentEn from '../../content/media-en.yaml';
import contentEs from '../../content/media-es.yaml';
import contentRu from '../../content/media-ru.yaml';
import contentZh from '../../content/media-zh.yaml';

export const Media = () => {
    const {t, i18n} = useTranslation();

    const content = useMemo(() => {
        switch (i18n.language) {
            case 'ru':
                return contentRu;
            case 'es':
                return contentEs;
            case 'zh':
                return contentZh;
            case 'en':
            default:
                return contentEn;
        }
    }, [i18n.language, t]);

    return <PageConstructor content={content as PageContent} />;
};
