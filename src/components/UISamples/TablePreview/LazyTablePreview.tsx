import {IntersectionLoadComponent} from 'src/components/IntersectionLoadComponent/IntersectionLoadComponent';

import {UISamplesLoader} from '../UISamplesLoader/UISamplesLoader';

const getComponent = async () => (await import('./TablePreview')).TablePreview;

export const LazyTablePreview: React.FC = () => {
    return (
        <IntersectionLoadComponent
            cacheKey="TablePreview"
            getComponent={getComponent}
            loader={<UISamplesLoader />}
        />
    );
};
