import {IntersectionLoadComponent} from 'src/components/IntersectionLoadComponent/IntersectionLoadComponent';

import {UISamplesLoader} from '../UISamplesLoader/UISamplesLoader';

const getComponent = async () => (await import('./TasksPreview')).TasksPreview;

export const LazyTasksPreview: React.FC = () => {
    return (
        <IntersectionLoadComponent
            cacheKey="TasksPreview"
            getComponent={getComponent}
            loader={<UISamplesLoader />}
        />
    );
};
