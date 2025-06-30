import {PageConstructor, PageContent} from '@gravity-ui/page-constructor';
import {useTranslation} from 'next-i18next';
import {useMemo} from 'react';

import {getContent as getEnContent} from '../../content/media-en';
import {getContent as getRuContent} from '../../content/media-ru';

export const Media = () => {
    const {t, i18n} = useTranslation();

    const content = useMemo(() => {
        if (i18n.language === 'ru') {
            return getRuContent(t);
        }
        return getEnContent(t);
    }, [i18n.language, t]);

    return <PageConstructor content={content as PageContent} />;
};
