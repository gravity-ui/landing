import {IntersectionLoadComponent} from 'src/components/IntersectionLoadComponent/IntersectionLoadComponent';

import {UISamplesLoader} from '../UISamplesLoader/UISamplesLoader';

const getComponent = async () => (await import('./MailPreview')).MailPreview;

export const LazyMailPreview: React.FC = () => {
    return (
        <IntersectionLoadComponent
            cacheKey="MailPreview"
            getComponent={getComponent}
            loader={<UISamplesLoader />}
        />
    );
};
