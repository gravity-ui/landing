import {IntersectionLoadComponent} from 'src/components/IntersectionLoadComponent/IntersectionLoadComponent';

import {UISamplesLoader} from '../UISamplesLoader/UISamplesLoader';

const getComponent = async () => (await import('./ApartmentCardPreview')).ApartmentCardPreview;

export const LazyApartmentCardPreview: React.FC = () => {
    return (
        <IntersectionLoadComponent
            cacheKey="ApartmentCardPreview"
            getComponent={getComponent}
            loader={<UISamplesLoader />}
        />
    );
};
