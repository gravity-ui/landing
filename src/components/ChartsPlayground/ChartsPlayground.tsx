import {useTranslation} from 'next-i18next';
import {memo} from 'react';

import {PlaygroundWrap} from '../PlaygroundWrap';

import {Playground} from './Playground';

export const ChartsPlayground = memo(() => {
    const {t} = useTranslation('charts');

    return (
        <PlaygroundWrap title={t('title')} libraryId="charts" goToLibraryText={t('goToLibrary')}>
            <Playground />
        </PlaygroundWrap>
    );
});

ChartsPlayground.displayName = 'ChartsPlayground';
