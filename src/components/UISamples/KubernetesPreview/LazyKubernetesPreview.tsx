import {IntersectionLoadComponent} from 'src/components/IntersectionLoadComponent/IntersectionLoadComponent';

import {UISamplesLoader} from '../UISamplesLoader/UISamplesLoader';

const getComponent = async () => (await import('./KubernetesPreview')).KubernetesPreview;

export const LazyKubernetesPreview: React.FC = () => {
    return (
        <IntersectionLoadComponent
            cacheKey="KubernetesPreview"
            getComponent={getComponent}
            loader={<UISamplesLoader />}
        />
    );
};
