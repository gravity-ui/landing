import {Loader} from '@gravity-ui/uikit';
import {IntersectionLoadComponent} from 'src/components/IntersectionLoadComponent/IntersectionLoadComponent';
import {block} from 'src/utils';

import './TablePreview.scss';

const b = block('table-preview');

const getComponent = async () => (await import('./TablePreview')).TablePreview;

export const LazyTablePreview: React.FC = () => {
    return (
        <IntersectionLoadComponent
            cacheKey="TablePreview"
            getComponent={getComponent}
            loader={<Loader className={b('loader')} size="l" />}
            wrapperClassName={b('loader')}
        />
    );
};
