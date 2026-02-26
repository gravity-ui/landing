import {Flex, Loader} from '@gravity-ui/uikit';
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
            loader={
                <Flex height="100%" justifyContent="center" alignItems="center">
                    <Loader size="l" />
                </Flex>
            }
            wrapperClassName={b('preview-wrapper')}
        />
    );
};
