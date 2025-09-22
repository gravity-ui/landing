import {Loader} from '@gravity-ui/uikit';
import {Api} from 'src/api';
import {block} from 'src/utils';

import {IntersectionLoadComponent} from '../IntersectionLoadComponent/IntersectionLoadComponent';

type Props = Omit<
    React.ComponentProps<
        typeof IntersectionLoadComponent<Awaited<ReturnType<typeof getComponent>>>
    >,
    'cacheKey' | 'getComponent' | 'getComponentProps' | 'loader'
>;

import './ExpandableContributorList.scss';

const b = block('expandable-contributor-list');

const getComponent = async () => {
    return (await import('./ExpandableContributorList')).ExpandableContributorList;
};

const getComponentProps = async () => {
    const contributors = await Api.instance.fetchAllContributorsFromClient();

    return {contributors};
};

export const LazyExpandableContributorsList: React.FC<Props> = (props) => {
    return (
        <IntersectionLoadComponent
            cacheKey="ExpandableContributorList"
            getComponent={getComponent}
            getComponentProps={getComponentProps}
            loader={<Loader size="l" className={b('loader')} />}
            {...props}
        />
    );
};
