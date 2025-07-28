import {PageConstructor, PageContent} from '@gravity-ui/page-constructor';
import {useTranslation} from 'next-i18next';
import {useMemo} from 'react';

import contentEn from '../../content/media-en.yaml';
import contentRu from '../../content/media-ru.yaml';

export const Media = () => {
    const {t, i18n} = useTranslation();

    const content = useMemo(() => {
        if (i18n.language === 'ru') {
            return contentRu;
        }
        return contentEn;
    }, [i18n.language, t]);

    return <PageConstructor content={content as PageContent} />;
};
