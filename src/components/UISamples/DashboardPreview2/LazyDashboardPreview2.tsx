import {IntersectionLoadComponent} from 'src/components/IntersectionLoadComponent/IntersectionLoadComponent';

import {UISamplesLoader} from '../UISamplesLoader/UISamplesLoader';

const getComponent = async () => (await import('./DashboardPreview2')).DashboardPreview2;

export const LazyDashboardPreview2: React.FC = () => {
    return (
        <IntersectionLoadComponent
            cacheKey="DashboardPreview2"
            getComponent={getComponent}
            loader={<UISamplesLoader />}
        />
    );
};
