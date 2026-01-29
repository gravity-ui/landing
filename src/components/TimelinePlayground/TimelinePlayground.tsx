import {useTranslation} from 'next-i18next';
import {memo} from 'react';

import {PlaygroundWrap} from '../PlaygroundWrap';

import {Playground} from './Playground';

export const TimelinePlayground = memo(() => {
    const {t} = useTranslation('timeline');

    return (
        <PlaygroundWrap title={t('title')} libraryId="timeline" goToLibraryText={t('goToLibrary')}>
            <Playground />
        </PlaygroundWrap>
    );
});

TimelinePlayground.displayName = 'TimelinePlayground';
