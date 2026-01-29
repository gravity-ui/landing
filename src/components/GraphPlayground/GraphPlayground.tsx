import {useTranslation} from 'next-i18next';
import {memo} from 'react';

import {block} from '../../utils';
import {PlaygroundWrap} from '../PlaygroundWrap';

import './GraphPlayground.scss';
import {GraphPlayground as GraphPlaygroundInner} from './Playground/GraphPlayground';

const b = block('graph');

export const GraphPlayground = memo(() => {
    const {t} = useTranslation('graph');

    return (
        <PlaygroundWrap title={t('title')} libraryId="graph" goToLibraryText={t('goToLibrary')}>
            <GraphPlaygroundInner className={b('graph-viewer')} key={Date.now()} />
        </PlaygroundWrap>
    );
});

GraphPlayground.displayName = 'GraphPlayground';
