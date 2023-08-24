import dynamic from 'next/dynamic';

import {Repos} from '../../../../types/common';
import {getGithubUrl, getReadmeUrl} from '../../utils';

const getterOptions = {repoName: Repos.Uikit, componentName: 'Skeleton'};

export const skeletonConfig = {
    id: 'skeleton',
    title: 'Skeleton',
    githubUrl: getGithubUrl(getterOptions),
    content: {
        readmeUrl: getReadmeUrl(getterOptions),
    },
    sandbox: {
        component: dynamic(() =>
            import('@gravity-ui/uikit').then((mod) =>
                mod.Skeleton.bind(null, {style: {height: '80px'}}),
            ),
        ),
        props: {},
    },
};
