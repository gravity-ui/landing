import {IntersectionLoadComponent} from 'src/components/IntersectionLoadComponent/IntersectionLoadComponent';

import {UISamplesLoader} from '../UISamplesLoader/UISamplesLoader';

const getComponent = async () => (await import('./OsnPreview')).OsnPreview;

export const LazyOsnPreview: React.FC = () => {
    return (
        <IntersectionLoadComponent
            cacheKey="OsnPreview"
            getComponent={getComponent}
            loader={<UISamplesLoader />}
        />
    );
};
