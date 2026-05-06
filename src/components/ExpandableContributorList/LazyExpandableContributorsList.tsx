import {Loader} from '@gravity-ui/uikit';
import {ClientApi} from 'src/api/client';
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

function shuffle<T>(arr: T[]): T[] {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

const getComponentProps = async () => {
    const contributors = await ClientApi.instance.fetchAllContributors();
    const newcomers = contributors.filter((c) => c.isNewcomer);

    return {contributors: shuffle(contributors), newcomers};
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
